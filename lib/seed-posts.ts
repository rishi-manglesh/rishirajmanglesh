import type { BlogPost } from '@/types'

export const SEED_POSTS: BlogPost[] = [
  {
    id: -1,
    attributes: {
      title: 'The one question that stops a bad AI project before it starts',
      slug: 'the-one-question',
      publishedAt: '2026-05-14T08:00:00.000Z',
      excerpt:
        'Most automation projects fail because they start with a solution. There is a diagnostic I use before every engagement that tells me in fifteen minutes whether an organisation is ready to automate — or trying to skip a step.',
      cover: undefined,
      content: `There is a question I ask near the start of every new engagement. It takes about fifteen minutes to answer properly, and the answer tells me almost everything I need to know.

The question is: *Can you describe, without mentioning software, what happens when this process goes wrong?*

Not "what does the error message say." Not "which field is missing." What actually happens — to a customer, to a transaction, to a colleague downstream — when the process breaks.

Most people cannot answer this cleanly. They jump to the system immediately. "The claim doesn't move to the next stage," they say. I push back: what does that mean in practice? A claimant waits longer than they should. A reserve sits understated. A regulatory return goes out with a number that is quietly wrong. Now we are talking.

## Why the question matters

Automation compounds whatever is underneath it. If you automate a process that nobody fully understands, you get faster confusion. If you automate a process that has undocumented exceptions — and every process in accounting and insurance has exceptions — you get exceptions that are now invisible, because the audit trail runs through a system that does not know they exist.

I have seen this in life and pension systems in Norway. I have seen it in claims operations across Asia. The technical implementation is almost never the problem. The problem is that the organisation decided to automate before it decided to understand.

## What "Solve First" actually means

The phrase is not a slogan. It is a sequence.

Before you touch automation tooling, you need a clear description of the process at the level of business outcome, not system steps. You need to know what good looks like, what failure looks like, and how you currently tell the difference. If you cannot write those three things down in plain language, you are not ready to automate.

This is not a technology opinion. It is an operations opinion. Twenty years of running insurance and banking processes across multiple regulatory regimes taught me that the most expensive automation mistakes are not technical — they are definitional. The team automated the wrong thing cleanly, and then spent eighteen months wondering why the business outcome did not improve.

## The pilot that proves the point

When we activate DVERSI for a new customer, the first eight weeks are not about the platform. They are about getting a single workflow defined well enough that the platform can express it faithfully. The technology is not the constraint. The thinking is.

Teams that have done that thinking in advance — who have written down what a complete underwriting submission looks like, what constitutes a valid claim, what the compliance checkpoint actually checks — those teams run eight-week activations that deliver. Teams that have not done it use the activation as the moment to discover they have not done it. That costs time.

Solve the process first. Automate a solved process. In that order.`,
    },
  },
  {
    id: -2,
    attributes: {
      title: 'What twenty years inside insurance taught me about AI vendor promises',
      slug: 'insurance-ai-vendor-promises',
      publishedAt: '2026-04-22T08:00:00.000Z',
      excerpt:
        'Insurance companies have been buying technology promises since mainframes. The pitch changes — ERP, cloud, digital transformation, now AI. The pattern does not. Here is what I have learned from being on both sides of those conversations.',
      cover: undefined,
      content: `I spent the better part of twelve years running insurance operations in Norway — Nordic P&C and life and pension — before I moved to the vendor side. That transition gave me a vantage point I would not trade. I had been the person being sold to. Then I was the person building what others would eventually sell.

Here is what I observed.

## The pitch does not change

Every technology generation arrives with the same structure. There is a headline capability — this time it is AI, last time it was cloud, before that it was SaaS, before that it was ERP integration. There is a demonstration that works impeccably in a controlled environment. There is a reference customer who, it turns out, has a narrower implementation than the demo suggested. And there is a timeline that compresses in the proposal and expands in delivery.

I am not cynical about this. It is partly how enterprise technology markets work — new capability is genuinely real, but the gap between "works in a demo" and "works in your claims system" is always underestimated, by both sides.

What I am clear-eyed about is what the gap actually consists of.

## The gap is always domain knowledge

The AI you are being sold does not know what a late-reported claim means for your reserving methodology. It does not know that your largest reinsurance treaty has a specific aggregate threshold that changes how you categorise bordereau entries. It does not know that "completed" in your policy administration system does not mean the same thing as "completed" in your finance system, and that this discrepancy has existed for eleven years and everyone has simply learned to work around it.

Generic AI cannot know these things. It was not trained on your organisation's history. Even a very good model, given access to your data, will not automatically surface the institutional knowledge that lives in the heads of the people who have run your operations for a decade.

This is not a criticism of AI. It is a description of the actual problem. The problem is not whether the model is capable. The problem is whether the capability is applied at the right layer, with the right domain context, in the right sequence.

## What domain-native design looks like

When I designed the structure of DVERSI, I started from the specific constraints of accounting and insurance — not from a generic AI architecture that could be adapted to those domains.

The difference is not subtle. In insurance, you are dealing with long-tail liabilities, regulatory reporting cycles, reinsurance structures, and claims handlers who have years of pattern recognition built up. An AI layer that treats all of these as equivalent "documents" or "data points" will produce outputs that look plausible and are occasionally wrong in ways that are very difficult to catch.

Domain-native design means the ontology is built around the actual entities — policy, claim, reserve, bordereaux line, regulatory submission — and the relationships between them reflect how those entities actually behave. It means the compliance layer is not bolted on; it is structural. It means the exceptions are first-class citizens, not edge cases.

## What I tell boards now

When I am in a room with a board that is about to make an AI investment, I ask them to do two things before committing.

First: have the conversation about what they would trust the AI to decide independently, and what they would need a human to review. That boundary is the product specification. Everything else follows from it.

Second: ask the vendor what happens when the AI is wrong. Not the escalation process — what actually happens to the transaction, the customer, the regulatory record. If the vendor cannot answer this in concrete terms, they have not thought through the domain.

Twenty years of seeing AI promises made and partially delivered has made me a demanding audience. It has also made me, I think, a more honest builder.`,
    },
  },
  {
    id: -3,
    attributes: {
      title: 'The accounting layer is where AI projects go quiet',
      slug: 'ai-accounting-layer',
      publishedAt: '2026-03-18T08:00:00.000Z',
      excerpt:
        'Most AI implementations look promising in demos and stall in production. The place they stall most consistently is not the AI itself — it is the accounting layer. Here is why, and what to do about it.',
      cover: undefined,
      content: `There is a moment in nearly every enterprise AI implementation where things go quiet. The pilot was promising. The executive sponsor is still supportive. The vendor is still engaged. But progress has slowed in a way that nobody is quite ready to name yet.

When I look at where this happens, it is almost always at the same point: the boundary between the AI's outputs and the accounting system.

## Why accounting is the hard problem

Accounting is not just a record of what happened. It is an assertion about what happened, made under a specific set of rules, at a specific point in time, by people who are legally accountable for its accuracy.

When you introduce AI into a workflow that eventually produces or modifies financial records, you are introducing a system that generates probable outputs into a process that requires definitive, auditable entries. These two things are in fundamental tension, and most AI implementations do not resolve the tension — they paper over it.

The papering-over looks like this: the AI produces a draft entry, a human reviews and approves it, the human approves it, and the entry goes into the ledger. This is described as "AI-assisted accounting." What it actually is, in most cases, is human accounting with an AI-generated first draft that is being reviewed by someone who is too busy to review it properly.

## What the audit trail reveals

I have been through enough finance system audits to know what a stressed review process looks like in the data. Approval timestamps cluster at the end of the working day. Variance thresholds are set high enough that most AI outputs pass without meaningful review. The exception log, which should contain everything the AI flagged as uncertain, is routinely cleared.

This is not a people problem. It is a design problem. The AI was introduced without changing the capacity of the review function, without redefining what "review" means for an AI-generated entry, and without a clear policy on what level of AI confidence justifies reduced human scrutiny.

## The integration problem underneath

Below the review process is a more fundamental issue: most accounting systems were not designed to receive AI-generated inputs.

They were designed for human-initiated transactions, with validation rules built on the assumption that a human had already applied judgment before the transaction was created. When an AI starts generating transactions — or the inputs that become transactions — those validation rules do not catch the right things. The AI can produce an entry that passes every validation check and is still wrong in ways the validation was not designed to detect.

In insurance accounting specifically, this shows up in areas like reserve movements, intercompany eliminations, and reinsurance settlement entries — all places where the source of truth is not the system but the interpretation of a contract or regulatory requirement.

## What domain-native AI architecture changes

The approach I use in DVERSI is to treat the accounting layer as a first-class constraint rather than a downstream recipient. This means:

The knowledge graph contains the accounting rules explicitly, not as validation after the fact but as pre-conditions for AI-generated outputs. An agent producing a reserve entry knows, structurally, that it must produce an entry that satisfies both the actuarial basis and the chart of accounts. These are not checked after — they constrain what the agent can produce.

The confidence model is exposed, not hidden. When the AI is uncertain about how to classify a transaction, that uncertainty is surfaced to the reviewer explicitly, with the specific reason. The reviewer is not reviewing a completed entry; they are resolving a flagged question.

The audit trail is AI-native. Every AI-generated transaction carries its provenance: which agent produced it, which data sources were consulted, what the confidence was, and what alternatives were considered. This is retrievable not just in logs but in a form that maps to the accounting entry.

This does not make AI-generated accounting autonomous. It makes it auditable, which is the prerequisite for it becoming trustworthy over time.

The accounting layer is not where AI projects should go quiet. It is where they should become most careful — and where that carefulness, done right, produces the most durable advantage.`,
    },
  },
]
