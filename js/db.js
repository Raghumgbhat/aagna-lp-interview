// ── IndexedDB wrapper ──────────────────────────────────────────────
let db = null;

function initDB() {
  const req = indexedDB.open('LPInterviewAagna', 1);
  req.onupgradeneeded = e => {
    const d = e.target.result;
    if (!d.objectStoreNames.contains('sessions'))
      d.createObjectStore('sessions', { keyPath: 'id' });
    if (!d.objectStoreNames.contains('answers')) {
      const a = d.createObjectStore('answers', { keyPath: 'id', autoIncrement: true });
      a.createIndex('sid', 'sessionId');
    }
  };
  req.onsuccess = e => { db = e.target.result; };
  req.onerror = () => console.error('IndexedDB failed to open');
}

function dbPut(store, obj) {
  if (!db) return;
  db.transaction(store, 'readwrite').objectStore(store).put(obj);
}

function dbGetAll(store, cb) {
  if (!db) { cb([]); return; }
  const req = db.transaction(store, 'readonly').objectStore(store).getAll();
  req.onsuccess = e => cb(e.target.result || []);
}

function dbGetByIdx(store, indexName, val, cb) {
  if (!db) { cb([]); return; }
  const req = db.transaction(store, 'readonly')
    .objectStore(store)
    .index(indexName)
    .getAll(IDBKeyRange.only(val));
  req.onsuccess = e => cb(e.target.result || []);
}

function dbClear(store) {
  if (!db) return;
  db.transaction(store, 'readwrite').objectStore(store).clear();
}

function saveAns(ans) {
  if (!db) return;
  const tx = db.transaction('answers', 'readwrite');
  const idx = tx.objectStore('answers').index('sid');
  const req = idx.openCursor(IDBKeyRange.only(ans.sessionId));
  req.onsuccess = e => {
    const cursor = e.target.result;
    if (!cursor) {
      tx.objectStore('answers').add(ans);
      return;
    }
    if (cursor.value.questionIndex === ans.questionIndex) {
      cursor.update({ ...cursor.value, ...ans });
    } else {
      cursor.continue();
    }
  };
}
