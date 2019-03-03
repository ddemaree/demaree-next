---
title: Good PMs Don't Dictate Solutions
slug: no-more-handoffs
date: 2019-02-20
---

# Good PMs Don't Dictate Solutions

<p class="subtitle">Product managers are not mini-CEOs, and we aren't designers either — so stop throwing things over the wall</p>

I'm a product manager, and I often think about how on earth to explain my job. PM-ing defies simple explanation, because it's the union of a mixed bag of concerns and skills, and because there are a number of pernicious myths surrounding the job that confuse (or worse) more than clarify. [PMs who are much more experienced and accomplished than I am have this same problem.](https://qz.com/work/1346948/what-is-a-product-manager-job/)

This tweet exchange between Brad and Mike got me thinking about one of the most pernicious myths about my job—the "mini-CEO" myth:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">I can&#39;t tell you how many teams I&#39;ve worked with where designers shovel work onto devs with the expectation devs will just build things as-is (nevermind if styles are inconsistent with existing work). Tools like Zeplin exacerbate this problem. It&#39;s critical for devs to be equals.</p>&mdash; Brad Frost (@brad_frost) <a href="https://twitter.com/brad_frost/status/1027931365940097024?ref_src=twsrc%5Etfw">August 10, 2018</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">In some places *ahem* PMs dictate solutions to designers with the expectation designers will design them as-is, and only when the design is “finished” does engineering get involved. 🤦‍♂️</p>&mdash; Mike Aparicio (@peruvianidol) <a href="https://twitter.com/peruvianidol/status/1028005104153178113?ref_src=twsrc%5Etfw">August 10, 2018</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This definitely happens, sadly. And not only is it a poor way for PMs to do their jobs, IMHO, part of a good PM's job should be to ensure that dead hand-offs (a.k.a. "throwing things over the wall") never happen at any point in your team's process.

---

Product management is a funny job in that you're responsible for good outcomes, but usually not in charge of the people and systems that will create those outcomes. The phrase one hears a lot is "influence without authority"; I've personally never found that description entirely satisfying, because it doesn't tackle _responsibility_ which is the real thorny area.

PMs, designers, and engineers are _all_ responsible for the development of a product, but PMs are responsible for its _success_, whatever that means in context. A PM is measured by the things they make happen, however, they almost always lack the authority to make those things happen, or even to define specifically how they should happen.

There's one notable exception to all this in many product organizations: UX design.

While it would be unwelcome and probably inappropriate for a PM to (say) write a design document for how to code a feature, a lot of the time it's totally expected for them to produce wireframes, if not full mockups, as part of describing what the feature is and how it should work.

To be sure: on teams that don't have dedicated UXers, and/or where engineers can _mostly_ get things done without design guidance, having the PM explain a thing visually can be an important stopgap.

However, this expectation that wireframes and other visual artifacts are within the scope of a PM's job, combined with the PM's role as definer-of-the-problem-space, is just a few feet up a slippery slope that leads to PMs expecting—or being expected—to direct UX, undermining the agency and expertise of any design/UX professionals they may be working with.

In my career, I've seen PMs or heads of product not only prescribe changes to UI, but even try to dictate the process by which designers' develop and present UI concepts.

---

Here's a story about the PM-design relationship:

Meredith is a UX designer working on an e-commerce website, specifically on a complex card browsing interface, with various controls for filtering product cards and navigating between pages/tabs. Because the flow and interplay between different control states and content are critical to the success of this project, Meredith wants to deliver an interactive prototype, made with HTML & JS, rather than static mock-ups.

Prototypes (she argues) are great for testing and validating UX ideas before the eng team is asked to invest time and effort; everyone can look at something real, and issues with usability and flow can be noticed and addressed much sooner. She plans to keep the prototypes lo-fi, and focus on structure and clarity more than polish —type and color choices would be super basic, think monochrome and system fonts — so that the initial design reviews can focus on how the UI works.

Unfortunately, Boris, the lead PM, insists on approving static mockups of Meredith's completed design before any code will be written, including prototypes, so that he can know what the team will build before any time is spent building it. In Boris's world, the design is not "done" until it's been delivered as a Photoshop file for his approval, after which point the "design" should not be changed without going _back_ to him for approval of the changes.

To be fair, Boris is aware that sometimes one throws away old code in favor of something better, that sometimes a problem is hard enough that it's worth investing in a prototype or proof of concept, and that it's important for the people who will do the work to have a say in the process for doing it. The problem is that while Boris grants those premises when it comes to the _engineering _team, he has a fixed notion of how design process should work.

A prototype strikes Boris as interesting, but risky, and probably unnecessary--after all, he's also writing a requirements doc, and aside from that, doesn't the engineering team just need a visual spec? Aren't the designs just illustrating the requirements in his doc?

Boris pulls rank and wins the argument: Meredith abandons the prototyping idea and makes a massive Sketch file representing every screen and state in the browsing interface, based on Boris's requirements doc, the team's pattern library, and her best judgment of how things ought to work. After some back and forth with Boris, he signs off, the design is called finished, and it's tossed over the wall to engineering to be built.

Shortly thereafter, someone notices that navigating back to a previous state in the UI after filtering products on the browsing page is confusing. Boris, Meredith, and the devs discuss in Slack, and Meredith makes a revised design--the final design is now final plus one.

Someone else notices that it's not obvious which filters are turned on, and users might click the same controls multiple times without good visual feedback to let them know the filter is already applied. Another design revision is made; we're now at final plus two.

As the project goes on, the team finds and figures out problems with micro- and macro-interactions whack-a-mole style, via changes to actual feature code after an ostensible design hand-off. Each change requires a static design revision and approval by a PM, and because the design iterations have now stretched into "production", there's a constant, heated battle between PM, design, and eng over which designs for which components are actually final -- some components' design revisions aren't finished, some are finished but not approved, some designs are approved but not updated in their Jira ticket, and some are both finished and updated in the ticket, but there's such confusion that no one quite trusts "Design Approved - Final" when they see it.

While all this is happening, some devs on the team are still working off of the "final" or "final + n" designs that are now obsolete, which will lead to little problems some of which may not be noticed until after the product ships.

The design for the browsing feature remains in a state of flux, constantly being handed off and handed back from UX to development and back. This is natural; George Lucas once said his movies didn't get releases so much as escape, which is another way of saying products must ship but are never done. However, instead of building that back-and-forth feedback loop into the team's process, both designers and engineers are left waiting for a "done" moment that never comes. What they have instead are incomplete instructions or tenuous approvals. 

In the end, the feature ships, but the process of shipping is is much harder than it needs to be, and despite working together closely and going over every detail as a group, no one who works on the project feels like they had had agency or authorship—except, of course, Boris.



---


My main arguments against PMs dictating solutions are ultimately both political, but I hope you heed them anyway.

Making software is an intricate, complex art, requiring the talents of many people with different, sometimes totally divergent skill sets. As software-making grows in both scope and scale, it's not _just_ that waterfall-like hand-offs between teams make people feel bad, like they're simply the hired help. (But that is a thing that happens, and in a world where developers have so many choices of where to work and on what, you don't wanna be the PM who makes engineers or designers feel underappreciated.)

No, it's that dictatorship and handing off artifacts adds a cost to every step of the development process. There's the cost of producing artifacts, rather than just diving into a shared prototype. There's the cost in meetings and email chains to review artifacts, and negotiate over those precious "+1s" or "LGTMs" that signify approval. There's the risk of missed signals as a design intention is conveyed first in an incomplete form like a mockup that cannot possibly capture everything it needs to, and then having to backfill all the missing information in the context of fixing errors and not simply requesting clarification.

Handoffs make iteration more expensive, and yet people who insist on handoffs tend not to accept that more handoffs may require less iteration or fewer demands for changes. In my experience, handing off artifacts between silos simply makes things slower and harder. It rarely, if ever, makes developing software smoother or safer.

As Brad tweeted, it is critical for devs to be equals alongside designers and PMs, in the sense that everyone working together on the project should feel (and, really, should _be_) equally invested in its success. In my opinion, PMs are uniquely well situated to get this done — you might even say facilitating good creative processes, and helping to keep all the different humans involved in a project engaged and allied to solve worthy problems, is in fact the job.

While a PM's performance review may focus on what they "made happen" in a product or a market, her success at making things happen depends on how well they can influence others that those things are worth the trouble.


<!-- Docs to Markdown version 1.0β15 -->
