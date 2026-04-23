# LP Interview · AAGNA — Model Answer Guide
## Interviewer Assessment Reference — All Questions

---

> **How to use this guide:**
> Each question lists:
> - **What we are assessing** — the core signal the interviewer should listen for
> - **Green flags** — strong positive indicators to note
> - **Red flags** — weak or concerning signals
> - **Model answer points** — paste-ready bullet points for the Model Answer box in the app
>
> **Rating guide:** Strong Yes = candidate nailed all green flags unprompted | Yes = 3-4 green flags | Borderline = partial signals | No = vague/generic answers | Strong No = red flags present

---

## 1. CUSTOMER OBSESSION
*Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust.*

---

### Q1: What factors do you consider when developing test cases?

**What we are assessing:**
Whether the candidate thinks about the *end user experience* first, not just code coverage. We want to see customer-back thinking — do they test what matters to the customer, not just what's easy to test?

**Green flags:**
- Mentions customer journeys / user flows, not just technical paths
- Talks about edge cases that would cause real user pain
- Considers data variability, regional/localization issues, accessibility
- Mentions regression impact on existing users
- Prioritizes based on customer criticality, not just test count

**Red flags:**
- Only mentions technical coverage (line coverage, branch coverage)
- No mention of real-world user scenarios
- Treats test cases as a checkbox exercise
- Cannot articulate why some tests are higher priority than others

**Model Answer Points:**
```
• Start from user stories / customer journeys — test what the customer experiences, not just what the code does
• Prioritize test cases by customer impact: high-traffic paths and critical workflows first
• Cover boundary conditions that cause real user failures (empty states, timeouts, bad input)
• Include negative testing — what happens when things go wrong for the user
• Test for data variety: different user profiles, regions, languages, devices
• Consider regression risk: what existing customer behavior could this change break?
• Ask: "If I were the customer, what failure would make me stop trusting this product?"
• Validate acceptance criteria against the original requirement, not just the implementation
```

---

### Q2: Share escalation bugs you missed — what did you learn?

**What we are assessing:**
Self-awareness, accountability, and whether they learned something that *changed their behaviour*. We're not looking for perfection — we're looking for growth and honesty.

**Green flags:**
- Owns the miss clearly, no blame-shifting
- Explains specifically *why* the bug was missed (root cause, not just "I missed it")
- Describes a concrete process change they made afterwards
- Mentions impact on customer and shows genuine concern for it
- The learning was applied and prevented future issues

**Red flags:**
- Vague answer, no specific bug
- Blames process, tools, or teammates without owning personal accountability
- Learning is generic ("I'll be more careful next time")
- No evidence of process improvement

**Model Answer Points:**
```
• Specific bug: describe what it was, who it affected, what the customer impact was
• Root cause: why did it slip through? (Missing test scenario, assumption about data, time pressure?)
• Personal accountability: "My test coverage didn't include this scenario because I assumed..."
• Immediate action: how did they respond once escalated? Did they own the fix?
• Process change: what permanently changed in their testing approach?
• Did they share the learning with the team to prevent recurrence?
• Metric: was there a measurable reduction in similar escapes after the change?
```

---

### Q3: Have you interacted with support teams or resolved a customer escalation? What were your learnings?

**What we are assessing:**
Empathy for the customer beyond their own work boundary. Does the candidate see support escalations as a signal to learn from, or just a ticket to close?

**Green flags:**
- Proactively involved in understanding the customer's frustration, not just the technical fix
- Treated the support interaction as a learning opportunity
- Made a systemic fix, not just a one-off patch
- Built feedback loops with support teams afterwards
- Can articulate what they understood about the customer that they didn't before

**Red flags:**
- Treats escalation as "someone else's problem to fix"
- Focused only on the technical resolution, no empathy for customer experience
- No lasting change after the escalation
- Cannot recall what the customer's actual frustration was

**Model Answer Points:**
```
• Describe the escalation: what was the customer's actual complaint (in customer terms, not technical terms)?
• How did they engage? Did they talk to support team, read ticket notes, talk to customer directly?
• What was the customer's real pain vs. the surface-level bug reported?
• What was the fix — was it just technical, or did it also address the UX/communication issue?
• What process or product change came out of it beyond fixing that one ticket?
• Did they close the loop — inform the customer, update documentation, train support team?
• What did they learn about the gap between what they built and what the customer expected?
```

---

### Q4: If you find a critical issue close to releasing a product, what would you do?

**What we are assessing:**
Courage to prioritize customer trust over schedule pressure. Will they delay a release to protect the user, or cave to stakeholder pressure?

**Green flags:**
- Immediately escalates with full impact assessment, not just the bug report
- Advocates for the customer position clearly, even if unpopular
- Proposes options with data (delay / partial release / workaround) rather than just blocking
- Does not unilaterally decide but ensures the right people are informed
- Has a clear personal principle: customer trust > release date

**Red flags:**
- Would ship it hoping no one notices
- Defers entirely to manager without expressing a view
- Cannot articulate the decision framework they'd use
- Doesn't think about documenting or communicating the risk

**Model Answer Points:**
```
• Assess severity immediately: what is the actual customer impact? (Data loss? Security? Functional blocker? Cosmetic?)
• Escalate immediately with: bug description, customer impact, affected user %, workaround availability
• Do not ship silently — always make risk visible to decision-makers
• Present options: full delay / phased rollout / ship with documented known issue / hotfix timeline
• Advocate for the customer in the conversation: "Our customers will experience X if we ship"
• If overruled: ensure decision is documented, mitigation plan exists, monitoring is in place
• Never allow "working as designed" to be used to hide a genuine user experience problem
• Principle: shipping something that breaks customer trust costs more than the delay
```

---

### Q5: If a bug is returned by the developer as "working as designed" — what would you do?

**What we are assessing:**
Whether the candidate can advocate for the customer with evidence, rather than accepting developer authority without question. Customer obsession sometimes means respectful pushback.

**Green flags:**
- Goes back to the requirements/user story and compares actual vs. expected behaviour
- Escalates with data and customer impact, not just opinion
- Distinguishes between "works as coded" and "works as the customer needs"
- Proposes that the design itself may need to be reconsidered
- Remains professional and factual, not emotional

**Red flags:**
- Accepts "WAD" without any pushback
- Makes it a personal conflict with the developer
- Has no mechanism to escalate beyond their own authority
- Cannot articulate the difference between a design flaw and a bug

**Model Answer Points:**
```
• First: verify against the original requirement / acceptance criteria / user story
• If the design itself is the problem, raise it as a design defect, not just a code bug
• Quantify the customer impact: "X% of users will encounter this because..."
• Bring evidence: customer feedback, support ticket patterns, usability data if available
• Escalate to product owner / BA with a clear framing: "The design doesn't meet customer expectation"
• Key question to ask: "Would the customer agree this is working as they expected?"
• If overruled: log it as a known issue, ensure it is in the backlog for future improvement
• Green flag answer: "I fight for the customer's perspective using data, not ego"
```

---

### Q6: When is the product ready to ship?

**What we are assessing:**
Maturity in balancing quality, business pressure, and customer risk. There's no perfect answer — we want to hear their framework, not just "when all bugs are fixed."

**Green flags:**
- Has a clear, principled framework (severity-based, risk-based, not just count-based)
- Considers customer impact as the primary filter
- Accounts for monitoring, rollback plans, phased release strategies
- Understands that "zero bugs" is not realistic or the right bar
- Balances business value delivered vs. risk incurred

**Red flags:**
- "When all bugs are fixed" — unrealistic and shows lack of judgment
- No framework, purely gut feel
- No mention of monitoring or post-release safety nets
- Cannot articulate what "good enough" means for the customer

**Model Answer Points:**
```
• The right bar: all P1/P2 (customer-impacting) defects resolved; P3/P4 accepted with documented risk
• All acceptance criteria from user stories are met
• Performance benchmarks are within acceptable thresholds for users
• Security and data integrity are non-negotiable regardless of schedule
• Monitoring and alerting are in place before release, not after
• Rollback plan exists and is tested
• Stakeholders have accepted the known risk register
• Customer-facing documentation / support team briefed
• "Ready to ship" = confident we're delivering value AND can respond quickly if something goes wrong
```

---

## 2. OWNERSHIP
*Leaders are owners. They think long term and don't sacrifice long-term value for short-term results.*

---

### Q7: Project is not moving as per plan because of your deliverables. How do you manage this?

**What we are assessing:**
Accountability without blame-shifting. Do they own it, communicate proactively, course-correct, and protect the team?

**Green flags:**
- Takes personal ownership immediately — no "the requirements weren't clear" deflection
- Proactively communicates the delay *before* being asked
- Comes with a revised plan and options, not just a problem statement
- Thinks about the downstream impact on the team, not just their own task
- Asks for help when needed without waiting too long

**Red flags:**
- Blames unclear requirements, other dependencies, or teammates
- Waits until deadline to communicate
- Cannot articulate a recovery plan
- Thinks their job ends at flagging the problem

**Model Answer Points:**
```
• Own it immediately: "I am behind on X — here is why and here is my plan"
• Communicate early: do not wait for the status meeting to surface the delay
• Come with options: "I can deliver a partial solution by X, or the full solution by Y"
• Identify what is blocking and whether help is needed — ask proactively
• Assess downstream impact: which team members or tasks are affected and how?
• Propose reprioritization if needed: what can be descoped to protect the critical path?
• Do not promise to "work harder" — give a realistic, evidence-based revised estimate
• After delivery: conduct a retrospective on what caused the delay and what changes prevent it
```

---

### Q8: Share an experience of a critical escalation needing immediate attention while you were busy with another assignment.

**What we are assessing:**
How they handle competing priorities. Do they treat the escalation as "not my problem" or do they step up even when inconvenient?

**Green flags:**
- Steps up without being asked, even though it wasn't their responsibility
- Quickly assesses severity and decides proportionate response
- Communicates the conflict to their manager proactively, doesn't silently abandon either task
- Takes the minimal viable action to unblock the escalation without dropping their primary work
- Shows genuine concern for the impact, not just the process

**Red flags:**
- Refused to engage because it wasn't in their job description
- Took on both tasks silently, burned out, and neither was done well
- Escalated to manager and waited passively
- No evidence of judgment — either always drops everything or never helps

**Model Answer Points:**
```
• Assess criticality first: is this a genuine emergency or can it wait 2 hours?
• Communicate immediately: tell manager/team "I have X escalation — I need to context-switch, here's my status on Y"
• Identify who else can help: am I the only one, or can I route this to someone better placed?
• Take the minimum action needed to stabilize the escalation, then hand off if possible
• Document what you did so others can pick it up if needed
• Return to original assignment with a clear head — log where you were
• Green flag: "I treat critical customer issues as my problem even when they're outside my lane"
• Debrief: what systemic change would prevent this conflict in future?
```

---

### Q9: Tell me about a time you went beyond the assigned project work.

**What we are assessing:**
Whether their sense of ownership extends beyond their job description. Do they see the bigger picture and act on it?

**Green flags:**
- Identifies a gap that wasn't anyone's explicit responsibility
- Takes initiative without being asked, without seeking recognition
- The extra work had real business or customer value
- Did not let it negatively impact their core responsibilities
- Can articulate *why* they did it — not for brownie points, but because it mattered

**Red flags:**
- Cannot recall a single example — suggests they do only what's asked
- The example is trivial or expected of their role
- Did it only when asked by a manager
- The extra work had no real impact

**Model Answer Points:**
```
• Set context: what was the assigned work, and what gap did they notice beyond it?
• Why did they notice it when others didn't? What made them look beyond their lane?
• What was the risk of NOT doing it? (Customer impact, technical debt, missed opportunity)
• How did they balance it with their primary responsibilities?
• What was the outcome? Quantify if possible (time saved, bugs prevented, process improved)
• Did they bring others along or document it so the team could benefit?
• Green flag: proactive, unsolicited, outcome-driven — not waiting for permission
• Not green flag: "I stayed late to finish my assigned work" — that's just doing the job
```

---

## 3. INVENT AND SIMPLIFY
*Leaders expect and require innovation and invention from their teams and always find ways to simplify.*

---

### Q10: Share an example of you proposing/driving an initiative that simplified and helped the teams.

**What we are assessing:**
Whether they actively look for complexity to eliminate, not just complexity to manage. Did they drive the change, or just suggest it?

**Green flags:**
- Identified a friction point that others had accepted as "just how things are"
- Drove the change through from idea to implementation, not just flagged it
- The simplification had measurable impact (time saved, errors reduced, speed improved)
- Brought the team along — didn't just impose a new way
- The idea was genuinely novel or a smart adaptation from another context

**Red flags:**
- Example is a minor tool change, not a meaningful simplification
- Suggested it but didn't own the implementation
- Cannot quantify the impact
- The "simplification" added a new layer of complexity somewhere else

**Model Answer Points:**
```
• What was the complexity/friction that existed? Why had it persisted?
• Who was affected and how much effort/time was being wasted?
• What was the insight that led to the simplification idea?
• How did they validate the idea before proposing it? (Talked to affected teams, measured baseline)
• How did they get buy-in? Was there resistance?
• Who implemented it — did they lead or just contribute?
• Quantify the outcome: "Reduced X from Y hours to Z hours" / "Eliminated N manual steps"
• Did it scale? Was it adopted beyond the original team?
```

---

### Q11: How do you approach it when 5 days of effort needs to be done in 3 days every cycle?

**What we are assessing:**
Whether they think creatively about constraints rather than just working longer hours. Do they challenge the scope, not just the schedule?

**Green flags:**
- Challenges scope first: "What's the minimum viable deliverable for this cycle?"
- Looks for automation, reuse, or parallelization opportunities
- Communicates the trade-off clearly rather than silently cutting corners
- Has a repeatable approach, not just a one-off heroic effort
- Does not default to "we just work weekends"

**Red flags:**
- "We just push harder" — unsustainable and shows poor judgment
- Cuts quality silently without informing stakeholders
- Has no framework — just figures it out each time
- Blames management for the impossible timeline without proposing alternatives

**Model Answer Points:**
```
• First: is the 5-day estimate correct? Challenge assumptions, not just the deadline
• Identify the critical 3 days' worth: what delivers the most value / unblocks others?
• Deprioritize explicitly: communicate what is being deferred and get agreement
• Look for parallelization: what can be done simultaneously by different team members?
• Reuse: is there existing code, test cases, or patterns that reduce effort?
• Automate: what manual steps can be eliminated with a small upfront investment?
• Communicate the trade-off: "I can deliver A and B in 3 days; C will follow in cycle 2"
• Sustainable approach: if this happens every cycle, the root cause needs to be addressed systemically
```

---

## 4. ARE RIGHT, A LOT
*Leaders have strong judgment and good instincts. They seek diverse perspectives and work to disconfirm their beliefs.*

---

### Q12: Share an example of having a different view on an important topic. How did you address it?

**What we are assessing:**
Whether they have the intellectual confidence to hold a different view AND the discipline to test it rather than just assert it. Do they change their mind when the evidence says so?

**Green flags:**
- Had a genuine, reasoned disagreement — not just a stylistic preference
- Gathered data or sought input to test their view before asserting it
- Communicated the disagreement constructively, not aggressively
- Was open to being wrong — and changed their view when convinced
- Or held their position under pressure when they had evidence on their side

**Red flags:**
- "I always defer to the team" — no independent judgment
- Held their view based on gut feel with no evidence
- Made it personal or political rather than data-driven
- Changed their position under social pressure, not evidence

**Model Answer Points:**
```
• What was the topic and why did their view differ? (Specific, not just "I felt differently")
• What was the basis of their disagreement? Data? Experience? First principles?
• Did they seek to understand the other view first before asserting their own?
• How did they raise it? Written analysis, 1:1, team forum? (Style matters)
• Did they invite challenge to their own position?
• What was the outcome: were they right? Wrong? Partial?
• If wrong: how did they acknowledge it and move forward?
• Key signal: "I changed my mind because of X evidence" shows intellectual honesty
```

---

### Q13: What are some project-related decisions you have made recently? How did you make those decisions?

**What we are assessing:**
Quality of their decision-making process. Do they use data, seek input, think about second-order effects, and make decisions at the right time (not too late, not impulsively)?

**Green flags:**
- Can articulate a decision framework, not just "I just knew"
- Gathered relevant data before deciding, but didn't wait for perfect data
- Considered risks and trade-offs explicitly
- Involved the right people — neither solitary nor committee-by-default
- Made the decision at the right time — didn't procrastinate or rush

**Red flags:**
- Decisions by consensus only — no personal judgment
- Cannot recall a significant decision they owned
- Made decisions without consulting affected parties
- No mention of risk assessment or trade-offs

**Model Answer Points:**
```
• What was the decision? Why did it matter (what was at stake)?
• What information did they gather? From where and from whom?
• What options did they consider? (At least 2-3 should be mentioned)
• What trade-offs did they evaluate? (Speed vs. quality, cost vs. risk, etc.)
• Who did they involve and why those people specifically?
• What was the decision and the rationale in one sentence?
• What happened — was it the right call? What would they do differently?
• Green flag: "I made the call with 70% of the data I wanted, because waiting longer had a cost"
```

---

## 5. LEARN AND BE CURIOUS
*Leaders are never done learning and always seek to improve themselves.*

---

### Q14: What is something new you have learnt in the last six months not related to the project?

**What we are assessing:**
Whether learning is intrinsic to them or just work-driven. Self-directed learning signals intellectual curiosity and long-term growth potential.

**Green flags:**
- Has a genuine, specific answer — not vague ("I read a lot")
- The learning is applied or applicable — not just passive consumption
- Shows enthusiasm talking about it
- Sought it out themselves, not assigned by employer
- Can connect it to how it changes their perspective or work

**Red flags:**
- Cannot name anything specific
- Learning was entirely job-mandated
- Passive consumption with no application ("I watched some YouTube videos")
- The answer sounds rehearsed and generic

**Model Answer Points:**
```
• Specific topic: what exactly did they learn? (Name the book, course, technology, domain)
• Why did they choose this topic? What made them curious?
• How did they learn it? (Course, book, community, experimentation, mentor)
• How much time did they invest? Shows commitment level
• Have they applied it or shared it? Learning that compounds matters more
• Did it change how they think about something in their work?
• Green flag: passion and specificity — they light up when talking about it
• Red flag: "I'm too busy to learn outside of work" — growth mindset concern
```

---

### Q15: What has given you the most satisfaction in the last one year?

**What we are assessing:**
What intrinsically motivates them. Are they driven by impact, learning, recognition, or relationships? This reveals culture fit and sustainability.

**Green flags:**
- The answer reveals genuine intrinsic motivation (impact, growth, solving hard problems)
- Specific story, not a generic statement
- The satisfaction is connected to something that aligns with the team's values
- Shows they reflect on their work, not just execute it

**Red flags:**
- "Getting a promotion / bonus" — extrinsic only, not necessarily negative but watch for depth
- Cannot name anything specific
- The satisfaction is entirely about personal recognition, not outcome or impact
- Generic answer that could apply to anyone

**Model Answer Points:**
```
• What specifically happened and what was their contribution?
• Why did this particular thing give them satisfaction? (Dig into the "why")
• Was it: solving a hard problem? Helping a colleague? Customer impact? Learning something new? Leading a team?
• How did it affect the people around them?
• Does this satisfaction signal align with what the role demands?
• Green flag: satisfaction connected to impact and growth, not just praise
• Follow-up to ask: "What would make this year even more satisfying?"
```

---

### Q16: What are your avenues for learning?

**What we are assessing:**
Whether they have a structured, proactive approach to self-development — not just reactive learning when forced.

**Green flags:**
- Multiple channels: books, communities, peers, courses, experimentation, conferences
- Intentional: they carve out time, they're not waiting for it to happen
- Applies what they learn — not just consumption
- Has a way of staying current in their domain
- Shares learning with others (multiplier effect)

**Red flags:**
- Single channel only (just YouTube / just their manager)
- Passive and reactive — only learns when faced with a specific problem
- Cannot name specific sources or communities
- No habit or structure around learning

**Model Answer Points:**
```
• Structured learning: courses, certifications, books (can they name specific ones?)
• Community learning: tech communities, forums, conferences, meetups
• Peer learning: pair programming, code reviews as learning, mentors/mentees
• Experimental learning: side projects, proof of concepts, deliberate practice
• Reflective learning: retrospectives, post-mortems, journaling
• How do they stay current in their domain? (Newsletters, blogs, podcasts they follow)
• Do they share what they learn? (Blog posts, team sessions, documentation)
• Green flag: "I block 2 hours a week for learning and I'm currently studying X"
```

---

### Q17: What feedback have you received from managers? What actions did you take?

**What we are assessing:**
Self-awareness and receptiveness to feedback. Do they hear it, act on it, and track whether it made a difference?

**Green flags:**
- Shares genuine, meaningful feedback — not just "great job" platitudes
- Owns the feedback without deflecting
- Took concrete, specific action — not just "I'll work on it"
- Can show evidence that the change happened
- Sought follow-up from the manager to close the loop

**Red flags:**
- "My feedback has always been positive" — either dishonest or concerning
- Rationalises or argues against the feedback
- Vague action ("I tried to improve") with no evidence of change
- No follow-up with the manager to confirm improvement

**Model Answer Points:**
```
• Specific feedback: what exactly was said? (Vagueness here is itself a red flag)
• Reaction: did they hear it openly or defensively initially?
• Action taken: what specifically changed in their behaviour?
• Evidence: how did they know the change was working?
• Did they ask for follow-up feedback from the manager?
• Green flag: "My manager told me X, I did Y, and three months later they confirmed they saw the change"
• Also valid: disagreed with feedback but engaged constructively: "I asked clarifying questions and ultimately understood where they were coming from"
• Key: demonstrated growth, not defensiveness
```

---

### Q18: What training courses have you taken recently?

**What we are assessing:**
Investment in structured skill development. Is it employer-driven or self-driven? Are they selective and intentional?

**Green flags:**
- Recent, specific courses with clear rationale for choosing them
- Mix of technical depth and broader skills (not just one dimension)
- Applied the learning to real work
- Self-funded or self-initiated courses carry more weight than employer-mandated ones
- Can talk about what they took away, not just the certification

**Red flags:**
- Cannot name a single course taken in the past year
- All learning is employer-mandated compliance training
- Took courses but cannot describe what they learned
- No connection between the course and their actual work

**Model Answer Points:**
```
• Specific course name, platform, and topic — detail signals genuine engagement
• Why did they choose this course? Gap they identified? Role they're targeting?
• What did they actually learn — key concepts, skills, frameworks?
• Have they applied it? How?
• Self-initiated vs. employer-directed (note the difference)
• Are they currently in the middle of learning something? Shows ongoing commitment
• Green flag: "I completed X, applied it to Y project, and it improved Z outcome"
```

---

### Q19: What presentations have you given related to projects or general topics?

**What we are assessing:**
Whether they share knowledge actively — a multiplier behaviour. Also assesses communication confidence and the ability to simplify complex topics.

**Green flags:**
- Has presented to audiences of varying technical levels
- Presentations had a purpose beyond "show and tell" — they informed decisions or upskilled the team
- Can describe how they adapted their message to the audience
- Comfortable with Q&A and challenge
- Proactively offers to present, not just when asked

**Red flags:**
- Has never presented or strongly avoids it
- Presentations were purely technical with no consideration of the audience
- Cannot recall what the purpose or impact of the presentation was
- Only presents to safe audiences (close team) and avoids broader forums

**Model Answer Points:**
```
• Audience: who was it for? Technical peers? Leadership? Cross-functional? External?
• Purpose: was it informative, persuasive, decision-enabling?
• Format: demo, workshop, formal presentation, lunch-and-learn?
• How did they adapt the content for the audience?
• What was the response or outcome?
• Have they done knowledge-sharing sessions within their team?
• Green flag: "I ran a monthly tech-talk series in my team to share what we were learning"
• Communication skill signal: were they clear, structured, able to handle questions?
```

---

## 6. INSIST ON THE HIGHEST STANDARDS
*Leaders have relentlessly high standards. Leaders are continually raising the bar.*

---

### Q20: Who is the best engineer in your team and what qualities do you appreciate?

**What we are assessing:**
Their definition of excellence. What they admire in others reveals their own values and the bar they hold themselves to.

**Green flags:**
- Describes qualities beyond technical skill (ownership, communication, reliability, helpfulness)
- Specific, not vague — "always delivers on time" vs. "good at coding"
- The qualities they name align with the role's actual demands
- Shows they observe and learn from peers
- Does not define best purely by seniority or titles

**Red flags:**
- Cannot name anyone — suggests they don't observe or engage with peers
- Defines "best" only by technical brilliance, no soft skills
- Describes someone who does what they're told rather than who raises the bar
- Vague, generic answer

**Model Answer Points:**
```
• Technical excellence: deep expertise, clean code, architectural thinking
• Reliability: consistent delivery, follows through on commitments
• Communication: explains complex things simply, writes clearly, raises issues early
• Collaboration: makes others around them better, generous with knowledge
• Ownership mindset: fixes problems that aren't strictly theirs, takes initiative
• Growth orientation: always learning, always improving their craft
• Customer focus: builds with the user in mind, not just technical elegance
• Green flag: candidate describes a full picture — not just a "10x coder" but a "10x team member"
```

---

### Q21: Share instances when your work was recognized and appreciated.

**What we are assessing:**
Whether they deliver work of a quality that gets noticed. Also reveals what kind of work they're proud of and whether recognition is from peers, customers, or management.

**Green flags:**
- Recognition was for quality, impact, or going above and beyond — not just completing tasks
- Recognition from multiple directions: peer, manager, customer, stakeholder
- The work that was recognized aligns with high standards
- They are specific and grounded — not boastful
- They can articulate *why* the work was recognized

**Red flags:**
- Cannot recall being recognized — either a quality concern or a communication concern
- Recognition was only for completing basic expected work
- The answer is falsely modest to the point of being evasive
- Recognition was entirely self-reported with no external validation

**Model Answer Points:**
```
• Specific work: what was the deliverable and what made it stand out?
• Who recognized it? Peer recognition often means more than manager recognition for quality signals
• Why was it recognized — what was exceptional about it? (Accuracy, completeness, speed, elegance?)
• Was there customer recognition — direct feedback or metric improvement?
• Did the work set a new standard that others then followed?
• Green flag: "My test cases became the template the team adopted" or "My manager cited it in the team meeting as an example to follow"
```

---

### Q22: How do you measure success in your current job?

**What we are assessing:**
Whether they have a clear, outcome-oriented definition of success — not just activity-based ("I completed X tickets"). Do they track what matters?

**Green flags:**
- Ties success to customer or business outcomes, not just task completion
- Has both quantitative and qualitative measures
- Reviews and adjusts their measures over time
- Measures things that are leading indicators, not just lagging
- Has a view of success that goes beyond their own work to team/org success

**Red flags:**
- Success = completing assigned work on time — no quality or impact dimension
- Cannot articulate how they measure quality of their own output
- Success is entirely defined by manager's evaluation — no self-assessment
- No distinction between effort and outcome

**Model Answer Points:**
```
• Quality metrics: defect escape rate, test coverage effectiveness, bug reopen rate
• Delivery metrics: on-time delivery rate, cycle time, velocity consistency
• Customer impact: reduction in customer-reported issues, improved NPS, resolved escalations
• Team impact: knowledge shared, processes improved, colleagues unblocked
• Personal growth: skills developed, complexity of problems handled
• Green flag: "I measure success by whether my work actually served the customer, not just whether I delivered it"
• Also strong: "I track my bug escape rate every sprint and my target is below X%"
```

---

### Q23: Who is your inspirational leader and why?

**What we are assessing:**
What leadership qualities they value. This reveals the type of leader they aspire to be and the culture they thrive in.

**Green flags:**
- Has a thoughtful, specific answer — not a famous name without reasoning
- The qualities they cite are specific and behavioral, not vague ("they were great")
- The values they admire align with the role and team culture
- Has applied or tried to apply any of those leadership qualities themselves
- The leader could be someone they've worked with directly — often more authentic

**Red flags:**
- Generic answer ("Elon Musk, because he's innovative")
- Cannot articulate specific leadership behaviours that inspired them
- The admired qualities are contradictory to the role's needs
- No personal connection to the answer

**Model Answer Points:**
```
• Who: could be a famous leader, direct manager, teacher, or community leader
• Specific behaviours: what exactly did they do that was inspiring? (Not just "they were great")
• Customer focus? Bias for action? Developing their team? Intellectual honesty? Resilience?
• What did they learn or adopt from this leader?
• How has it changed their own approach?
• Green flag: "My previous manager always said X, and I've started doing that with my own team"
• Strong signal: the qualities they describe are things they actively practice, not just admire
```

---

### Q24: What do you want to change in your current process/product if given an option?

**What we are assessing:**
Critical thinking about their own environment. Do they see opportunities for improvement or have they stopped noticing? Does their proposed change show good judgment?

**Green flags:**
- Has a specific, well-reasoned change to propose
- The change would benefit customers or the team, not just make their life easier
- Has thought about the trade-offs and why it hasn't been done yet
- Shows constructive engagement — not complaining, proposing
- Has possibly already tried to influence this change

**Red flags:**
- Cannot name anything — suggests they don't think critically about their environment
- The change is self-serving with no benefit to customers or team
- The proposal is unrealistic with no consideration of constraints
- Complaining without a constructive alternative

**Model Answer Points:**
```
• What specifically would they change? (Process, tool, practice, communication pattern?)
• Why is this change needed — what problem does it solve?
• Who would benefit and how? (Customer, team, product quality?)
• What is the obstacle to this change currently?
• Have they raised it before? What happened?
• What would success look like after the change?
• Green flag: comes with a proposal, not just a complaint
• Best answer: "I've already started experimenting with X on a small scale and here's what I found..."
```

---

## 7. THINK BIG
*Leaders create and communicate a bold direction that inspires results.*

---

### Q25: What are few lofty ideas that you proposed and pursued?

**What we are assessing:**
Whether they think beyond the immediate task and are willing to advocate for bigger-picture improvements, even when it's not their explicit job to do so.

**Green flags:**
- Idea was genuinely bold — not just a feature suggestion
- They *pursued* it, not just mentioned it once in a meeting
- Can articulate the potential impact (what would be different if this were done?)
- Shows comfort with ambiguity and with proposing things before they're fully formed
- The idea had cross-team or broader-than-team impact

**Red flags:**
- Cannot recall any lofty idea — suggests incrementalist thinking only
- Idea was modest and within their normal job scope
- Proposed but gave up at the first sign of resistance
- The "lofty" idea was assigned to them, not self-initiated

**Model Answer Points:**
```
• What was the idea and why was it "lofty" — what made it ambitious?
• What inspired it? Customer insight? Industry trend? Technical possibility?
• How did they socialise it? (Wrote a proposal, built a prototype, ran an experiment?)
• What resistance did they face and how did they handle it?
• What happened? Did it get adopted, partially implemented, shelved?
• What did they learn from the experience of pursuing it?
• Green flag: bold idea + persistence + data to support it + graceful handling of pushback
• Strong signal: "I built a proof of concept on my own time to demonstrate the idea was viable"
```

---

## 8. BIAS FOR ACTION
*Speed matters in business. Many decisions and actions are reversible and do not need extensive study.*

---

### Q26: Tell us your experience when you started on a project without much info. How did you approach?

**What we are assessing:**
Whether they can make forward progress under ambiguity, or whether they wait for perfect information. Can they distinguish between decisions that need more data and decisions that should just be made?

**Green flags:**
- Made rapid, explicit assumptions and documented them
- Started with what they knew, identified what was unknowable vs. just unknown
- Built something small to test assumptions rather than waiting
- Communicated ambiguity clearly while still moving
- Made reversible decisions where possible

**Red flags:**
- Waited for all information before starting — analysis paralysis
- Started without communicating the ambiguity to stakeholders
- Made decisions with no documentation of assumptions
- Could not distinguish what was truly unknown vs. just inconvenient to find out

**Model Answer Points:**
```
• What information was missing? Why wasn't it available?
• What did they do first — list assumptions, identify the most critical unknowns?
• Did they time-box the ambiguity: "I'll make a decision on X by Friday"?
• Did they start with the reversible parts first, leaving the irreversible for when they knew more?
• Did they communicate the ambiguity and their approach to their manager/team?
• How did they validate their assumptions once they had something tangible?
• Green flag: "I documented my assumptions on day 1 and called out which ones carried the most risk"
• Strong signal: "I built a quick prototype to answer the most critical question rather than debating it"
```

---

### Q27: You are waiting for input from manager who is on leave for a week. How do you approach this?

**What we are assessing:**
Whether they can exercise appropriate judgment and move forward without hand-holding. Do they wait, or do they act within their authority?

**Green flags:**
- Identifies what they can progress without the input
- Seeks alternative sources of information or authority
- Makes a judgment call on reversible parts and documents it
- Only escalates to a higher manager if the dependency is truly blocking and time-sensitive
- Does not use "waiting for manager" as an excuse to stop working

**Red flags:**
- Waits for the manager to return — no initiative
- Escalates everything upward without trying to resolve independently
- Makes consequential irreversible decisions without any escalation
- No documentation of the dependency or their approach

**Model Answer Points:**
```
• First: identify what can progress without the input and do that first
• Second: determine if the blocked item is truly time-critical or can wait a week
• Third: check if there's another person with equivalent knowledge/authority
• If truly blocked and critical: contact manager via email with a clear decision needed by X date
• Document the dependency and your approach: "Manager unavailable, I'm proceeding with X assumption"
• Make reversible decisions; flag irreversible ones that genuinely need input
• Do not stop working — reprioritize and keep moving
• Green flag: "I identified 80% of the work that didn't need the input and continued that while flagging the blocked 20%"
```

---

## 9. FRUGALITY
*Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention.*

---

### Q28: Tell us of an experience where you did not have the test system critical for your project. What was your approach?

**What we are assessing:**
Resourcefulness under constraints. Do they find creative ways to keep working, or do they stop and wait?

**Green flags:**
- Found an alternative approach rather than declaring it blocked
- Used mocking, simulation, or a substitute environment creatively
- Communicated the constraint and its risk clearly, while still progressing
- The workaround was not just "we shipped without testing" — they found a real solution
- Thought about the longer-term: how to get the right environment established

**Red flags:**
- Stopped work and waited for the environment
- Shipped without adequate testing and justified it
- Did not document the constraint or communicate the risk
- No creativity in finding alternatives

**Model Answer Points:**
```
• What was the missing resource and why was it unavailable?
• What alternative did they find? (Mock environment, subset of production, equivalent system, manual verification?)
• What was the risk of the workaround and how did they mitigate it?
• Did they communicate the constraint and risk to stakeholders?
• How did they ensure the critical gaps would be covered eventually?
• Did they advocate for getting the proper resource established?
• Green flag: "I built a lightweight mock of the system that let us test 90% of the scenarios"
• Strong signal: raised a request to have the resource properly provisioned to prevent recurrence
```

---

### Q29: Share any initiative that improved your team's productivity.

**What we are assessing:**
Whether they think about team efficiency as their responsibility, not just their own output. Are they a multiplier?

**Green flags:**
- Initiative was self-started, not assigned
- Measurable impact on team velocity, quality, or morale
- Others adopted it or it became a team standard
- Required some effort and persuasion — not a trivial suggestion
- They can quantify the improvement

**Red flags:**
- Cannot name an initiative they drove
- The improvement was minor or expected of their role
- Implemented something others suggested — no personal initiative
- No measurable or observable impact

**Model Answer Points:**
```
• What was the productivity problem being solved? (Manual process, knowledge gap, coordination overhead?)
• How did they identify the problem? (Observation, data, team feedback?)
• What did they build/introduce/change? (Automation, template, process, documentation, tool?)
• How much effort did it take and did they do it in addition to their regular work?
• Quantified impact: "Saved X hours per sprint" / "Reduced setup time from Y to Z"
• Did the team adopt it? Is it still in use?
• Green flag: durable, adopted, measurable improvement — not a one-off fix
```

---

### Q30: How do you know when you are running out of resources to complete the project?

**What we are assessing:**
Proactive risk management. Do they have early warning signals, or do they only realise they're in trouble when it's too late?

**Green flags:**
- Has concrete leading indicators they track (velocity, burn rate, scope vs. time)
- Raises the concern early, not at the deadline
- Has a playbook for what to do when they see the warning signs
- Thinks about resources holistically: time, people, tools, dependencies

**Red flags:**
- Only realises at the end — reactive, not proactive
- Relies on gut feel with no data
- Raises concerns too late for anyone to act
- Treats the discovery as someone else's problem to solve

**Model Answer Points:**
```
• Leading indicators: velocity trend, percentage of scope completed vs. time elapsed, open dependency count
• Rate of change: are things getting better or worse week over week?
• Buffer consumption: how much contingency has been used and how early?
• Dependency tracking: are external inputs arriving on schedule?
• Communication: as soon as they see the trend, who do they tell and what do they propose?
• Green flag: "I run a weekly check: if I'm more than 20% behind schedule at the halfway mark, I escalate"
• Strong signal: proactive replanning — "I see a risk, here are 3 options to address it"
```

---

### Q31: What approach do you follow to estimate effort for a project?

**What we are assessing:**
Estimation maturity. Do they use a repeatable, calibrated method, or do they guess and then feel bad when they're wrong?

**Green flags:**
- Has a method: decomposition, historical data, reference class, three-point estimation
- Accounts for uncertainty, not just best-case effort
- Reviews actual vs. estimated to calibrate over time
- Includes non-coding effort: design, review, testing, rework, deployment
- Communicates confidence levels, not just a single number

**Red flags:**
- No method — "I just estimate based on feel"
- Only estimates the happy path, no buffer for rework or unknowns
- Does not track actuals to improve future estimates
- Gives one number with no range or confidence indication

**Model Answer Points:**
```
• Break down the work first: estimate at task level, not project level
• Use historical data: similar tasks completed before — what did they actually take?
• Three-point estimation: best case / most likely / worst case → weighted average
• Include all work types: design, implementation, code review, testing, bug fixing, documentation, deployment
• Add explicit uncertainty buffer based on how well-understood the work is
• Involve the team: estimation is more accurate when multiple perspectives are included
• Track and calibrate: compare estimate vs. actual after each sprint/project
• Green flag: "My estimates are within 20% accuracy because I track actuals and adjust my assumptions"
```

---

## 10. EARN TRUST
*Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical.*

---

### Q32: What are few things your team does not do well? What have you done about it?

**What we are assessing:**
Candour and constructive accountability. Can they name real weaknesses in their team (not just generic platitudes) and have they taken any action beyond complaining?

**Green flags:**
- Names specific, real weaknesses — not "we could always communicate better"
- Has personally tried to address at least one
- Raises team issues constructively in retrospectives or 1:1s
- Does not blame individuals — describes systemic issues
- Shows they still respect and value the team despite the weaknesses

**Red flags:**
- "My team is great at everything" — false positivity / not trusted with candour
- Names weaknesses but has done nothing about them
- The "action" was complaining to their manager, not constructive contribution
- Names individuals rather than patterns

**Model Answer Points:**
```
• Specific weakness: documentation lag, estimation accuracy, knowledge silos, communication overhead, slow code review turnaround, etc.
• Why does it persist? Structural? Cultural? Incentive misalignment?
• What have they personally done? (Proposed a solution, implemented a template, raised in retro, volunteered to own the improvement)
• Did they get others on board? How?
• What is the current state — is it improving?
• Green flag: "We struggled with X, I proposed Y in our retro, we trialed it for a sprint and reduced the problem by Z"
• Key: self-criticism of the team should be paired with constructive action
```

---

### Q33: What are few things you could do better in the current project?

**What we are assessing:**
Personal humility and self-awareness. Do they have genuine blind spots they're working on, or do they perform modesty without substance?

**Green flags:**
- Names real, specific improvement areas — not false modesty
- Shows genuine reflection, not a rehearsed "weakness that's really a strength"
- Has already started working on the improvement
- Sought feedback from others to identify the gap — didn't just self-diagnose

**Red flags:**
- "I sometimes work too hard" — not genuine
- Cannot name anything specific
- Acknowledges the weakness but has taken no action
- The weakness is a fundamental competency gap for the role

**Model Answer Points:**
```
• Communication: "I sometimes deep-dive technically in status updates without giving the headline first"
• Estimation: "My estimates don't account for integration complexity — I'm working on..."
• Documentation: "I tend to code first and document after — trying to change to doc-first for APIs"
• Upward communication: "I don't always flag risks early enough — working on building this habit"
• Delegation: "I tend to do it myself when I should be teaching a junior to do it"
• Green flag: "I asked my manager/peer to give me feedback specifically on X and here's what I learned"
• Action: they have a concrete improvement plan, not just awareness
```

---

### Q34: Which are the best teams in your org? What do they do well?

**What we are assessing:**
Whether they observe and learn from high-performing teams around them. Do they benchmark themselves or operate in a bubble?

**Green flags:**
- Can name specific teams and specific practices that make them excellent
- Has tried to learn from or adopt those practices in their own team
- Observes cross-functionally, not just within their immediate group
- The qualities they identify as "best" align with genuine performance indicators

**Red flags:**
- Cannot name any teams outside their immediate group
- Vague, generic answer ("Team X is very collaborative")
- Has never tried to learn from or adopt what good teams do
- Defines "best" by team popularity or manager visibility, not actual practice

**Model Answer Points:**
```
• Specific team: can they name one and what they do well?
• Specific practices: what exactly makes them stand out? (Code review culture? Documentation? Onboarding? Release discipline?)
• How do they know? (Worked with them, observed, heard feedback, read their documentation?)
• Have they adopted any of their practices in their own team?
• Cross-team learning: do they proactively seek out what other teams are doing well?
• Green flag: "Team X has a great practice of writing decision records for every architecture choice — I've started doing that in our team"
```

---

### Q35: How would your team members describe you?

**What we are assessing:**
Self-awareness and reputation. Is there alignment between how they see themselves and how others experience them?

**Green flags:**
- Grounded, specific answer — not a list of virtues
- Acknowledges both strengths and areas others might find challenging
- The description is consistent with what the rest of the interview has revealed
- Has actually asked for feedback to inform this answer
- Shows genuine interest in how they come across, not defensiveness

**Red flags:**
- Pure self-promotion with no acknowledgment of imperfections
- Vague and generic ("reliable, hardworking, nice")
- The description contradicts what was shown earlier in the interview
- Has never sought feedback from peers

**Model Answer Points:**
```
• Strengths others would name: reliable delivery? Clear communication? Helpful in unblocking? Good reviewer?
• Growth areas others would notice: "Some might say I push hard on quality even when we're under time pressure"
• Based on actual feedback: "In my last 360 review, peers described me as..."
• Consistency: does the description match what they've shown in the interview?
• Self-awareness: do they acknowledge they have a perspective on themselves that might differ from others?
• Green flag: "I asked my team members directly last month — here's what they said..."
• Strong signal: they've done the work of actually knowing their reputation, not just guessing
```

---

## 11. DIVE DEEP
*Leaders operate at all levels, stay connected to the details, and are skeptical when metrics and anecdotes differ.*

---

### Q36: What is a critical bug you submitted and why was it important?

**What we are assessing:**
Depth of investigation before raising a bug, and quality of their bug reports. Do they find the root cause or just report symptoms?

**Green flags:**
- Bug was genuinely critical in terms of customer impact
- The bug report included: clear steps to reproduce, expected vs. actual, environment, data, root cause hypothesis
- They investigated before reporting — not just "it doesn't work"
- They tracked it through to resolution
- They understood the business/customer impact of the bug, not just the technical issue

**Red flags:**
- Cannot recall a critical bug they submitted
- Bug description is vague — "found a bug in the login flow"
- Filed without investigation — just symptoms reported
- No awareness of the customer impact of the bug
- Filed bugs they didn't follow through on

**Model Answer Points:**
```
• What was the bug? (Specific: what system, what behaviour, what was the impact?)
• How did they find it? (During testing, code review, customer report, monitoring?)
• What investigation did they do before filing? (Root cause analysis, log review, data check?)
• Quality of the bug report: steps to reproduce, environment details, expected vs. actual, severity justification
• Customer impact: why was this critical — what would have happened if it shipped?
• Did they track it to closure? Did they verify the fix?
• Green flag: "I investigated the root cause before filing — it turned out to be a race condition in X, which I documented in the bug report"
```

---

### Q37: How do you debug a bug before filing it in the tool?

**What we are assessing:**
Debugging methodology. Do they have a systematic approach or do they thrash around hoping to find the answer?

**Green flags:**
- Has a clear, reproducible first step — never files an intermittent bug without attempting to make it consistent
- Uses systematic isolation: binary search / divide and conquer approach
- Uses logs, data, and tools before guessing
- Forms and tests hypotheses rather than changing things randomly
- Documents their investigation even when they don't find the root cause

**Red flags:**
- Files bugs immediately without investigation — noise in the bug tracker
- Debugging by trial and error with no systematic approach
- Does not use available tools (logs, debugger, profiler)
- Cannot describe their approach — pure gut feel

**Model Answer Points:**
```
• Step 1: Reproduce it consistently — an intermittent bug is harder to fix and harder to verify
• Step 2: Isolate the scope — narrow down which component, layer, or condition triggers it
• Step 3: Check logs and data — what do the application logs, database state, and network traces show?
• Step 4: Form a hypothesis — "I think this is caused by X because..."
• Step 5: Test the hypothesis — does a targeted change make it go away?
• Step 6: Document findings — even if root cause unknown, log what was found and ruled out
• Green flag: "I never file a bug I can't reproduce — I spend time making it reliable first"
• Strong signal: uses appropriate tools (browser devtools, log analysis, debugger, profiler)
```

---

## 12. HAVE BACKBONE; DISAGREE AND COMMIT
*Leaders are obligated to respectfully challenge decisions even when doing so is uncomfortable.*

---

### Q38: Tell us a scenario when you disagreed on a critical issue with your team or manager.

**What we are assessing:**
Whether they have the courage to voice disagreement with data, and the maturity to commit once the decision is made. We're not looking for rebels or yes-people — we want principled dissenters.

**Green flags:**
- Disagreed on something that genuinely mattered — not trivial
- Raised the disagreement constructively with data/reasoning, not emotion
- Committed fully once the decision was made, even if they didn't agree
- The disagreement was about the problem, not about ego
- Followed up to see how the decision played out

**Red flags:**
- Never disagrees with managers — sycophantic pattern
- Disagrees frequently and loudly but never changes their mind — inflexible
- The "disagreement" was really just expressing a different preference, not a principled challenge
- Could not commit after being overruled — undermined the decision

**Model Answer Points:**
```
• What was the disagreement? Why did it matter — what was at stake?
• What was their position and what was the basis? (Data, experience, principle?)
• How did they raise it? (Direct conversation, written proposal, team meeting?)
• Did they listen to the other side with genuine openness?
• What was the outcome? Were they persuaded? Overruled?
• If overruled: did they commit fully and support the decision?
• If they were right: was this a learning moment for the team?
• Green flag: "I raised it once clearly with my reasoning, they made the call, and I delivered on it 100%"
• Key phrase to listen for: "I disagreed but I committed" — this is the ideal Amazonian answer
```

---

### Q39: Tell us an instance when things were not working in the team. What did you do?

**What we are assessing:**
Whether they step up when the team is struggling, or whether they wait for someone else to fix it. Do they own team health as their responsibility?

**Green flags:**
- Noticed the problem early — actively looking for signals, not waiting to be told
- Raised it constructively — either in a retro, 1:1, or directly with the person
- Proposed a solution, not just identified the problem
- Handled it with care for people and relationships, not just the process fix
- The situation improved because of their action

**Red flags:**
- Waited for the manager to fix it
- Raised it in a way that created conflict rather than resolution
- "It wasn't my role to fix team dynamics" — narrow ownership
- Cannot recall any team dysfunction — either not paying attention or not being honest

**Model Answer Points:**
```
• What wasn't working? (Communication gaps, unclear ownership, quality issues, morale problems, velocity decline?)
• How did they detect it? (Observation, data, colleague confiding in them, their own frustration?)
• What did they do? (Raised in retro, 1:1 with affected person, proposed a process change, escalated to manager?)
• How did they handle the interpersonal dimension? (Empathetically, constructively, without blame?)
• What was the outcome — did things improve?
• Green flag: "I called it out in our retrospective, proposed X, and volunteered to lead the change"
• Strong signal: they acted before being asked, and they focused on the system, not the person
```

---

### Q40: Tell us some important decisions you made in the project. How did you arrive at those decisions?

**What we are assessing:**
Decision ownership and reasoning quality. Do they make decisions, or do they wait to be told? Is their reasoning process sound?

**Green flags:**
- Owned genuine decisions — not just executed someone else's
- Had a clear reasoning process: gathered data, considered options, assessed trade-offs
- Involved the right people without abdicating the decision
- Made the decision at the right time — not too late, not impulsively
- Can articulate what they would do differently with hindsight

**Red flags:**
- "I don't really make decisions — I implement what's decided" — concerning level of passivity
- Made decisions without consulting affected parties
- Cannot describe their reasoning — just "it felt right"
- Cannot think of a significant decision they owned

**Model Answer Points:**
```
• Specific decision: what was it and what was at stake?
• Information gathered: what data or input did they collect before deciding?
• Options considered: what alternatives were on the table?
• Trade-offs evaluated: what did each option cost and gain?
• People involved: who had input — and why those people specifically?
• The call: what did they decide and why?
• Outcome: was it the right decision? What would they change?
• Green flag: "I made the decision after discussing with X and Y, reviewed the data from Z, and chose option A because..."
• Strong signal: they have a personal decision log or habit of writing down their reasoning
```

---

## 13. DELIVER RESULTS
*Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion.*

---

### Q41: What accomplishments are you proud of in the last 1-2 years? Why are they important to you?

**What we are assessing:**
The quality of what they define as accomplishment. Is it meaningful, customer-impacting, and something they genuinely drove? And does the *why* reveal values aligned with the role?

**Green flags:**
- Specific, quantifiable accomplishment — not vague ("I did a great job on Project X")
- They played a significant personal role — not just "we did this"
- The accomplishment had real customer or business impact
- The "why it matters" reveals values aligned with the team (quality, customer trust, team growth)
- Shows they reflect on their work with genuine pride, not performance

**Red flags:**
- Vague, cannot quantify impact
- The accomplishment was a team effort with no clear personal contribution
- The "why" is about personal recognition, not impact
- The accomplishment is ordinary — expected work, not above the bar

**Model Answer Points:**
```
• What was the accomplishment? (Specific project, feature, improvement, rescue?)
• What was their specific contribution vs. the team's?
• Quantify the impact: "Reduced X by Y%" / "Shipped to Z users" / "Saved N hours per sprint"
• Customer impact: how did end users benefit?
• Why does it matter to them personally? (What does this reveal about their values?)
• Green flag: "I'm proud of this because it genuinely improved the customer's experience, not just our metrics"
• Strong signal: the accomplishment raised the bar — it set a new standard others followed
```

---

### Q42: What are some stretch goals you have set for yourself?

**What we are assessing:**
Whether they challenge themselves beyond the minimum expectation. Do they own their own growth, or do they wait to be pushed?

**Green flags:**
- Has specific, time-bound stretch goals — not vague aspirations
- The goals are genuinely stretching — not just their current job description
- They have a plan to achieve them, not just a wish
- The goals align with the next level of impact they want to have
- They review and update their goals regularly

**Red flags:**
- "I just want to keep doing a good job" — no ambition signal
- Cannot articulate any stretch goals
- Goals are vague ("I want to get better at communication")
- Goals are set by their manager, not self-initiated

**Model Answer Points:**
```
• Specific goal: "I want to lead my first end-to-end feature independently by Q3"
• Why is it a stretch? What capability does it require that they don't fully have yet?
• What's their plan to get there? (Mentoring, coursework, volunteering for opportunities?)
• How are they tracking progress?
• Have they shared it with their manager as an accountability measure?
• Does the goal align with where the team or org needs to go?
• Green flag: "I've written down my 12-month goals and I review them monthly"
• Strong signal: they've already started working towards the goal — not just talking about it
```

---

### Q43: How do you approach when multiple tasks are assigned but hard to meet the deadline?

**What we are assessing:**
Priority management under pressure. Do they think clearly about what matters most, or do they thrash between tasks or silently drop things?

**Green flags:**
- Prioritizes by impact and dependency, not by ease or personal preference
- Communicates proactively about the constraint before the deadline
- Proposes a clear trade-off: "I can deliver A and B; C will need to move"
- Does not promise to deliver everything and quietly fail
- Seeks to renegotiate scope, not just complain about workload

**Red flags:**
- Works frantically on everything and delivers nothing well
- Silently drops tasks without communication
- Escalates without proposing a solution: "I can't do all this"
- Prioritizes based on what's easiest or most visible, not most important

**Model Answer Points:**
```
• First: map all tasks by impact (what happens if this is late?) and dependency (what is blocked by this?)
• Communicate immediately: "I have X, Y, Z — I can't do all three to quality by Friday — which do we prioritize?"
• Propose the trade-off explicitly: don't make stakeholders find out later
• Identify what can be partially delivered: a 70% solution for low-priority tasks, 100% for critical ones
• Look for effort-reduction: what can be simplified, reused, or automated?
• Never silently sacrifice quality — if something is partial, say so
• Green flag: "I time-box based on impact — I give critical tasks 80% of my time and timebox the rest"
• Key: proactive communication + clear trade-offs + protect the most important deliverable
```

---

### Q44: How do you assess you are on track to complete an assigned task?

**What we are assessing:**
Self-monitoring and early warning instincts. Do they know when they're falling behind before it becomes a crisis?

**Green flags:**
- Has specific checkpoints: daily progress vs. plan comparison
- Uses leading indicators, not just "I feel like I'm on track"
- Escalates early when they see the trend going wrong
- Has a definition of "done" that's agreed upfront — not fuzzy
- Adjusts the plan when reality diverges, doesn't just hope it catches up

**Red flags:**
- "I just know" — no systematic approach
- Realises they're off track only when the deadline arrives
- No agreed definition of completion at the start
- Optimism bias: always feels on track until the day before deadline

**Model Answer Points:**
```
• Define done upfront: before starting, agree on what "complete" means including testing, documentation, review
• Daily check: at end of each day — what was planned, what was done, what's the gap?
• Percentage complete vs. time elapsed: if 60% of time is gone and 40% of work is done — flag it
• Dependency check: are the things I need from others arriving on schedule?
• Complexity discovery: has the task turned out to be harder than estimated? (If yes, escalate immediately)
• Communication: if behind, tell the relevant person that day — not at the deadline
• Green flag: "I set daily micro-milestones and if I miss two in a row, I escalate immediately"
• Strong signal: they have a habit of updating task estimates as they learn more — not fixed to the original
```

---

*End of Model Answer Guide — LP Interview · AAGNA*
*Total: 13 Leadership Principles · 44 Questions · Full Assessment Criteria*
