"use strict";

const courseraEn = {
  name: "Coursera · Critical Thinking Prompts",
  url: coursera.url,
  credit:
    "Independently adapted from the methods described by Coursera. This is not a verbatim quotation of its original prompts.",
};
const mollickEn = {
  name: mollick.name,
  url: mollick.url,
  credit:
    "Adapted from prompts by Ethan Mollick and Lilach Mollick (CC BY 4.0). Wording, questions and workflow have been revised. This adaptation is also available under CC BY 4.0.",
};
const promptsEn = [
  {
    id: "assumptions",
    title: "The Assumption Audit",
    category: "看见盲点",
    question: "What am I treating as fact that is really an assumption?",
    description:
      "For a belief you feel certain about, or a decision you cannot seem to make.",
    source: courseraEn,
    sourceShort: "Inspired by Coursera",
    recommended: true,
    fields: [
      [
        "belief",
        "What I believe",
        "For example: I need to finish every course before starting a project.",
      ],
      [
        "facts, experiences or data",
        "My evidence",
        "Describe what you have actually observed.",
      ],
      [
        "action",
        "What I plan to do",
        "What action will you take based on this belief?",
      ],
    ],
    text: `I currently believe: [belief]
My evidence is: [facts, experiences or data]
The action I plan to take is: [action]

Please audit this judgment:
1. Separate known facts, personal interpretations and untested assumptions.
2. Identify up to five key assumptions supporting my conclusion.
3. Which assumption, if false, would most likely overturn the conclusion?
4. Give the strongest counterevidence or alternative explanation for that assumption.
5. Design the lowest-cost way to test it.

Do not disagree just for the sake of it. Say explicitly when the evidence is insufficient.
End by asking me: What specific evidence would make you change your mind?`,
  },
  {
    id: "counterargument",
    title: "The Strongest Counterargument",
    category: "做出决策",
    question: "Why would a smart, well-informed person still disagree with me?",
    description:
      "For choosing a project, reviewing a plan or preparing for an important conversation.",
    source: mollickEn,
    sourceShort: "Mollick · Devil’s Advocate",
    fields: [
      ["plan", "The plan I am considering", "What do you want to do?"],
      ["goal", "My goal", "What would success look like?"],
      [
        "time, resources and unacceptable costs",
        "Real-world constraints",
        "Include limits and trade-offs you cannot accept.",
      ],
      [
        "reasons",
        "Why I support it",
        "What evidence makes you favor this plan?",
      ],
    ],
    text: `I am considering: [plan]
My goal is: [goal]
My constraints are: [time, resources and unacceptable costs]
My reasons for supporting it are: [reasons]

Act as a constructive but rigorous challenger.
First, restate my plan accurately, preserving its strongest arguments.
Then build the strongest case an informed, rational and experienced opponent could make.

Identify:
- Which costs am I underestimating?
- Under what conditions could this plan backfire?
- Is there a simpler alternative?
- Is the real disagreement about facts, priorities or tolerance for risk?

End with a practical test that could distinguish between the two positions.
Do not attack my character or pretend both sides have equally strong evidence.`,
  },
  {
    id: "premortem",
    title: "The Premortem",
    category: "做出决策",
    question: "If this fails six months from now, what did I overlook today?",
    description:
      "Think ahead before launching a project, changing jobs or committing to a new plan.",
    source: mollickEn,
    sourceShort: "Mollick · Team Premortem",
    fields: [
      ["plan", "My plan", "Describe the plan you intend to carry out."],
      [
        "observable outcomes",
        "My definition of success",
        "Define success with observable, verifiable outcomes.",
      ],
      [
        "constraints",
        "Deadline and resources",
        "When must it be done? What are your limits?",
      ],
    ],
    text: `My plan is: [plan]
Success would mean: [observable outcomes]
My deadline and resource constraints are: [constraints]

Guide me through a premortem. Treat this as a hypothetical exercise, not a prediction.

First, ask me: Imagine the plan has failed by the deadline. What could have caused that?
Wait for my answer. Then add risks I may have missed, clearly labeling your suggestions as hypotheses.

Organize the risks as:
Cause of failure | Early warning sign | Impact | Controllability | Preventive action.

Pay particular attention to:
- Single points of failure that could derail the entire plan.
- Problems I already recognize but might keep postponing.

Finish by identifying the three risks most worth addressing now, and the conditions under which I should change or stop the plan.
Ask only one question at a time and wait for my reply before continuing.`,
  },
  {
    id: "reframe",
    title: "Reframe the Question",
    category: "看见盲点",
    question: "Am I working hard to solve the wrong problem?",
    description:
      "For the problem you keep thinking about without making any real progress.",
    source: {
      name: "MIT Sloan · Question Burst Catalyst",
      url: promptsZh[3].source.url,
      credit:
        "Independently written using MIT Sloan’s description of Hal Gregersen’s questioning method. This is not the original prompt behind the official tool.",
    },
    sourceShort: "Inspired by MIT Sloan",
    fields: [
      [
        "problem",
        "The problem I am stuck on",
        "Write down the question that keeps coming back.",
      ],
      [
        "context",
        "Relevant context",
        "What have you tried? What constraints exist?",
      ],
    ],
    text: `I am stuck on this problem: [problem]
The context is: [context]

Do not give advice yet.

Step 1: Restate my problem in one neutral sentence, without assuming a cause or solution. Ask me to confirm it.
Step 2: Ask me to write three questions that genuinely concern me, then wait for my response.
Step 3: Offer eight new questions that challenge my goal, the problem’s boundaries, assumed constraints and stakeholder perspectives.

Make the questions specific. Do not disguise advice as questions.
Help me choose the one question whose answer is most likely to change what I do next.

Finally, turn that question into an interview, an observation or a small experiment.`,
  },
  {
    id: "understanding",
    title: "The Understanding Test",
    category: "学得更深",
    question: "Do I understand this, or can I just repeat the terminology?",
    description:
      "After reading a paper, learning a concept or preparing to explain something.",
    source: mollickEn,
    sourceShort: "Mollick · Teach the AI",
    fields: [
      [
        "concept",
        "The concept I want to explain",
        "What do you want to test your understanding of?",
      ],
      [
        "explanation in my own words",
        "My explanation",
        "Explain it in your own words without looking it up.",
      ],
    ],
    text: `I want to teach you: [concept]
My explanation is: [explanation in my own words]

Start by acting as an intelligent student with no background in this subject.
Ask one question at a time, probing leaps in my explanation, vague terms or missing causal links.

Ask me to provide at least:
- One concrete example.
- One counterexample that looks similar but does not fit.
- One scenario in which changing a condition changes the result.

Do not complete the explanation for me.
After five exchanges, step out of the student role. Identify what I have explained clearly, what I have not yet demonstrated I understand, and the most useful gap to address next.`,
  },
  {
    id: "review",
    title: "Review Without Hindsight",
    category: "复盘成长",
    question: "Did this go well because of good decisions, or good luck?",
    description:
      "For the end of a project, the aftermath of an exam or your weekly review.",
    source: mollickEn,
    sourceShort: "Mollick · After Action Review",
    fields: [
      ["event", "What happened", "Choose one specific event."],
      [
        "expectation",
        "What I expected",
        "What did you expect before you started?",
      ],
      ["outcome", "What actually happened", "Describe the result."],
      [
        "information and actions",
        "What I knew and did at the time",
        "Include only what you knew then and the choices you made.",
      ],
    ],
    text: `The event was: [event]
My original expectation was: [expectation]
The actual outcome was: [outcome]
The information I had and actions I took at the time: [information and actions]

Help me review it:
1. What is the key gap between what I expected and what happened?
2. Which explanations have evidence, and which are stories constructed afterward?
3. Which good results might reflect luck? Which bad results do not necessarily imply a poor decision at the time?
4. If I could do it again using only what I knew then, what should I change?

Do not reduce the lesson to “work harder,” “be more disciplined” or “pay more attention.”
End with just one action to keep, one action to stop and one hypothesis to test next time.`,
  },
  {
    id: "alignment",
    title: "Actions vs. Priorities",
    category: "复盘成长",
    question: "If someone saw only my actions, what would they think I want?",
    description:
      "For when you are busy every day, but the important things never move forward.",
    source: {
      name: "Think Again · Original extension",
      url: promptsZh[6].source.url,
      credit:
        "An original template developed from reflective review practices. It is not a quotation from the authors above. Provided by Think Again / ivyandbonjuice under CC BY 4.0.",
    },
    sourceShort: "Think Again · Original extension",
    fields: [
      [
        "goals",
        "My three most important goals",
        "List the goals you say matter most.",
      ],
      [
        "specific records",
        "My actual investment over two weeks",
        "Where did your time, money and attention go?",
      ],
      [
        "constraints",
        "Responsibilities I cannot freely change",
        "What obligations or limits need to be understood?",
      ],
    ],
    text: `The three goals I say matter most are: [goals]
How I actually spent my time, money and attention over the past two weeks: [specific records]
Responsibilities or constraints I cannot freely change: [constraints]

Compare my goals with my behavior:
1. Which investments genuinely support these goals?
2. Which are inconsistent with them?
3. What could explain the mismatch? Consider external constraints, immediate needs, habits and the possibility that a goal no longer fits me.
4. For each explanation, identify supporting evidence and missing information.

Do not jump to conclusions that I am lazy, afraid or deceiving myself.
End by asking one question that best distinguishes between the explanations. Design a small adjustment I can make within seven days to test whether I am willing to pay the cost of pursuing this goal.`,
  },
  {
    id: "audit-ai",
    title: "Audit the AI",
    category: "学得更深",
    question: "This answer sounds complete. Where might it be wrong?",
    description:
      "Use after any AI answer that feels especially convincing or neatly packaged.",
    source: courseraEn,
    sourceShort: "Inspired by Coursera",
    fields: [],
    text: `Please audit the answer you just gave:
- Which statements are verifiable facts, which are inferences and which are value judgments?
- Which key conclusion depends most on an untested assumption?
- Is there an alternative explanation that fits the available information equally well?
- What new information would be most likely to change your recommendation?
- Did you accept a mistaken premise in my question?

Do not invent flaws just to complete the audit, or simply restate your answer in different words.
If you cannot verify information externally, say so clearly.
Finish with the three things most worth checking independently and how I should check them.`,
  },
];
const guardEn =
  "If information is missing, ask the most important question first. Refer to the specific details I have provided rather than inventing context.";
const promptSets = { en: promptsEn, zh: promptsZh };
const guards = { en: guardEn, zh: guardZh };
