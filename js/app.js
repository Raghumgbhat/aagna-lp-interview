// ── State ──────────────────────────────────────────────────────────────────
function migrateLpData(data) {
  const out = {};
  for (const [cat, qs] of Object.entries(data)) {
    out[cat] = qs.map(item =>
      typeof item === 'string' ? { q: item, expectations: '' } : item
    );
  }
  return out;
}

let lpData       = migrateLpData(JSON.parse(localStorage.getItem('lpData_aagna') || 'null') || JSON.parse(JSON.stringify(BASE_DATA)));
let panelists    = JSON.parse(localStorage.getItem('panelists_aagna') || '[]');
let selCatEdit   = null;
let sessQs       = [];
let curIdx       = 0;
let sessId       = null;
let sessAns      = {};
let recognition  = null;
let isRec        = false;
let curRating    = '';
let sessStartTime = null;

const AV_COLORS = ['#0F1F3D','#1E5FD4','#0D7A55','#4D35A8','#965C00','#B52B27','#1A3260','#2E4070'];

// ── Helpers ────────────────────────────────────────────────────────────────
function saveLP()    { localStorage.setItem('lpData_aagna',    JSON.stringify(lpData));    }
function savePanel() { localStorage.setItem('panelists_aagna', JSON.stringify(panelists)); }
function esc(s)      { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function shuffle(a)  { return [...a].sort(() => Math.random() - .5); }
function initials(n) { return n.trim().split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2); }
function htmlEsc(s)  { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function fmtDt(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString(undefined, { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
function fmtTime(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleTimeString(undefined, { hour:'2-digit', minute:'2-digit' });
}
function duration(s, e) {
  if (!s || !e) return '—';
  const m = Math.round((new Date(e) - new Date(s)) / 60000);
  if (m < 1) return '<1 min';
  return m < 60 ? m + ' min' : Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
}

// ── Panelists ──────────────────────────────────────────────────────────────
function renderPanelists() {
  document.getElementById('panel-count').textContent = `${panelists.length} member${panelists.length !== 1 ? 's' : ''}`;
  document.getElementById('panelist-list').innerHTML = panelists.length
    ? panelists.map((p, i) => `
        <div class="p-row">
          <div class="p-av" style="background:${AV_COLORS[i % AV_COLORS.length]}">${initials(p)}</div>
          <span class="p-nm">${p}</span>
          <button class="p-x" onclick="delPanelist(${i})">×</button>
        </div>`).join('')
    : '<div class="empty-p">No interviewers added yet</div>';
  refreshIvDd();
}

function addPanelist() {
  const inp = document.getElementById('new-panel-inp');
  const v   = inp.value.trim();
  if (!v) { showToast('Enter a name'); return; }
  if (panelists.includes(v)) { showToast('Already in panel'); return; }
  panelists.push(v);
  savePanel();
  inp.value = '';
  renderPanelists();
  showToast(`${v} added`);
}

function delPanelist(i) {
  panelists.splice(i, 1);
  savePanel();
  renderPanelists();
}

function refreshIvDd() {
  const sel  = document.getElementById('interviewer-sel');
  const prev = sel.value;
  sel.innerHTML = '<option value="">— Select Interviewer —</option>' +
    panelists.map(p => `<option value="${esc(p)}">${p}</option>`).join('');
  if (panelists.includes(prev)) sel.value = prev;
}

// ── Question Bank ──────────────────────────────────────────────────────────
function renderCatList() {
  const cats  = Object.keys(lpData);
  const total = Object.values(lpData).flat().length;
  document.getElementById('cat-total').textContent = `${cats.length} · ${total}q`;
  document.getElementById('cat-list').innerHTML = cats.map(name => `
    <div class="cat-item${selCatEdit === name ? ' on' : ''}" onclick="selectCatEdit('${esc(name)}')">
      <div class="cat-dot"></div>
      <span class="cat-nm">${name}</span>
      <span class="cat-cnt">${lpData[name].length}</span>
      <button class="cat-x" onclick="event.stopPropagation();deleteCatByName('${esc(name)}')">×</button>
    </div>`).join('');
}

function selectCatEdit(name) {
  selCatEdit = name;
  renderCatList();
  renderQEditor();
}

function renderQEditor() {
  const msg   = document.getElementById('no-cat-msg');
  const inner = document.getElementById('q-editor-inner');
  if (!selCatEdit) {
    msg.style.display   = 'flex';
    inner.style.display = 'none';
    return;
  }
  msg.style.display   = 'none';
  inner.style.display = 'flex';
  const qs = lpData[selCatEdit] || [];
  document.getElementById('qe-title').textContent = selCatEdit;
  document.getElementById('qe-sub').textContent   = `${qs.length} question${qs.length !== 1 ? 's' : ''}`;
  document.getElementById('qe-body').innerHTML = qs.length
    ? qs.map((item, i) => `
        <div class="q-row">
          <span class="q-rn">${i + 1}</span>
          <div class="q-row-inner">
            <span class="q-rt">${item.q}</span>
            <div class="exp-row">
              <label class="exp-lbl">Answer Expectations</label>
              <textarea class="exp-ta" rows="2"
                placeholder="What to look for in a strong answer…"
                onblur="saveExpectations(${i}, this.value)">${item.expectations || ''}</textarea>
            </div>
          </div>
          <button class="q-rd" onclick="delQ(${i})">×</button>
        </div>`).join('')
    : '<div class="empty-qs">No questions yet — add one below</div>';
}

function saveExpectations(idx, val) {
  if (!selCatEdit || !lpData[selCatEdit][idx]) return;
  lpData[selCatEdit][idx].expectations = val.trim();
  saveLP();
}

function addCat() {
  const inp = document.getElementById('new-cat-inp');
  const v   = inp.value.trim();
  if (!v)       { showToast('Enter a name'); return; }
  if (lpData[v]) { showToast('Already exists'); return; }
  lpData[v]  = [];
  saveLP();
  inp.value  = '';
  selCatEdit = v;
  renderCatList();
  renderQEditor();
  refreshCatDd();
  showToast(`"${v}" created`);
}

function deleteCatByName(name) {
  if (!confirm(`Delete "${name}" and all its questions?`)) return;
  delete lpData[name];
  saveLP();
  if (selCatEdit === name) selCatEdit = null;
  renderCatList();
  renderQEditor();
  refreshCatDd();
  showToast('Deleted');
}

function deleteCurCat() {
  if (selCatEdit) deleteCatByName(selCatEdit);
}

function addQuestion() {
  if (!selCatEdit) { showToast('Select a category first'); return; }
  const inp = document.getElementById('new-q-inp');
  const exp = document.getElementById('new-q-exp');
  const v   = inp.value.trim();
  const e   = exp ? exp.value.trim() : '';
  if (!v) { showToast('Enter a question'); return; }
  lpData[selCatEdit].push({ q: v, expectations: e });
  saveLP();
  inp.value = '';
  if (exp) exp.value = '';
  renderCatList();
  renderQEditor();
  refreshCatDd();
  document.getElementById('qe-body').scrollTop = 99999;
  showToast('Question added');
}

function delQ(i) {
  if (!confirm('Remove this question?')) return;
  lpData[selCatEdit].splice(i, 1);
  saveLP();
  renderCatList();
  renderQEditor();
  refreshCatDd();
}

// ── Interview — category dropdown ──────────────────────────────────────────
function refreshCatDd() {
  const sel  = document.getElementById('cat-sel');
  const prev = sel.value;
  sel.innerHTML = `<option value="__rnd__">Random Mix — all categories</option>` +
    Object.entries(lpData)
      .map(([n, qs]) => `<option value="${esc(n)}">${n} (${qs.length})</option>`)
      .join('');
  sel.value = (prev === '__rnd__' || lpData[prev]) ? prev : '__rnd__';
  updateBadge(sel.value);
}

function updateBadge(v) {
  const n = v === '__rnd__'
    ? Object.values(lpData).flat().length
    : (lpData[v] || []).length;
  document.getElementById('q-count-badge').textContent = `${n} question${n !== 1 ? 's' : ''}`;
}

function onCatChange() {
  const sel = document.getElementById('cat-sel');
  updateBadge(sel.value);
  const hasProgress = sessQs.length > 0 && Object.keys(sessAns).length > 0;
  if (hasProgress && !confirm('Changing category starts a new session. Continue?')) {
    const curCat = sessQs.length > 0
      ? (sessQs[0].lp === sessQs[sessQs.length - 1].lp ? sessQs[0].lp : '__rnd__')
      : '__rnd__';
    sel.value = curCat;
    return;
  }
  startSession(sel.value);
}

// ── Interview — session ────────────────────────────────────────────────────
function startSession(catVal) {
  stopRec();
  if (catVal === '__rnd__') {
    sessQs = shuffle(
      Object.entries(lpData).flatMap(([lp, qs]) =>
        qs.map(item => ({ lp, q: item.q, expectations: item.expectations || '' }))
      )
    );
  } else {
    sessQs = (lpData[catVal] || []).map(item => ({
      lp:           catVal,
      q:            item.q,
      expectations: item.expectations || ''
    }));
  }
  sessAns      = {};
  curIdx       = 0;
  curRating    = '';
  sessId       = 's_' + Date.now();
  sessStartTime = new Date().toISOString();

  if (sessQs.length) {
    dbPut('sessions', buildSess());
    renderQList();
    loadQ(0);
  } else {
    document.getElementById('q-list').innerHTML       = '';
    document.getElementById('q-txt').textContent      = 'No questions in this category. Add some in the Question Bank.';
    document.getElementById('q-txt').style.color      = '#6B7FA0';
    document.getElementById('q-lp').textContent       = '—';
    document.getElementById('q-num').textContent      = '—';
    clearFields();
    updateProg();
  }
}

function buildSess(endTime) {
  const cv = document.getElementById('cat-sel').value;
  return {
    id:            sessId,
    candidateName: document.getElementById('cand-name').value.trim() || 'Unknown',
    interviewer:   document.getElementById('interviewer-sel').value,
    category:      cv === '__rnd__' ? 'Random Mix' : cv,
    startTime:     sessStartTime,
    endTime:       endTime || null,
    total:         sessQs.length,
    answered:      Object.keys(sessAns).length,
    createdAt:     sessStartTime
  };
}

function renderQList() {
  document.getElementById('q-list').innerHTML = sessQs.map((it, i) => `
    <div class="qi${i === curIdx ? ' on' : ''}${sessAns[i] ? ' done' : ''}" onclick="loadQ(${i})">
      ${it.q.substring(0, 50)}${it.q.length > 50 ? '…' : ''}
    </div>`).join('');
}

function loadQ(i) {
  curIdx = i;
  const it = sessQs[i];

  document.getElementById('q-lp').textContent  = it.lp;
  document.getElementById('q-num').textContent  = `Question ${i + 1} of ${sessQs.length}`;
  document.getElementById('q-txt').textContent  = it.q;
  document.getElementById('q-txt').style.color  = '#0F1F3D';

  const saved = sessAns[i] || {};

  // Model answer priority:
  // 1. Whatever the interviewer already typed and saved for this question this session
  // 2. Custom "Answer Expectations" set in the Question Bank for this question
  // 3. Built-in assessment guide from MODEL_ANSWERS
  let defaultModel = '';
  const builtIn = (typeof MODEL_ANSWERS !== 'undefined' && MODEL_ANSWERS[it.q]) ? MODEL_ANSWERS[it.q] : '';
  const custom  = it.expectations || '';
  if (custom && builtIn) {
    defaultModel = custom + '\n\n─────────────────────────────\n' + builtIn;
  } else {
    defaultModel = custom || builtIn;
  }

  document.getElementById('model-ans').value = (saved.modelAnswer !== undefined) ? saved.modelAnswer : defaultModel;
  document.getElementById('cand-ans').value  = saved.candidateAnswer || '';
  document.getElementById('iv-notes').value  = saved.notes || '';
  curRating = saved.rating || '';
  document.querySelectorAll('.r-opt').forEach(b => b.classList.toggle('on', b.dataset.v === curRating));

  updateProg();
  renderQList();
  stopRec();
}

function clearFields() {
  ['model-ans', 'cand-ans', 'iv-notes'].forEach(id => document.getElementById(id).value = '');
  curRating = '';
  document.querySelectorAll('.r-opt').forEach(b => b.classList.remove('on'));
}

function setRating(btn) {
  curRating = btn.dataset.v === curRating ? '' : btn.dataset.v;
  document.querySelectorAll('.r-opt').forEach(b => b.classList.toggle('on', b.dataset.v === curRating));
}

function updateProg() {
  const tot = sessQs.length;
  const ans = Object.keys(sessAns).length;
  const pct = tot ? Math.round(ans / tot * 100) : 0;
  document.getElementById('prog-frac').innerHTML = `${ans} <em>/ ${tot}</em>`;
  document.getElementById('pbar').style.width     = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '% answered';
  document.getElementById('prog-lp').textContent  = sessQs[curIdx]?.lp.split(' ').slice(0, 2).join(' ') || '';
}

function saveQ() {
  if (!sessQs.length) return;
  const d = {
    sessionId:       sessId,
    questionIndex:   curIdx,
    question:        sessQs[curIdx].q,
    lp:              sessQs[curIdx].lp,
    expectations:    sessQs[curIdx].expectations || '',
    modelAnswer:     document.getElementById('model-ans').value,
    candidateAnswer: document.getElementById('cand-ans').value,
    notes:           document.getElementById('iv-notes').value,
    rating:          curRating,
    savedAt:         new Date().toISOString()
  };
  sessAns[curIdx] = d;
  saveAns(d);
  dbPut('sessions', buildSess());
  updateProg();
  renderQList();
  showToast('Saved ✓');
}

function nextQ() {
  saveQ();
  if (curIdx < sessQs.length - 1) loadQ(curIdx + 1);
  else showToast('Last question reached');
}

function prevQ() {
  saveQ();
  if (curIdx > 0) loadQ(curIdx - 1);
}

function endSession() {
  const endTime = new Date().toISOString();
  if (sessQs.length) {
    const d = {
      sessionId:       sessId,
      questionIndex:   curIdx,
      question:        sessQs[curIdx].q,
      lp:              sessQs[curIdx].lp,
      expectations:    sessQs[curIdx].expectations || '',
      modelAnswer:     document.getElementById('model-ans').value,
      candidateAnswer: document.getElementById('cand-ans').value,
      notes:           document.getElementById('iv-notes').value,
      rating:          curRating,
      savedAt:         endTime
    };
    sessAns[curIdx] = d;
    saveAns(d);
    dbPut('sessions', buildSess(endTime));
  }
  showPg('records');
  renderRecs();
}

// ── Speech Recognition ─────────────────────────────────────────────────────
function initSpeech() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    document.getElementById('rec-hint').textContent = 'Speech API not supported — use Chrome or Edge';
    return;
  }
  recognition = new SR();
  recognition.continuous     = true;
  recognition.interimResults = true;
  recognition.lang           = 'en-US';
  let finalText = '';

  recognition.onstart = () => {
    isRec     = true;
    finalText = document.getElementById('cand-ans').value;
    document.getElementById('rec-btn').classList.add('live');
    document.getElementById('rec-lbl').textContent = 'Stop Recording';
    document.getElementById('rec-ind').textContent  = '● LIVE';
    document.getElementById('rec-ind').style.color  = '#B52B27';
  };

  recognition.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    document.getElementById('cand-ans').value = finalText + interim;
  };

  recognition.onend = () => {
    isRec = false;
    document.getElementById('rec-btn').classList.remove('live');
    document.getElementById('rec-lbl').textContent = 'Start Recording';
    document.getElementById('rec-ind').textContent  = 'voice → text';
    document.getElementById('rec-ind').style.color  = '#6B7FA0';
  };

  recognition.onerror = e => {
    document.getElementById('rec-hint').textContent = 'Error: ' + e.error;
    stopRec();
  };
}

function toggleRec() {
  if (!recognition) initSpeech();
  if (!recognition) return;
  isRec ? stopRec() : recognition.start();
}

function stopRec() {
  if (recognition && isRec) {
    try { recognition.stop(); } catch (e) {}
  }
}

// ── PDF Export ─────────────────────────────────────────────────────────────
function downloadPDF(sid) {
  dbGetAll('sessions', sessions => {
    const sess = sessions.find(s => s.id === sid);
    if (!sess) { showToast('Session not found'); return; }

    dbGetByIdx('answers', 'sid', sid, answers => {
      const sorted = answers.sort((a, b) => a.questionIndex - b.questionIndex);
      const RC  = { 'Strong Yes':'#0D7A55', 'Yes':'#0D9488', 'Borderline':'#965C00', 'No':'#C2612A', 'Strong No':'#B52B27' };
      const RBG = { 'Strong Yes':'#E4F5EF', 'Yes':'#EDFAF8', 'Borderline':'#FEF4E2', 'No':'#FEF0E8', 'Strong No':'#FDECEA' };

      const qBlocks = sorted.map((a, i) => `
        <div class="pdf-q-block">
          <div class="pdf-q-num">Question ${i + 1} of ${sess.total}</div>
          <span class="pdf-q-lp">${a.lp}</span>
          <div class="pdf-q-text">${htmlEsc(a.question)}</div>
          ${a.rating ? `<div style="margin-bottom:8px"><span class="pdf-rating" style="color:${RC[a.rating]||'#4A5E82'};background:${RBG[a.rating]||'#F4F7FB'}">${a.rating}</span></div>` : ''}
          <div class="pdf-section-label">Candidate Answer</div>
          <div class="pdf-answer-box">${a.candidateAnswer
            ? htmlEsc(a.candidateAnswer)
            : '<span style="color:#A8B6CC;font-style:italic">No answer recorded</span>'}</div>
          ${a.notes ? `
          <div class="pdf-section-label">Interviewer Notes</div>
          <div class="pdf-answer-box" style="border-left-color:#965C00">${htmlEsc(a.notes)}</div>` : ''}
          ${a.modelAnswer ? `
          <div class="pdf-section-label" style="margin-top:12px;color:#4D35A8">Assessment Guide / Model Answer</div>
          <div class="pdf-answer-box" style="border-left-color:#4D35A8;background:#F5F4FE;font-size:11px">${htmlEsc(a.modelAnswer)}</div>` : ''}
        </div>
        <hr class="pdf-divider"/>`).join('');

      document.getElementById('pdf-content').innerHTML = `
        <div class="pdf-header">
          <h1>Interview Assessment Report</h1>
          <p>LP Interview · AAGNA · Behavioural Assessment Platform</p>
        </div>
        <div class="pdf-meta-grid">
          <div class="pdf-meta-item"><label>Candidate</label><span>${sess.candidateName || '—'}</span></div>
          <div class="pdf-meta-item"><label>Interviewer</label><span>${sess.interviewer || '—'}</span></div>
          <div class="pdf-meta-item"><label>Category</label><span>${sess.category}</span></div>
          <div class="pdf-meta-item"><label>Date</label><span>${fmtDt(sess.startTime || sess.createdAt)}</span></div>
          <div class="pdf-meta-item"><label>Start Time</label><span>${fmtTime(sess.startTime)}</span></div>
          <div class="pdf-meta-item"><label>End / Duration</label><span>${fmtTime(sess.endTime)} (${duration(sess.startTime, sess.endTime)})</span></div>
          <div class="pdf-meta-item"><label>Questions Answered</label><span>${sess.answered} / ${sess.total}</span></div>
        </div>
        ${qBlocks}
        <div class="pdf-footer">Generated by LP Interview · AAGNA — ${new Date().toLocaleDateString(undefined, { day:'numeric', month:'long', year:'numeric' })}</div>`;

      document.getElementById('pdf-content').style.display = 'block';
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          document.getElementById('pdf-content').style.display = 'none';
        }, 500);
      }, 200);
    });
  });
}

// ── Records ────────────────────────────────────────────────────────────────
function renderRecs() {
  const q = (document.getElementById('srch')?.value || '').toLowerCase();
  dbGetAll('sessions', sessions => {
    const filtered = sessions
      .filter(s =>
        (s.candidateName || '').toLowerCase().includes(q) ||
        (s.category      || '').toLowerCase().includes(q) ||
        (s.interviewer   || '').toLowerCase().includes(q))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const el = document.getElementById('recs-list');
    if (!filtered.length) {
      el.innerHTML = '<div class="empty">No records yet. Complete an interview session to see it here.</div>';
      return;
    }

    el.innerHTML = filtered.map(s => `
      <div class="card s-card">
        <div class="s-hdr" onclick="toggleDetail('${s.id}')">
          <div style="flex:1">
            <div class="s-meta">
              <span>${fmtDt(s.startTime || s.createdAt)}</span>
              ${s.startTime ? `<span>Start: ${fmtTime(s.startTime)}</span>` : ''}
              ${s.endTime   ? `<span>End: ${fmtTime(s.endTime)}</span><span>Duration: ${duration(s.startTime, s.endTime)}</span>` : ''}
              ${s.interviewer ? `<span>Interviewer: ${s.interviewer}</span>` : ''}
            </div>
            <div class="s-title">${s.candidateName || 'Unknown Candidate'}</div>
            <div class="s-pills">
              <span class="pill pill-b">${s.category}</span>
              <span class="pill pill-g">${s.answered} answered</span>
              <span class="pill pill-n">${s.total} total</span>
            </div>
          </div>
          <div class="s-actions">
            <button class="btn btn-acc btn-xs" onclick="event.stopPropagation();downloadPDF('${s.id}')">Download PDF</button>
            <div class="s-arr">›</div>
          </div>
        </div>
        <div class="s-body" id="det-${s.id}"></div>
      </div>`).join('');
  });
}

function toggleDetail(sid) {
  const p = document.getElementById('det-' + sid);
  if (p.classList.contains('open')) { p.classList.remove('open'); return; }
  dbGetByIdx('answers', 'sid', sid, answers => {
    const RC = { 'Strong Yes':'#0D7A55', 'Yes':'#0D9488', 'Borderline':'#965C00', 'No':'#C2612A', 'Strong No':'#B52B27' };
    if (!answers.length) {
      p.innerHTML = '<p style="font-size:12px;color:#6B7FA0;padding:12px 0">No saved answers for this session.</p>';
    } else {
      p.innerHTML = answers
        .sort((a, b) => a.questionIndex - b.questionIndex)
        .map(a => `
          <div class="dq${a.candidateAnswer ? ' has' : ''}">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
              <span style="font-size:10px;font-weight:700;background:#0F1F3D;color:#fff;padding:2px 9px;border-radius:20px;font-family:monospace">${a.lp}</span>
              ${a.rating ? `<span style="font-size:11px;font-weight:700;color:${RC[a.rating]||'#6B7FA0'}">${a.rating}</span>` : ''}
            </div>
            <div class="dq-q">${a.question}</div>
            <div class="dlbl">Candidate Answer</div>
            <div class="dcont">${a.candidateAnswer || '<span style="color:#A8B6CC;font-style:italic">No answer recorded</span>'}</div>
            ${a.notes ? `<div class="dlbl">Interviewer Notes</div><div class="dcont">${a.notes}</div>` : ''}
            ${a.modelAnswer ? `
            <div class="dlbl" style="margin-top:10px;color:#4D35A8">Assessment Guide / Model Answer</div>
            <div class="dcont" style="background:#F5F4FE;border-left:2px solid #4D35A8;font-size:11px;white-space:pre-wrap">${a.modelAnswer}</div>` : ''}
          </div>`).join('');
    }
    p.classList.add('open');
  });
}

function clearAllRecs() {
  if (!confirm('Delete all records? This cannot be undone.')) return;
  dbClear('sessions');
  dbClear('answers');
  renderRecs();
  showToast('All records cleared');
}

// ── Navigation ─────────────────────────────────────────────────────────────
function showPg(name) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.getElementById('pg-' + name).classList.add('on');
  const label = name === 'setup' ? 'question' : name;
  document.querySelectorAll('.tab').forEach(t => {
    if (t.textContent.toLowerCase().includes(label)) t.classList.add('on');
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ── Boot ───────────────────────────────────────────────────────────────────
initDB();
renderCatList();
renderQEditor();
renderPanelists();
refreshCatDd();
refreshIvDd();
initSpeech();
startSession('__rnd__');
