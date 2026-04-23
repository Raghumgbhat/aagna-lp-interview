// LP Interview · AAGNA — Question Bank with Model Answers
// Each question is stored as { q: "question text", expectations: "optional notes" }
// expectations = Answer Expectations field editable in Question Bank
// MODEL_ANSWERS (below) are built-in interviewer guides, keyed by question text
const BASE_DATA = {
  "Customer Obsession": [
    {q:"What factors do you consider when developing test cases?",expectations:""},
    {q:"Share escalation bugs you missed — what did you learn?",expectations:""},
    {q:"Have you interacted with support teams or resolved a customer escalation? What were your learnings?",expectations:""},
    {q:"If you find a critical issue close to releasing a product, what would you do?",expectations:""},
    {q:"If a bug is returned as 'working as designed', what would you do?",expectations:""},
    {q:"When is the product ready to ship?",expectations:""}
  ],
  "Ownership": [
    {q:"Project is not moving as per plan because of your deliverables. How do you manage this?",expectations:""},
    {q:"Share an experience of a critical escalation needing immediate attention while you were busy with another assignment.",expectations:""},
    {q:"Tell me about a time you went beyond the assigned project work.",expectations:""}
  ],
  "Invent and Simplify": [
    {q:"Share an example of you proposing/driving an initiative that simplified and helped the teams.",expectations:""},
    {q:"How do you approach it when 5 days of effort needs to be done in 3 days every cycle?",expectations:""}
  ],
  "Are Right, A Lot": [
    {q:"Share an example of having a different view on an important topic. How did you address it?",expectations:""},
    {q:"What are some project-related decisions you have made recently? How did you make those decisions?",expectations:""}
  ],
  "Learn and Be Curious": [
    {q:"What is something new you have learnt in the last six months not related to the project?",expectations:""},
    {q:"What has given you the most satisfaction in the last one year?",expectations:""},
    {q:"What are your avenues for learning?",expectations:""},
    {q:"What feedback have you received from managers? What actions did you take?",expectations:""},
    {q:"What training courses have you taken recently?",expectations:""},
    {q:"What presentations have you given related to projects or general topics?",expectations:""}
  ],
  "Insist on Highest Standards": [
    {q:"Who is the best engineer in your team and what qualities do you appreciate?",expectations:""},
    {q:"Share instances when your work was recognized and appreciated.",expectations:""},
    {q:"How do you measure success in your current job?",expectations:""},
    {q:"Who is your inspirational leader and why?",expectations:""},
    {q:"What would you change in your current process/product if given an option?",expectations:""}
  ],
  "Think Big": [
    {q:"What are few lofty ideas that you proposed and pursued?",expectations:""}
  ],
  "Bias for Action": [
    {q:"Tell us your experience when you started on a project without much info. How did you approach?",expectations:""},
    {q:"You are waiting for input from your manager who is on leave for a week. How do you approach this?",expectations:""}
  ],
  "Frugality": [
    {q:"Tell us of an experience where you did not have the test system critical for your project. What was your approach?",expectations:""},
    {q:"Share any initiative that improved your team productivity.",expectations:""},
    {q:"How do you know when you are running out of resources to complete the project?",expectations:""},
    {q:"What approach do you follow to estimate effort required for a project?",expectations:""}
  ],
  "Earn Trust": [
    {q:"What are few things your team does not do well? What have you done about that?",expectations:""},
    {q:"What are few things you could do better in the current project?",expectations:""},
    {q:"Which are the best teams in your org? What do they do well?",expectations:""},
    {q:"How would your team members describe you?",expectations:""}
  ],
  "Dive Deep": [
    {q:"What is a critical bug you submitted and why was it important?",expectations:""},
    {q:"How do you debug a bug before filing it in the tool?",expectations:""}
  ],
  "Have Backbone; Disagree and Commit": [
    {q:"Tell us a scenario when you disagreed on a critical issue with your team or manager.",expectations:""},
    {q:"Tell us an instance when things were not working in the team. What did you do?",expectations:""},
    {q:"Tell us some important decisions you made in the project. How did you arrive at them?",expectations:""}
  ],
  "Deliver Results": [
    {q:"What accomplishments are you proud of in the last 1-2 years? Why are they important to you?",expectations:""},
    {q:"What are some stretch goals you have set for yourself?",expectations:""},
    {q:"How do you approach when multiple tasks are assigned but hard to meet the deadline?",expectations:""},
    {q:"How do you assess you are on track to complete an assigned task?",expectations:""}
  ]
};

const MODEL_ANSWERS = {
  "What factors do you consider when developing test cases?":
`ASSESSING: Customer-back thinking — do they test what matters to the user, not just code coverage?

GREEN FLAGS:
✓ Mentions customer journeys / user flows first, not technical paths
✓ Considers edge cases that cause real user pain
✓ Prioritizes by customer criticality, not just test count
✓ Covers data variability, localization, accessibility
✓ Thinks about regression impact on existing users

LOOK FOR IN ANSWER:
• Starts from user stories / customer journeys — tests what customer experiences
• Prioritizes high-traffic paths and critical workflows first
• Covers boundary conditions causing real user failures (empty states, timeouts, bad input)
• Includes negative testing — what happens when things go wrong for the user
• Tests for data variety: different user profiles, regions, languages, devices
• Asks: "If I were the customer, what failure would make me stop trusting this product?"
• Validates acceptance criteria against the original requirement, not just the implementation

RED FLAGS: Only mentions line/branch coverage | No user scenarios | Treats tests as a checkbox exercise`,

  "Share escalation bugs you missed — what did you learn?":
`ASSESSING: Self-awareness, accountability, and whether learning changed their behaviour

GREEN FLAGS:
✓ Owns the miss clearly — no blame-shifting to process, tools, or teammates
✓ Explains specifically WHY the bug was missed (root cause, not just "I missed it")
✓ Describes a concrete process change made afterwards
✓ Shows genuine concern about customer impact
✓ The learning was applied and prevented future issues

LOOK FOR IN ANSWER:
• Specific bug: what was it, who was affected, what was the customer impact
• Root cause: missing test scenario, assumption about data, time pressure?
• Personal accountability: "My test coverage didn't include this because I assumed..."
• Immediate action: how they responded once escalated — did they own the fix?
• Process change: what permanently changed in their testing approach?
• Did they share the learning with the team to prevent recurrence?
• Metric: measurable reduction in similar escapes after the change?

RED FLAGS: Vague answer, no specific bug | Blames process/tools/teammates | Generic learning ("be more careful") | No process change`,

  "Have you interacted with support teams or resolved a customer escalation? What were your learnings?":
`ASSESSING: Empathy beyond their own work boundary — do they treat escalations as signals to learn from?

GREEN FLAGS:
✓ Understands the customer's frustration, not just the technical fix
✓ Treated the support interaction as a learning opportunity
✓ Made a systemic fix, not just a one-off patch
✓ Built feedback loops with support teams afterwards
✓ Can articulate what they understood about the customer that they didn't before

LOOK FOR IN ANSWER:
• Describes escalation in customer terms, not technical terms
• Engaged with support team / read ticket notes / spoke to customer directly
• Identified the real pain vs. the surface-level bug reported
• Fix addressed UX/communication issue, not just the code
• Process or product change came out beyond fixing that one ticket
• Closed the loop — informed customer, updated docs, trained support team
• "What I learned about the gap between what I built and what the customer expected"

RED FLAGS: Treats escalation as "someone else's problem" | Only technical focus, no customer empathy | No lasting change`,

  "If you find a critical issue close to releasing a product, what would you do?":
`ASSESSING: Courage to prioritize customer trust over schedule pressure

GREEN FLAGS:
✓ Escalates immediately with full impact assessment, not just the bug report
✓ Advocates for the customer position clearly, even if unpopular
✓ Proposes OPTIONS with data (delay/partial release/workaround) — not just blocking
✓ Has a clear personal principle: customer trust > release date

LOOK FOR IN ANSWER:
• Assess severity immediately: data loss? Security? Functional blocker? Cosmetic?
• Escalate with: bug description, customer impact, affected user %, workaround availability
• Does NOT ship silently — makes risk visible to decision-makers
• Presents options: full delay / phased rollout / ship with documented known issue / hotfix timeline
• Advocates: "Our customers will experience X if we ship"
• If overruled: decision documented, mitigation plan exists, monitoring in place
• Principle: "Shipping something that breaks customer trust costs more than the delay"

RED FLAGS: Would ship hoping no one notices | Defers entirely without expressing a view | No decision framework`,

  "If a bug is returned as 'working as designed', what would you do?":
`ASSESSING: Customer advocacy with evidence — respectful pushback using data, not opinion

GREEN FLAGS:
✓ Goes back to requirements/user story and compares actual vs. expected behaviour
✓ Escalates with data and customer impact, not just personal opinion
✓ Distinguishes "works as coded" from "works as the customer needs"
✓ Proposes that the design itself may need to be reconsidered
✓ Remains professional and factual, not emotional

LOOK FOR IN ANSWER:
• Verify against original requirement / acceptance criteria / user story
• If design is the problem: raise as a design defect, not just a code bug
• Quantify customer impact: "X% of users will encounter this because..."
• Bring evidence: customer feedback, support ticket patterns, usability data
• Escalate to product owner: "The design doesn't meet customer expectation"
• Key question: "Would the customer agree this is working as they expected?"
• If overruled: log as known issue, ensure it's in backlog for future improvement

RED FLAGS: Accepts WAD without any pushback | Makes it a personal conflict | No escalation mechanism`,

  "When is the product ready to ship?":
`ASSESSING: Maturity in balancing quality, business pressure, and customer risk — framework, not rules

GREEN FLAGS:
✓ Has a clear, principled framework (not just "when all bugs are fixed")
✓ Customer impact is the primary filter
✓ Accounts for monitoring, rollback plans, phased release strategies
✓ Understands "zero bugs" is not realistic or the right bar
✓ Balances business value delivered vs. risk incurred

LOOK FOR IN ANSWER:
• The right bar: all P1/P2 (customer-impacting) defects resolved; P3/P4 accepted with documented risk
• All acceptance criteria from user stories are met
• Performance benchmarks within acceptable thresholds for users
• Security and data integrity are non-negotiable regardless of schedule
• Monitoring and alerting in place BEFORE release, not after
• Rollback plan exists and is tested
• Stakeholders have accepted the known risk register
• "Ready to ship = confident we're delivering value AND can respond quickly if something goes wrong"

RED FLAGS: "When all bugs are fixed" — unrealistic | No framework, pure gut feel | No mention of monitoring/rollback`,

  "Project is not moving as per plan because of your deliverables. How do you manage this?":
`ASSESSING: Accountability without blame-shifting — own it, communicate proactively, course-correct

GREEN FLAGS:
✓ Takes personal ownership immediately — no "requirements weren't clear" deflection
✓ Communicates the delay BEFORE being asked / before the deadline
✓ Comes with a revised plan and options, not just a problem statement
✓ Thinks about downstream impact on the team, not just their own task
✓ Asks for help when needed without waiting too long

LOOK FOR IN ANSWER:
• Own it immediately: "I am behind on X — here is why and here is my plan"
• Communicate early: do not wait for the status meeting to surface the delay
• Come with options: "I can deliver a partial solution by X, or the full solution by Y"
• Identify blockers and whether help is needed — ask proactively
• Assess downstream impact: which team members or tasks are affected?
• Propose reprioritization if needed: what can be descoped to protect the critical path?
• Do not promise to "work harder" — give a realistic, evidence-based revised estimate
• After delivery: retrospective on what caused the delay and what changes prevent it

RED FLAGS: Blames unclear requirements/teammates | Waits until deadline to communicate | No recovery plan`,

  "Share an experience of a critical escalation needing immediate attention while you were busy with another assignment.":
`ASSESSING: How they handle competing priorities — do they step up even when inconvenient?

GREEN FLAGS:
✓ Steps up without being asked, even though it wasn't their responsibility
✓ Quickly assesses severity and decides proportionate response
✓ Communicates the conflict to their manager proactively
✓ Takes minimal viable action to unblock escalation without dropping primary work
✓ Shows genuine concern for the impact, not just the process

LOOK FOR IN ANSWER:
• Assess criticality first: genuine emergency or can it wait 2 hours?
• Communicate immediately: "I have an escalation — here's my status on my current task"
• Identify who else can help — am I the only one, or can I route this to someone better placed?
• Take minimum action needed to stabilize, then hand off if possible
• Document what was done so others can pick it up
• Return to original assignment with clear head — log where you were
• "I treat critical customer issues as my problem even when outside my lane"
• Debrief: what systemic change prevents this conflict in future?

RED FLAGS: "Not my job" | Took on both silently — neither done well | Escalated and waited passively`,

  "Tell me about a time you went beyond the assigned project work.":
`ASSESSING: Does ownership extend beyond their job description — do they see the bigger picture?

GREEN FLAGS:
✓ Identifies a gap that wasn't anyone's explicit responsibility
✓ Takes initiative without being asked and without seeking recognition
✓ The extra work had real business or customer value
✓ Did not let it negatively impact core responsibilities
✓ Can articulate WHY — not for brownie points, because it mattered

LOOK FOR IN ANSWER:
• Context: what was assigned vs. what gap did they notice beyond it?
• Why did they notice it when others didn't? What made them look beyond their lane?
• Risk of NOT doing it: customer impact, technical debt, missed opportunity
• How did they balance with primary responsibilities?
• Outcome: quantify if possible (time saved, bugs prevented, process improved)
• Did they bring others along or document so the team could benefit?
• Proactive, unsolicited, outcome-driven — not waiting for permission

RED FLAGS: Cannot recall any example | Trivial or expected of their role | Only did it when asked by a manager`,

  "Share an example of you proposing/driving an initiative that simplified and helped the teams.":
`ASSESSING: Actively eliminating complexity — did they DRIVE the change, or just suggest it?

GREEN FLAGS:
✓ Identified a friction point others had accepted as "just how things are"
✓ Drove the change from idea to implementation — not just flagged it
✓ Measurable impact: time saved, errors reduced, speed improved
✓ Brought the team along — didn't just impose a new way
✓ Idea was genuinely novel or a smart adaptation from another context

LOOK FOR IN ANSWER:
• What complexity/friction existed? Why had it persisted?
• Who was affected and how much effort/time was being wasted?
• What insight led to the simplification idea?
• How did they validate the idea before proposing? (Talked to affected teams, measured baseline)
• How did they get buy-in? Was there resistance?
• Who implemented it — did they lead or just contribute?
• Quantify: "Reduced X from Y hours to Z hours" / "Eliminated N manual steps"
• Did it scale? Was it adopted beyond the original team?

RED FLAGS: Minor tool change | Suggested but didn't own implementation | Cannot quantify impact`,

  "How do you approach it when 5 days of effort needs to be done in 3 days every cycle?":
`ASSESSING: Creative thinking under constraints — not just working longer hours

GREEN FLAGS:
✓ Challenges scope first: "What's the minimum viable deliverable for this cycle?"
✓ Looks for automation, reuse, or parallelization opportunities
✓ Communicates the trade-off clearly — doesn't silently cut corners
✓ Has a repeatable approach — not just cycle-by-cycle heroics
✓ Does NOT default to "we just work weekends"

LOOK FOR IN ANSWER:
• First: is the 5-day estimate correct? Challenge assumptions, not just the deadline
• Identify the critical 3 days' worth: what delivers the most value / unblocks others?
• Deprioritize explicitly: communicate what is deferred and get agreement
• Parallelization: what can be done simultaneously by different team members?
• Reuse: existing code, test cases, patterns that reduce effort?
• Automate: what manual steps can be eliminated with a small upfront investment?
• Communicate the trade-off: "I can deliver A and B in 3 days; C will follow in cycle 2"
• If recurring: root cause needs to be addressed systemically, not cycle by cycle

RED FLAGS: "We just push harder" | Cuts quality silently | No framework | Blames management only`,

  "Share an example of having a different view on an important topic. How did you address it?":
`ASSESSING: Intellectual confidence to hold a different view AND discipline to test it with data

GREEN FLAGS:
✓ Had a genuine, reasoned disagreement — not just a stylistic preference
✓ Gathered data or sought input to test their view before asserting it
✓ Communicated disagreement constructively, not aggressively
✓ Was open to being wrong — changed view when convinced by evidence
✓ Or held position under pressure when evidence was on their side

LOOK FOR IN ANSWER:
• What was the topic and why did their view differ? (Specific, not vague)
• Basis of disagreement: data? Experience? First principles?
• Did they seek to understand the other view first before asserting their own?
• How did they raise it? Written analysis, 1:1, team forum?
• Did they invite challenge to their own position?
• Outcome: were they right? Wrong? Partial?
• If wrong: how did they acknowledge it and move forward?
• Key signal: "I changed my mind because of X evidence" = intellectual honesty

RED FLAGS: "I always defer to the team" | Held view on gut feel with no evidence | Made it personal | Changed position under social pressure (not evidence)`,

  "What are some project-related decisions you have made recently? How did you make those decisions?":
`ASSESSING: Decision ownership and reasoning quality — do they decide, or wait to be told?

GREEN FLAGS:
✓ Owned genuine decisions — not just executed someone else's
✓ Had a clear reasoning process: gathered data, considered options, assessed trade-offs
✓ Involved the right people without abdicating the decision
✓ Made the decision at the right time — not too late, not impulsively
✓ Can articulate what they would do differently in hindsight

LOOK FOR IN ANSWER:
• Specific decision: what was it and what was at stake?
• Information gathered: what data or input, from where and whom?
• Options considered: at least 2-3 alternatives mentioned
• Trade-offs evaluated: speed vs. quality, cost vs. risk, etc.
• Who was involved and why those people specifically?
• The call: what was decided and the one-sentence rationale?
• Outcome: was it the right decision? What would they change?
• Key quote to listen for: "I made the call with 70% of the data I wanted, because waiting longer had a cost"

RED FLAGS: "I don't really make decisions — I implement what's decided" | No reasoning process | Decided without consulting affected parties`,

  "What is something new you have learnt in the last six months not related to the project?":
`ASSESSING: Is learning intrinsic to them, or just work-driven? Self-directed learning signals long-term growth.

GREEN FLAGS:
✓ Has a genuine, specific answer — not vague ("I read a lot")
✓ The learning is applied or applicable — not just passive consumption
✓ Shows enthusiasm talking about it — they light up
✓ Sought it out themselves — not assigned by employer
✓ Can connect it to how it changes their perspective or work

LOOK FOR IN ANSWER:
• Specific topic: name the book, course, technology, domain
• Why did they choose this topic? What made them curious?
• How did they learn? (Course, book, community, experimentation, mentor)
• How much time did they invest? Shows commitment level
• Have they applied it or shared it? Learning that compounds matters more
• Did it change how they think about something in their work?

RED FLAGS: Cannot name anything specific | All employer-mandated learning | Passive consumption with no application | "Too busy to learn outside of work"`,

  "What has given you the most satisfaction in the last one year?":
`ASSESSING: What intrinsically motivates them — impact, learning, recognition, or relationships?

GREEN FLAGS:
✓ Reveals genuine intrinsic motivation (impact, growth, solving hard problems)
✓ Specific story, not a generic statement
✓ Satisfaction connected to something that aligns with team values
✓ Shows they reflect on their work, not just execute it

LOOK FOR IN ANSWER:
• What specifically happened and what was their contribution?
• WHY did this give them satisfaction? (Dig into the "why")
• Was it: solving a hard problem? Helping a colleague? Customer impact? Learning? Leading a team?
• How did it affect the people around them?
• Does this satisfaction signal align with what the role demands?
• Follow-up to ask: "What would make this year even more satisfying?"

RED FLAGS: "Getting a promotion/bonus" — extrinsic only | Cannot name anything specific | Entirely about personal recognition`,

  "What are your avenues for learning?":
`ASSESSING: Structured, proactive approach to self-development — not reactive learning when forced

GREEN FLAGS:
✓ Multiple channels: books, communities, peers, courses, experimentation, conferences
✓ Intentional: carves out time — not waiting for it to happen
✓ Applies what they learn — not just passive consumption
✓ Has a way of staying current in their domain
✓ Shares learning with others (multiplier effect)

LOOK FOR IN ANSWER:
• Structured: courses, certifications, books (can they name specific ones?)
• Community: tech communities, forums, conferences, meetups
• Peer: pair programming, code reviews as learning, mentors/mentees
• Experimental: side projects, proof of concepts, deliberate practice
• Reflective: retrospectives, post-mortems, journaling
• How do they stay current? (Newsletters, blogs, podcasts they follow)
• Do they share what they learn? (Blog posts, team sessions, documentation)
• Strong signal: "I block 2 hours a week for learning and I'm currently studying X"

RED FLAGS: Single channel only | Purely reactive | Cannot name specific sources | No habit or structure around learning`,

  "What feedback have you received from managers? What actions did you take?":
`ASSESSING: Self-awareness and receptiveness to feedback — hear it, act on it, track whether it changed

GREEN FLAGS:
✓ Shares genuine, meaningful feedback — not just "great job" platitudes
✓ Owns the feedback without deflecting
✓ Took concrete, specific action — not just "I'll work on it"
✓ Has evidence that the change happened
✓ Sought follow-up from manager to close the loop

LOOK FOR IN ANSWER:
• Specific feedback: what exactly was said? (Vagueness here is itself a red flag)
• Reaction: heard it openly or defensively initially?
• Action taken: what specifically changed in their behaviour?
• Evidence: how did they know the change was working?
• Did they ask for follow-up feedback from the manager to confirm improvement?
• Key signal: "My manager told me X, I did Y, and three months later they confirmed they saw the change"
• Also valid: disagreed but engaged constructively and ultimately understood the feedback

RED FLAGS: "My feedback has always been positive" | Rationalizes or argues against feedback | Vague action ("I tried to improve") | No follow-up with manager`,

  "What training courses have you taken recently?":
`ASSESSING: Investment in structured skill development — self-driven vs. employer-driven

GREEN FLAGS:
✓ Recent, specific courses with clear rationale for choosing them
✓ Mix of technical depth and broader skills
✓ Applied the learning to real work
✓ Self-funded or self-initiated carries more weight than employer-mandated
✓ Can talk about what they took away, not just the certificate

LOOK FOR IN ANSWER:
• Specific course name, platform, topic — detail signals genuine engagement
• Why did they choose this course? Gap they identified? Role they're targeting?
• What did they actually learn? Key concepts, skills, frameworks
• Have they applied it? How?
• Self-initiated vs. employer-directed (note the difference — it matters)
• Are they currently learning something? Shows ongoing commitment
• Strong signal: "I completed X, applied it to Y project, and it improved Z outcome"

RED FLAGS: Cannot name a single course in past year | All employer-mandated compliance training | Took courses but cannot describe learnings`,

  "What presentations have you given related to projects or general topics?":
`ASSESSING: Knowledge sharing (multiplier behaviour) and communication confidence

GREEN FLAGS:
✓ Presented to audiences of varying technical levels
✓ Presentations had a purpose beyond "show and tell" — they informed decisions or upskilled the team
✓ Adapted message to the audience
✓ Comfortable with Q&A and challenge
✓ Proactively offers to present — not just when asked

LOOK FOR IN ANSWER:
• Audience: technical peers? Leadership? Cross-functional? External?
• Purpose: informative, persuasive, decision-enabling?
• Format: demo, workshop, formal presentation, lunch-and-learn?
• How did they adapt content for the audience?
• What was the response or outcome?
• Have they done knowledge-sharing sessions within their team?
• Strong signal: "I ran a monthly tech-talk series in my team to share what we were learning"

RED FLAGS: Has never presented or strongly avoids it | Purely technical with no audience consideration | Cannot recall the purpose or impact`,

  "Who is the best engineer in your team and what qualities do you appreciate?":
`ASSESSING: Their definition of excellence — reveals their own values and the bar they hold themselves to

GREEN FLAGS:
✓ Describes qualities beyond technical skill (ownership, communication, reliability, helpfulness)
✓ Specific, not vague — "always delivers on time and flags blockers early" vs. "good at coding"
✓ The qualities they name align with the role's actual demands
✓ Shows they observe and learn from peers
✓ Does not define "best" purely by seniority or technical brilliance

LOOK FOR IN ANSWER:
• Technical excellence: deep expertise, clean code, architectural thinking
• Reliability: consistent delivery, follows through on commitments
• Communication: explains complex things simply, writes clearly, raises issues early
• Collaboration: makes others around them better, generous with knowledge
• Ownership mindset: fixes problems not strictly theirs, takes initiative
• Growth orientation: always learning, improving their craft
• Customer focus: builds with user in mind, not just technical elegance
• Best answer describes a "10x team member" not just a "10x coder"

RED FLAGS: Cannot name anyone | Defines best only by technical brilliance | No soft skills mentioned | Vague, generic answer`,

  "Share instances when your work was recognized and appreciated.":
`ASSESSING: Whether they deliver work that gets noticed — and what type of work it was

GREEN FLAGS:
✓ Recognition was for quality, impact, or going above — not just completing tasks
✓ Recognition from multiple directions: peer, manager, customer, stakeholder
✓ The work recognized aligns with high standards
✓ Specific and grounded — not boastful
✓ Can articulate WHY the work was recognized

LOOK FOR IN ANSWER:
• Specific work: what was the deliverable and what made it stand out?
• Who recognized it? (Peer recognition often signals genuine quality more than manager recognition)
• Why was it recognized — what was exceptional? (Accuracy, completeness, speed, elegance?)
• Was there customer recognition — direct feedback or metric improvement?
• Did the work set a new standard others then followed?
• Strong signal: "My test cases became the template the team adopted"
• Strong signal: "My manager cited it in the team meeting as an example to follow"

RED FLAGS: Cannot recall being recognized | Recognition only for basic expected work | Falsely modest to the point of being evasive`,

  "How do you measure success in your current job?":
`ASSESSING: Whether they have a clear, outcome-oriented definition of success — not just activity-based

GREEN FLAGS:
✓ Ties success to customer or business outcomes, not just task completion
✓ Has both quantitative and qualitative measures
✓ Reviews and adjusts measures over time
✓ Uses leading indicators, not just lagging ones
✓ View of success extends beyond their own work to team/org success

LOOK FOR IN ANSWER:
• Quality metrics: defect escape rate, test coverage effectiveness, bug reopen rate
• Delivery metrics: on-time delivery rate, cycle time, velocity consistency
• Customer impact: reduction in customer-reported issues, improved satisfaction, resolved escalations
• Team impact: knowledge shared, processes improved, colleagues unblocked
• Personal growth: skills developed, complexity of problems handled
• Strong signal: "I track my bug escape rate every sprint and my target is below X%"
• Best answer: "Success = did my work actually serve the customer, not just: did I deliver it"

RED FLAGS: Success = completing assigned work on time | Entirely defined by manager's evaluation | No self-assessment | No distinction between effort and outcome`,

  "Who is your inspirational leader and why?":
`ASSESSING: What leadership qualities they value — reveals the type of leader they aspire to be

GREEN FLAGS:
✓ Has a thoughtful, specific answer — not a famous name with no reasoning
✓ Qualities cited are specific and behavioural — not vague ("they were great")
✓ Values they admire align with the role and team culture
✓ Has applied or tried to apply those leadership qualities themselves
✓ Leader could be someone they've worked with directly — often more authentic

LOOK FOR IN ANSWER:
• Who: famous leader, direct manager, teacher, community leader — any is valid
• Specific behaviours: what exactly did they do that was inspiring?
• Which qualities: customer focus? Developing their team? Intellectual honesty? Resilience? Bias for action?
• What did they learn or adopt from this leader?
• How has it changed their own approach?
• Strong signal: "My previous manager always did X — I've started doing that with my own team"
• Best: the qualities they describe are things they actively practice, not just admire

RED FLAGS: Generic answer with no reasoning | Cannot articulate specific leadership behaviours | No personal connection`,

  "What would you change in your current process/product if given an option?":
`ASSESSING: Critical thinking about their own environment — do they see opportunities, or have they stopped noticing?

GREEN FLAGS:
✓ Has a specific, well-reasoned change to propose
✓ Change benefits customers or the team — not just makes their life easier
✓ Has thought about trade-offs and why it hasn't been done yet
✓ Constructive engagement — proposing, not just complaining
✓ Has possibly already tried to influence this change

LOOK FOR IN ANSWER:
• What specifically would they change? (Process, tool, practice, communication pattern?)
• Why is this change needed — what problem does it solve?
• Who would benefit and how? (Customer, team, product quality?)
• What is the obstacle to this change currently?
• Have they raised it before? What happened?
• What would success look like after the change?
• Best answer: "I've already started experimenting with X on a small scale and here's what I found..."

RED FLAGS: Cannot name anything (stopped thinking critically) | Self-serving proposal | Complaining without a constructive alternative`,

  "What are few lofty ideas that you proposed and pursued?":
`ASSESSING: Whether they think beyond the immediate task and are willing to advocate for bigger improvements

GREEN FLAGS:
✓ Idea was genuinely bold — not just a feature suggestion
✓ They PURSUED it — not just mentioned it once in a meeting
✓ Can articulate the potential impact clearly
✓ Comfortable with ambiguity and proposing things before they're fully formed
✓ Idea had cross-team or broader-than-team impact

LOOK FOR IN ANSWER:
• What was the idea and what made it ambitious?
• What inspired it? Customer insight? Industry trend? Technical possibility?
• How did they socialise it? (Wrote a proposal, built a prototype, ran an experiment?)
• What resistance did they face and how did they handle it?
• What happened? Adopted, partially implemented, shelved?
• What did they learn from the experience of pursuing it?
• Strong signal: "I built a proof of concept on my own time to demonstrate the idea was viable"

RED FLAGS: Cannot recall any lofty idea | Modest idea within normal job scope | Proposed and gave up at first resistance | Idea was assigned to them`,

  "Tell us your experience when you started on a project without much info. How did you approach?":
`ASSESSING: Can they make forward progress under ambiguity, or wait for perfect information?

GREEN FLAGS:
✓ Made rapid, explicit assumptions and documented them
✓ Started with what they knew; identified what was unknowable vs. just unknown
✓ Built something small to test assumptions rather than waiting
✓ Communicated ambiguity clearly while still moving
✓ Made reversible decisions where possible

LOOK FOR IN ANSWER:
• What information was missing? Why wasn't it available?
• Did they list assumptions and identify the most critical unknowns?
• Did they time-box ambiguity: "I'll make a decision on X by Friday"?
• Did they start with reversible parts first, leaving irreversible for when they knew more?
• Did they communicate ambiguity and their approach to manager/team?
• How did they validate assumptions once they had something tangible?
• Strong signal: "I documented my assumptions on day 1 and called out which carried the most risk"
• Best: "I built a quick prototype to answer the most critical question rather than debating it"

RED FLAGS: Waited for all information | Started without communicating ambiguity | No assumption documentation | Analysis paralysis`,

  "You are waiting for input from your manager who is on leave for a week. How do you approach this?":
`ASSESSING: Can they exercise appropriate judgment and move forward without hand-holding?

GREEN FLAGS:
✓ Identifies what they can progress without the input
✓ Seeks alternative sources of information or authority
✓ Makes judgment call on reversible parts and documents it
✓ Only escalates upward if truly blocking and time-sensitive
✓ Does not use "waiting for manager" as an excuse to stop working

LOOK FOR IN ANSWER:
• First: identify what can progress without the input and do that first
• Second: determine if blocked item is truly time-critical or can wait a week
• Third: check if another person has equivalent knowledge/authority
• If truly blocked and critical: contact manager via email with clear decision needed by X date
• Document: "Manager unavailable, I'm proceeding with X assumption"
• Make reversible decisions; flag irreversible ones that genuinely need input
• Strong signal: "I identified 80% of work that didn't need the input and continued while flagging the blocked 20%"

RED FLAGS: Waits for manager to return — no initiative | Escalates everything upward | Makes consequential irreversible decisions alone | Stops working`,

  "Tell us of an experience where you did not have the test system critical for your project. What was your approach?":
`ASSESSING: Resourcefulness under constraints — find a way or find an excuse?

GREEN FLAGS:
✓ Found an alternative approach rather than declaring it blocked
✓ Used mocking, simulation, or a substitute environment creatively
✓ Communicated the constraint and its risk clearly while still progressing
✓ The workaround was NOT just "we shipped without testing"
✓ Advocated for getting the proper resource properly established

LOOK FOR IN ANSWER:
• What was the missing resource and why was it unavailable?
• What alternative did they find? (Mock environment, subset of production, equivalent system, manual verification?)
• What was the risk of the workaround and how did they mitigate it?
• Did they communicate the constraint and risk to stakeholders?
• How did they ensure critical gaps would be covered eventually?
• Did they advocate for the resource to be properly provisioned to prevent recurrence?
• Strong signal: "I built a lightweight mock of the system that let us test 90% of the scenarios"

RED FLAGS: Stopped work and waited | Shipped without adequate testing and justified it | Did not communicate risk`,

  "Share any initiative that improved your team's productivity.":
`ASSESSING: Do they see team efficiency as their responsibility — are they a multiplier?

GREEN FLAGS:
✓ Initiative was self-started — not assigned
✓ Measurable impact on team velocity, quality, or morale
✓ Others adopted it or it became a team standard
✓ Required some effort and persuasion — not a trivial suggestion
✓ Can quantify the improvement

LOOK FOR IN ANSWER:
• What was the productivity problem? (Manual process, knowledge gap, coordination overhead?)
• How did they identify the problem? (Observation, data, team feedback?)
• What did they build/introduce/change? (Automation, template, process, documentation, tool?)
• How much effort did it take — done in addition to regular work?
• Quantified impact: "Saved X hours per sprint" / "Reduced setup time from Y to Z"
• Did the team adopt it? Is it still in use?
• Durable, adopted, measurable improvement — not a one-off fix

RED FLAGS: Cannot name an initiative | Minor or expected change | Implemented others' suggestions | No measurable impact`,

  "How do you know when you are running out of resources to complete the project?":
`ASSESSING: Proactive risk management — early warning signals, not late-stage panic

GREEN FLAGS:
✓ Has concrete leading indicators they track
✓ Raises the concern EARLY — not at the deadline
✓ Has a playbook for what to do when they see warning signs
✓ Thinks about resources holistically: time, people, tools, dependencies

LOOK FOR IN ANSWER:
• Leading indicators: velocity trend, percentage complete vs. time elapsed, open dependency count
• Rate of change: are things getting better or worse week over week?
• Buffer consumption: how much contingency has been used and how early?
• Dependency tracking: are external inputs arriving on schedule?
• Communication: as soon as they see the trend, who do they tell and what do they propose?
• Strong signal: "I run a weekly check: if I'm more than 20% behind at the halfway mark, I escalate"
• Best: proactive replanning — "I see a risk, here are 3 options to address it"

RED FLAGS: Only realises at the end | Relies on gut feel only | Raises concerns too late | Treats discovery as someone else's problem`,

  "What approach do you follow to estimate effort required for a project?":
`ASSESSING: Estimation maturity — repeatable, calibrated method vs. guesswork

GREEN FLAGS:
✓ Has a method: decomposition, historical data, three-point estimation
✓ Accounts for uncertainty — not just best-case effort
✓ Reviews actual vs. estimated to calibrate over time
✓ Includes non-coding effort: design, review, testing, rework, deployment
✓ Communicates confidence levels — not just a single number

LOOK FOR IN ANSWER:
• Break down the work first: estimate at task level, not project level
• Use historical data: what did similar tasks actually take?
• Three-point estimation: best case / most likely / worst case → weighted average
• Include ALL work types: design, implementation, review, testing, bug fixing, documentation, deployment
• Add uncertainty buffer based on how well-understood the work is
• Involve the team: estimation is more accurate with multiple perspectives
• Track and calibrate: compare estimate vs. actual after each sprint/project
• Strong signal: "My estimates are within 20% accuracy because I track actuals and adjust my assumptions"

RED FLAGS: "I estimate based on feel" | Only estimates happy path, no buffer | Does not track actuals | Gives one number with no confidence range`,

  "What are few things your team does not do well? What have you done about it?":
`ASSESSING: Candour and constructive accountability — can they name real weaknesses AND act on them?

GREEN FLAGS:
✓ Names specific, real weaknesses — not generic platitudes
✓ Has personally tried to address at least one
✓ Raises team issues constructively in retrospectives or 1:1s
✓ Describes systemic issues — does not blame individuals
✓ Still respects and values the team despite the weaknesses

LOOK FOR IN ANSWER:
• Specific weakness: documentation lag, estimation accuracy, knowledge silos, slow code review, etc.
• Why does it persist? Structural? Cultural? Incentive misalignment?
• What have they personally done? (Proposed solution, implemented template, raised in retro, volunteered to own the improvement)
• Did they get others on board? How?
• What is the current state — is it improving?
• Strong signal: "We struggled with X, I proposed Y in our retro, trialed it for a sprint and reduced the problem by Z"
• Key: self-criticism paired with constructive action

RED FLAGS: "My team is great at everything" | Names weaknesses but has done nothing | "Action" was complaining to manager | Names individuals rather than patterns`,

  "What are few things you could do better in the current project?":
`ASSESSING: Personal humility and self-awareness — genuine reflection, not performed modesty

GREEN FLAGS:
✓ Names real, specific improvement areas — not false modesty ("I work too hard")
✓ Shows genuine reflection — not a rehearsed "weakness that's really a strength"
✓ Has already started working on the improvement
✓ Sought feedback from others to identify the gap — didn't just self-diagnose

LOOK FOR IN ANSWER:
• Communication: "I sometimes deep-dive technically in status updates without giving the headline first"
• Estimation: "My estimates don't account for integration complexity — I'm working on this by..."
• Documentation: "I tend to code first and document after — trying to switch to doc-first for APIs"
• Upward communication: "I don't always flag risks early enough — I'm building this habit"
• Delegation: "I tend to do it myself when I should be teaching a junior to do it"
• Strong signal: "I asked my manager/peer to give me feedback specifically on X — here's what I learned"
• Key: they have a concrete improvement plan, not just awareness

RED FLAGS: "I sometimes work too hard" — not genuine | Cannot name anything | Acknowledges weakness but no action | Fundamental competency gap for the role`,

  "Which are the best teams in your org? What do they do well?":
`ASSESSING: Do they observe and learn from high-performing teams — or operate in a bubble?

GREEN FLAGS:
✓ Can name specific teams and specific practices that make them excellent
✓ Has tried to learn from or adopt those practices in their own team
✓ Observes cross-functionally — not just within their immediate group
✓ The qualities they identify align with genuine performance indicators

LOOK FOR IN ANSWER:
• Specific team: can they name one and describe what they do well?
• Specific practices: code review culture? Documentation? Onboarding? Release discipline? Knowledge sharing?
• How do they know? (Worked with them, observed, heard feedback, read their documentation?)
• Have they adopted any of their practices in their own team?
• Cross-team learning: do they proactively seek out what other teams do well?
• Strong signal: "Team X writes decision records for every architecture choice — I've started doing that in our team"

RED FLAGS: Cannot name any teams outside immediate group | Vague generic answer | Has never tried to learn from good teams | Defines "best" by team popularity/manager visibility`,

  "How would your team members describe you?":
`ASSESSING: Self-awareness and reputation — is there alignment between self-view and how others experience them?

GREEN FLAGS:
✓ Grounded, specific answer — not a list of virtues
✓ Acknowledges both strengths and areas others might find challenging
✓ Description is consistent with what the rest of the interview revealed
✓ Has actually asked for feedback to inform this answer
✓ Genuine interest in how they come across — not defensiveness

LOOK FOR IN ANSWER:
• Strengths others would name: reliable delivery? Clear communication? Helpful? Good reviewer?
• Growth areas others would notice: "Some might say I push hard on quality even under time pressure"
• Based on actual feedback: "In my last 360 review, peers described me as..."
• Consistency: does description match what they've shown in the interview?
• Self-awareness: do they acknowledge their view might differ from others'?
• Strong signal: "I asked my team members directly last month — here's what they said..."
• Best: they've done the work of actually knowing their reputation, not just guessing

RED FLAGS: Pure self-promotion | Vague and generic | Contradicts what was shown in interview | Has never sought peer feedback`,

  "What is a critical bug you submitted and why was it important?":
`ASSESSING: Depth of investigation before raising — do they find root cause or just report symptoms?

GREEN FLAGS:
✓ Bug was genuinely critical in terms of customer impact
✓ Bug report included: clear steps to reproduce, expected vs. actual, environment, data, root cause hypothesis
✓ Investigated BEFORE reporting — not just "it doesn't work"
✓ Tracked it through to resolution
✓ Understood the business/customer impact, not just the technical issue

LOOK FOR IN ANSWER:
• What was the bug? (Specific: what system, what behaviour, what was the impact?)
• How did they find it? (During testing, code review, customer report, monitoring?)
• What investigation did they do before filing? (Root cause analysis, log review, data check?)
• Quality of bug report: steps to reproduce, environment, expected vs. actual, severity justification
• Customer impact: what would have happened if it shipped?
• Did they track it to closure? Did they verify the fix?
• Strong signal: "I investigated the root cause before filing — it was a race condition in X, documented in the bug report"

RED FLAGS: Cannot recall a critical bug | Vague description | Filed without investigation | No awareness of customer impact | Filed and forgot`,

  "How do you debug a bug before filing it in the tool?":
`ASSESSING: Debugging methodology — systematic approach vs. random thrashing

GREEN FLAGS:
✓ First step: make it reproducible — never files intermittent bug without attempting to make it consistent
✓ Uses systematic isolation: binary search / divide and conquer
✓ Uses logs, data, and tools before guessing
✓ Forms and tests hypotheses — not random changes
✓ Documents investigation even when root cause not found

LOOK FOR IN ANSWER:
• Step 1: Reproduce it consistently — intermittent bugs are harder to fix and verify
• Step 2: Isolate scope — which component, layer, or condition triggers it?
• Step 3: Check logs and data — app logs, database state, network traces
• Step 4: Form a hypothesis — "I think this is caused by X because..."
• Step 5: Test the hypothesis — does a targeted change make it go away?
• Step 6: Document findings — even if root cause unknown, log what was found and ruled out
• Strong signal: "I never file a bug I can't reproduce — I spend time making it reliable first"
• Tools expected: browser devtools, log analysis, debugger, profiler

RED FLAGS: Files immediately without investigation | Trial and error with no system | Does not use available tools | Cannot describe their approach`,

  "Tell us a scenario when you disagreed on a critical issue with your team or manager.":
`ASSESSING: Courage to voice disagreement with data + maturity to commit once the decision is made

GREEN FLAGS:
✓ Disagreed on something that genuinely mattered — not trivial
✓ Raised disagreement constructively with data/reasoning — not emotion
✓ Committed FULLY once the decision was made, even if they didn't agree
✓ Disagreement was about the problem, not about ego
✓ Followed up to see how the decision played out

LOOK FOR IN ANSWER:
• What was the disagreement? Why did it matter — what was at stake?
• What was their position and its basis? (Data, experience, principle?)
• How did they raise it? (Direct conversation, written proposal, team meeting?)
• Did they listen to the other side with genuine openness?
• Outcome: were they persuaded? Overruled?
• If overruled: did they commit fully and support the decision?
• If they were right: was this a learning moment for the team?
• Key phrase to listen for: "I disagreed but I committed" = ideal Amazonian answer
• Strong signal: "I raised it once clearly, they made the call, and I delivered 100%"

RED FLAGS: Never disagrees with managers (sycophantic) | Disagrees frequently and never changes mind | Could not commit after being overruled`,

  "Tell us an instance when things were not working in the team. What did you do?":
`ASSESSING: Do they step up when the team is struggling, or wait for someone else to fix it?

GREEN FLAGS:
✓ Noticed the problem EARLY — actively looking for signals, not waiting to be told
✓ Raised it constructively (retro, 1:1, or directly)
✓ Proposed a solution — not just identified the problem
✓ Handled it with care for people and relationships, not just the process fix
✓ The situation improved because of their action

LOOK FOR IN ANSWER:
• What wasn't working? (Communication gaps, unclear ownership, quality issues, morale, velocity decline?)
• How did they detect it? (Observation, data, colleague confiding, their own frustration?)
• What did they do? (Raised in retro, 1:1 with affected person, proposed process change, escalated to manager?)
• How did they handle the interpersonal dimension? (Empathetically, constructively, without blame?)
• What was the outcome — did things improve?
• Strong signal: "I called it out in our retrospective, proposed X, and volunteered to lead the change"
• Best: acted before being asked, focused on the system not the person

RED FLAGS: Waited for manager to fix it | Raised it in a way that created conflict | "It wasn't my role to fix team dynamics" | Cannot recall any team dysfunction`,

  "Tell us some important decisions you made in the project. How did you arrive at them?":
`ASSESSING: Decision ownership and reasoning quality

GREEN FLAGS:
✓ Owned genuine decisions — not just executed someone else's
✓ Had a clear reasoning process: gathered data, considered options, assessed trade-offs
✓ Involved the right people without abdicating the decision
✓ Made the decision at the right time — not too late, not impulsively
✓ Can articulate what they would do differently in hindsight

LOOK FOR IN ANSWER:
• Specific decision: what was it and what was at stake?
• Information gathered: what data or input, from where and whom?
• Options considered: at least 2-3 alternatives
• Trade-offs evaluated: speed vs. quality, cost vs. risk, etc.
• Who was involved and why those people specifically?
• The call: what was decided and the one-sentence rationale?
• Outcome: was it the right decision? What would they change?
• Strong signal: "I made the decision after discussing with X and Y, reviewed data from Z, chose A because..."

RED FLAGS: "I don't really make decisions — I implement what's decided" | No reasoning process | Decided without consulting affected parties | Cannot recall a significant decision they owned`,

  "What accomplishments are you proud of in the last 1-2 years? Why are they important to you?":
`ASSESSING: Quality of what they define as accomplishment — and what the "why" reveals about their values

GREEN FLAGS:
✓ Specific, quantifiable — not vague ("great job on Project X")
✓ Significant personal role — not just "we did this"
✓ Real customer or business impact
✓ The "why it matters" reveals values aligned with team (quality, customer trust, team growth)
✓ Genuine pride, not performance

LOOK FOR IN ANSWER:
• What was the accomplishment? (Specific project, feature, improvement, rescue?)
• What was their specific contribution vs. the team's?
• Quantify the impact: "Reduced X by Y%" / "Shipped to Z users" / "Saved N hours per sprint"
• Customer impact: how did end users benefit?
• Why does it matter to them personally? What does this reveal about their values?
• Strong signal: "I'm proud because it genuinely improved the customer's experience, not just our metrics"
• Best: the accomplishment raised the bar — it set a new standard that others followed

RED FLAGS: Vague, cannot quantify | Team effort with no clear personal contribution | "Why" is about personal recognition | Ordinary expected work`,

  "What are some stretch goals you have set for yourself?":
`ASSESSING: Do they challenge themselves beyond the minimum — do they own their growth?

GREEN FLAGS:
✓ Specific, time-bound stretch goals — not vague aspirations
✓ Genuinely stretching — not just their current job description
✓ Has a plan to achieve them — not just a wish
✓ Goals align with the next level of impact they want to have
✓ Reviews and updates goals regularly

LOOK FOR IN ANSWER:
• Specific goal: "I want to lead my first end-to-end feature independently by Q3"
• Why is it a stretch? What capability does it require they don't fully have yet?
• What's their plan? (Mentoring, coursework, volunteering for opportunities?)
• How are they tracking progress?
• Have they shared with manager as accountability?
• Does goal align with where team/org needs to go?
• Strong signal: "I've written down my 12-month goals and I review them monthly"
• Best: they've already started working towards the goal — not just talking about it

RED FLAGS: "I just want to keep doing a good job" | Cannot articulate any stretch goals | Goals are vague | Goals are set by manager, not self-initiated`,

  "How do you approach when multiple tasks are assigned but hard to meet the deadline?":
`ASSESSING: Priority management under pressure — do they think clearly about what matters most?

GREEN FLAGS:
✓ Prioritizes by impact and dependency — not by ease or personal preference
✓ Communicates proactively BEFORE the deadline
✓ Proposes a clear trade-off: "I can deliver A and B; C needs to move"
✓ Does NOT promise to deliver everything and quietly fail
✓ Seeks to renegotiate scope — not just complain about workload

LOOK FOR IN ANSWER:
• Map all tasks by impact (what happens if late?) and dependency (what is blocked by this?)
• Communicate immediately: "I have X, Y, Z — I can't do all three to quality by Friday — which do we prioritize?"
• Propose the trade-off explicitly — don't make stakeholders find out later
• Identify what can be partially delivered: 70% for low-priority, 100% for critical
• Look for effort-reduction: simplify, reuse, automate
• Never silently sacrifice quality — if something is partial, say so
• Strong signal: "I time-box based on impact — give critical tasks 80% of my time, time-box the rest"

RED FLAGS: Works frantically on everything and delivers nothing well | Silently drops tasks | Escalates without proposing a solution | Prioritizes easiest rather than most important`,

  "How do you assess you are on track to complete an assigned task?":
`ASSESSING: Self-monitoring and early warning instincts — knows they're off track before it's a crisis

GREEN FLAGS:
✓ Has specific checkpoints: daily progress vs. plan comparison
✓ Uses leading indicators — not just "I feel like I'm on track"
✓ Escalates EARLY when trend is going wrong
✓ Has a definition of "done" agreed upfront — not fuzzy
✓ Adjusts the plan when reality diverges — doesn't just hope it catches up

LOOK FOR IN ANSWER:
• Define done upfront: before starting, agree what "complete" means (testing, docs, review included)
• Daily check: what was planned, what was done, what's the gap?
• Percentage complete vs. time elapsed: if 60% of time gone and 40% work done — flag it immediately
• Dependency check: are things I need from others arriving on schedule?
• Complexity discovery: has the task turned out harder than estimated? (If yes, escalate immediately)
• Communication: if behind, tell the relevant person THAT DAY — not at the deadline
• Strong signal: "I set daily micro-milestones and if I miss two in a row, I escalate immediately"
• Best: updates task estimates as they learn more — not fixed to original

RED FLAGS: "I just know" | Realises off track only when deadline arrives | No agreed definition of completion | Always feels on track until the day before the deadline`
};
