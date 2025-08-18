export const azCards = `
# Overview

I spent the 2025 training camp and preseason interning with the Arizona Cardinals Football Club of the
National Football League. There I worked as a football analytics intern where I focused on deriving metrics
for player evaluation and football strategy using spatio-temporal player tracking data. This consisted of modifying
my existing continuous blitz prediction model, as well as looking at and quantifying QB decision making on pass dropbacks.
`

export const propArchives = `
## Overview

Currently I am working as a part time contractor for a small company in the environmental due diligence space.
Essentially, this industry's objective is gathering data and building out reports on real estate properties from
an environmental stance. Any developing property must go through a phase I environmental assessment, where the history
of the property is accounted for. If potential risks are found, such as the previous existence of a nearby gas station
or dry cleaner, then a phase II assessment must be done to assess the water, soil, etc.

Currently I am assisting in obtaining and filtering data at scale. Lots of these records exist in dispersed/unstructured sources.
So my aim is to consolidate much of this data together. This involves traditional NLP tools like regular expressions,
all the way to more advanced computer vision tools like OCR and object detection.
`

export const diceLabGra = `
## Overview

---

I spent a semester working in a research lab for the College of Engineering at UGA. The primary project I worked on was applying machine learning models
to better understand microtubule (MT) dynamic instability. MTs are essentially the cytoskeleton inside eukaryotic cells that provide structure to the cell.
They facilitate in the movement of organelles around the cell, as well as being responsible for splitting chromosomes apart during mitosis. Their ability to assemble
and disassemble seemingly on their own has led some (Stuart Hameroff comes to mind first) to hypothesize that they (or the tubulins that make up them) have 
some kind of embedded intelligence within them.

Most of my time in this lab was spent collecting and processing MT data to be used in sequential deep-learning models. There is not a lot of readily available
data on MTs to my knowledge, so we used a simulator that a previous student built. Since this research is still ongoing, there is not much that I can disclose
about it at this time. I will say, though: I was pleasantly surprised to see how well some of the models performed on classifying states of MTs, especially
given that our data contained thousands of state representations of the MTs over time.
`

export const internshipWorkAtBI = `
## Overview

---

#### 1: Document Summarization

The first project I worked on at Boehringer-Ingelheim was to leverage the power of large language models (LLMs) to summarize long company
documents. Previously, various business units within BI had access to LLMs, but the limited context window sizes prevented them from being
able to generalize broadly on company documents. My teammate and I then discovered a workflow known as **Map-Reduce** from **LangChain**,
which essentially split the documents into chunks that were just the right size to fit into an LLM's context window. The LLM would then 
summarize these chunks, and then aggregate these summaries into one big summary. Importantly, this provided full oversight into documents 
of virtually any length. We also implemented a chat functionality with Retrieval-Augmented-Generation **(RAG)**, allowing users to ask
specific questions about the documents. The RAG component also serves as a verification: since LLMs are prone to hallucinations, we wanted
the user to be able to verify its output against the original documents. So, the user can take part of a summary response, embed it, and 
find the __k__-most similar source documents to ground its output. We implemented this in **Streamlit** and served it using Red Hat OpenShift.

---

#### 2: Extracting Contamination from Images
    
As a pharmaceutical company, BI manufactures both prescription medicines and vaccines. In some cases, raw/non-sterile ingredients are used
in the vaccines. These ingredients are susceptible to bacterial contaminants, and if contaminated, the batch of vaccines must be thrown out.
So, with the help of another data scientist, we built a binary logistic regression model to predict contamination in these ingredents/batches 
of vaccines. We tested a number of different models, namely: **XGBoost**, a **Multi-Layer Perceptron (MLP)**, and a **Support Vector Machine (SVM)**.
The key feature that I implemented was the use of an image segmentation model to extract the pixel content from images of these
non-sterile ingredients. Since we only had images for about half of the instances of our original dataset, we shrunk our training data in half. Nonetheless,
model performance did not fall off, with an accuracy of 84%, and an F1 score of 0.43. Even with using just the pixel data alone we found similar results.
Moving forward I developed modular programs to easily segment and extract the data from these images, and the company will continue to collect them.

--- 

#### 3: Predicting Potency, Increasing Yield

In another vaccine based project, one problem we ran into had to do with our batch yield: how can we make more sellable product
while using fewer resources than we currently do? We knew we were over-allocating resources to batches of vaccines - that was intentional.
The reason why is because those resources affected the potency of the vaccine. If the potency was below a certain threshold, it was deemed
unsellable (by the FDA, not by the company). These vaccines have to meet these thresholds in order to be labeled and sold at those levels.
If we ended up with a vaccine above the threshold, then we could just dilute it. As a result, we intentionally over-allocated resources
so that we did not fall below the sellable threshold and have to throw the product away. In order to optimize this, I developed the first
iteration of a linear regression model to accurately predict vaccine potency. The users are able to provide the desired potency as an input
feature, and the output will tell them how much of certain resources to produce a batch with. I used **GridSearchCV** with an 
**XGBRegressor** model, and achieved a MAPE of less than 6%, and an R2 score of 0.92.

---

#### 4: Data Validation

One business unit came to me with a fairly simple problem. They have 2 data sources that are supposed to contain the same information, but the way
they both represent the data is vastly different. This leads to inconsistencies at times, so I developed a web application in **Streamlit** so the users
can upload the 2 datasets, filter and find inconsistencies between the two, and then automatically send a report of these inconsistencies as an email to the
business unit's admin inbox.

---

#### 5: Testing Embedding Models

As a team member on a much larger project, I was tasked with testing different text **embedding models** to decide which one would go into a RAG application.
This application dealt with quality assurance data, which is highly specific to the company, technical, and requires the highest security clearance. The users
need to be able to quickly search through a vector database of hundreds of thousands of quality documents to then ask questions about them. Since BI is a globall company,
these documents come in all sorts of different languages. With this task, I tested 2 **OpenAI** embedding models and 2 Cohere embedding models to assess their retrieval
accuracy. I embedded the documents with each model first in their original language, and then provided a set of 40 queries that had ground truth correct answers in the form
of document IDs. From the queries I obtained the 20 closest document chunks and their associated IDs. I then did the same tests, but with all documents translated into English.
From these tests, I concluded that the Cohere multilingual embedding model was the best approach, given that it had the highest top-1 accuracy on non-translated documents.
Translating the documents did not seem to help much, presumably due to translation errors. I also found that using small document chunk sizes for the embedding models
led to the best results. 


#### Milestones:
  - Enhanced Workflows: With advanced techniques, we allowed business units to extract insights within long documents in a matter of minutes as opposed to days or weeks.
  - Automated Rich Feature Extraction: Using an image segmentation model, I added a new level of information as input to a logistic regression model.
  - Cost Saving Optimization: Through traditional data science methods and techniques, I initiated a project that optimizes manufacturing from a cost and resource standpoint.
`

export const workExpAtUGA = `
## Overview

---

I worked as a research assistant in the UGA Exercise Psychology lab under the direction of Dr. Pat O'Connor. In his lab I worked on 2 projects:

#### 1. Samsung Health Study

Dr. O'Connor received a grant from Samsung to help study the health tracking features in Samsung's wearable devices, namely smart watches. Participants wore these 
watches for one week, and data was automatically collected from them. I led the team in extracting the data from these watches, along with writing Python scripts to 
filter and preprocess the data for Dr. O'Connor's studies.

#### 2. Sentiment Analysis for Performance

One of Dr. O'Connor's graduate students was doing a project on assessing an athlete's psychological state prior to competition and its effect on performance.
I implemented an NLP perspective to this project by using professional athletes' social media posts prior to competition as input to a sentiment analysis model.
I used both a dictionary based evaluation with VADER (Hutto & Gilbert, 2014), along with a transformer model **(RoBERTa based)** (Barbieri et al., 2020), 
to quantify athlete sentiment, which was then used in this student's model to assess performance correlations.

---
### Key Takeaways
- Led data extraction and preprocessing for a Samsung funded research project.
- Provided a modern machine learning approach to the field of sport psychology.
`

export const workAtOTF = `
## Overview

--- 
### Coaching (2017 - 2023)

I started coaching at Orangetheory Fitness when I was 18 years old and a first year college student. I was actually approached about coaching when I was in high school.
I spent many afternoons and weekends in a gym near my home in Atlanta, GA, and it was there that I met the owner of the 2 OTF franchises in Athens, GA. He asked me if
I went to UGA, to which I said "hopefully - I am still in high school." I had been waiting to hear back on my admissions status. Once I was admitted, I followed up with
the owner, and eventually obtained a nationally accredited personal training certification and CPR certification. I then completed Orangetheory's company-wide 40 hour 
coaching certification, and began teaching group fitness classes in October of 2017. I was the youngest certified coach in the OTF network at the time. I competed in
a company-wide competition in September of 2018 in Colorado Springs, CO, where I put up the 3rd best 2,000 meter row time (6:14 - water rower, not a C2 rower) against
former professional athletes. In my 5 years of coaching (I took about a year off from 2019-2020 to focus on school) I taught more classes at studio 1012 than any other
coach (2700+). I was there from the grand opening at less than 200 members, up to its peak of 600 members. I helped people of all different ages, athletic, and 
professional backgrounds achieve their fitness goals. I even learned basic sign language to communicate with one member who was deaf (OTF classes are entirely verbal - 
the coach gives instructions to rooms of up to 36 people all through a microphone while managing 3 different stations at once). During my time I consistently maintained
the highest utilization rate of all coaches - no matter the time of day, my classes were almost always full with waitlists.

### Head Coach (2021 - 2023)

During my last 2.5 years of coaching I served as the head coach at studio 1012. This time overlapped with my first 1.5 years of grad school as well. As head coach,
I was in charge of hiring, training, and scheduling new coaches. I also hired and trained members of the front desk/sales staff. I engaged with new members, reaching out 
to them within their first month of joining and gathering feedback on how we could provide a better service. I ensured cohesion between the owner/manager/corporate and the
rest of the studio staff and members by disseminating announcements regarding promotions and policies, as well as out of studio events.

### Transformation Challenge (2021 - 2023)

Prior to becoming head coach, as senior in undergrad, I led the transformation challenge for studio 1012. At that time, this challenge was a company wide event,
but corporate did not provide many resources or roadmaps for how to conduct this challenge (they have since begun providing more resources). So, during my senior
year of undergrad I put together a curriculum for this transformation challenge. Each week I sent out a newsletter to all participants covering a new topic around
health and fitness. The transformation challenge's explicit goal was to drive fat loss, so I covered everything from basic principles of nutrition (macro and 
micronutrients), caloric intake, alcohol consumption (all while maintaining the appropriate scope of practice) to sleep habits, weightlifting, recovery and mobility.
In putting together these newsletters, I spent a few hours every Sunday afternoon gathering peer reviewed resources, podcasts, news articles in an effort to make the 
content engaging and understandable for the everyday exerciser.

---
### Milestones
- 600 members - With the most classes taught at the studio I played a key role in building the membership basis up from <200 at presales to 600+ by Spring 2019.
- 500th class - I taught 500 classes by December of 2018, before turning 20 years old.
- 1000th class - after taking a year off I coached my 1000th class by March of 2021.
`

export const curoWorkAtUGA = `
## Overview

---
During the summer of 2020, in the midst of the Covid-19 pandemic, I conducted funded research in **philosophy of language**. Although I am
still in a tangentially related field, at the time I had my heart set on going to grad school purely for philosophy, so I chose to do this
research to serve as my writing sample for graduate school applications. It turned into something bigger than just that for me.

I expect very few people to understand this part of my resume. That may be because you don't understand what I mean by some of the topics.
Maybe you don't understand why I would include it here seeing as I am a machine learning engineer now. Or maybe you just don't understand why someone
would study philosophy in the first place. You would be right to point out that there are not many jobs in philosophy; however, the assumption 
that someone studies philosophy to get a specific job is misguided. Philosophy is a liberal art, one of the oldest in fact. The liberal arts have 
nothing to do with politics, but rather are disciplines that should be studied freely in their own right. They are ends in and of themselves, rather
than means to an end. I always felt like philosophy was a skill or an activity, not solely a subject on its own. It sharpens your reasoning skills and forces
you to wrestle with complex and nuanced ideas that, frankly, very few people even question for one reason or another. The best off-the-cuff explanation
I once heard about what philosophy is (other than the literal translation of  "love of wisdom") was this: philosophy is not in the business of
answering questions, but of questioning answers. A liberal arts education forces you to read and write a lot. What this amounts to is mastering
language, rhetoric, arguments, and ultimately becoming more articulate. I firmly believe that if one wants to find any one thing to take away from education at all,
it is to become more articulate. Technical skills evolve as technology evolves. It is important to learn these, no doubt, but when you are applying for a job, 
you ultimately have to be able to convince the hiring manager about why they should hire you. This is an argument. At that moment, what is more important is knowing
your skillset and what value you can bring to the team, while also knowing your shortcomings. If you can articulate this to them, it shows you are self-aware. It shows
that you know where you stand, and generally where you want to go. This being-able-to-locate-oneself w.r.t. one's surroundings is crucial for answering the 
fundamental question of ethics: what should I do? Before any plan can be created, this needs to be determined first. Philosophy helped me understand this deeply, particularly
through Ludwig Wittgenstein and Stanley Cavell's reading of Wittgenstein. For Cavell, self-knowledge provides the basis for morality, and this was ultimately the topic
of this thesis.

---
### Philosophy of Language

#### 1. Ludwig Wittgenstein

I started by reading Ludwig Wittgenstein's first book, the __"Tractatus-Logico-Philosophicus"__. I actually picked this up at a bookstore at the beach in May of 2019.
**It is not a beach read.** I have made that mistake on more than one occasion. In July of 2018 I thought I could get through Tolstoy's __"War and Peace"__ and Dostoevsky's
__"The Brothers Karamazov"__ in 8 days at the beach... I got through 250 pages of the former and still haven't attempted the latter. I was young and incredibly naive. 
I still am to a degree. 

The Tractatus is opaque and mesmerizing all at once. Wittgenstein wrote it while serving in the trenches of **World War I**. He does not write like most philosophers with 
long-form prose. There are no chapters. The Tractatus consists of numbered propositions and short paragraphs of a few sentences each. The numbers are also not 
integers, but rather each point that builds off the previous ones serves as an extension of the previous numbers. So it starts with proposition 1, and goes on to 
1.1, 1.11, 1.12, 1.13, then 1.2, etc. He begins with a proposition, or really an axiom, which means it is a given/self-evident assumption: "The world is all 
that is the case". He follows this up with proposition 1.1: "The world is the totality of facts, not things". Throughout much of the text, he is laying the 
groundwork for his metaphysics (i.e. the nature of the world). He goes on to assert that only states of affairs exist, which he uses to support his 
"picture theory of language" - language is a reflection of these states of affairs.

Much of the book concerns the limits of language - what can be said, versus what can only be shown. "The limits of my language mean the limits of my world" (5.6).
Proposition 7 can leave one confused, seeing as it is the final proposition in the book with no explanation following it: "Whereof one cannot speak, thereof one must
be silent". The book was widely influential within the tradition known as Analytic philosophy, especially to a group of logical positivists known as the Vienna Circle.
To positivists, the only statements that can be said to be true are those that can be verified through direct observation (empirically/scientifically) or through logical
proof. It is important to note, though that Wittgenstein did not see himself as a member of this group. He felt that they misinterpreted much of the text, especially
the last few propositions concerning more traditional topics of philosophy such as God, the will, ethics, and the mystical. When they did invite him to come speak, he 
notably just read poetry to them the whole time with his chair facing the wall (a bit of an odd-ball for sure).

After writing the Tractatus, Wittgenstein felt that he had shown much of philosophy to be non-sensical. So, he left. He returned home to Austria to be a school teacher,
then an architect. He built a house in Norway, and even remodeled his sister's home in Vienna, both of which are still there to this day. However, he found much of his 
work in the Tractatus to be inconsistent and he ended up back in philosophy at Cambridge, where he studied under Bertrand Russell prior to WWI. What began as a series 
of notes ended up being published posthumously in 1953 in what is now known as __"Philosophical Investigations"__ (PI). In it, he admittedly recants his picture theory 
of language from his first book. PI opens with a reading from St. Augustine's __"Confessions"__, where he describes how he learned language as a child. Essentially 
grown-ups pointed to things and said their names, and he inferred their meanings from there. Wittgenstein rightly points out, though, that this tells us nothing about 
how abstract words that have no physical reference gain their meaning. I think of words like love, pain, excitement, sadness, promise, trust, fair, etc...

This seems obvious to the modern world-view; however, at the time, the notion that words and language as a whole had a **definite** and **determinate** sense was widely held.
Wittgenstein articulates less of a thesis on language in PI, and more so constructs a web, where his thoughts are like sticky notes on a bulletin board interconnecting with each
other. He introduces the idea of language-games, which are like particular modes of communicating that call for the use of context. He explicitly does not define a language-game 
because, well, not every mode of communicating has a preset context (a trained linguist might call this **pragmatics**). He also shows how words carry family 
resemblances to each other. Many people felt as though these ideas were purely conjecture at the time, but I think **computational linguistics** and **distributional 
semantics** has given these ideas some credence in today's modern world. We see these family resemblances between words when investigating word embeddings with modern 
language models. Some words are similar to each other because they share common/similar values in some of their dimensions. While it is hard to tell if the meanings of words
are "actually" held in high-dimensional vector spaces (whatever that may "mean"), it is evident that they serve as good models for language given the recent successes of LLMS.

#### 2. Stanley Cavell
I moved into **Stanley Cavell's** magnum opus __"The Claim of Reason"__ (TCR) after reading Wittgenstein. I could say a lot more about Wittgenstein's PI, but my thoughts on 
it are heavily indebted to TCR. Cavell, an American philosopher during the latter half of the 20th century, was deeply influenced by Wittgenstein's later work,
especially PI and __"On Certainty"__. TCR covers so much, it is hard to explain it succinctly. His writing style is the antithesis of Wittgenstein's: TCR is 500 pages, 
and the first sentence takes up nearly the entire first page.

The starting point in my research was looking at Cavell's reading of Wittgenstein's notion of "criteria" in PI. Many philosophers at the time read Wittgenstein to show how
criteria could refute skepticism of the external world, and therefore language can relate us as subjects to the world of objects. The very general thinking is that by 
using precise criteria for what "counts" as something, we can speak truthfully about the world and therefore convey meaning. If the criteria are explicitly defined, 
then the sense of words can be determinate. Cavell reads it in the opposite light, though: Wittgenstein's notion of criteria show the truth in skepticism, and how it 
cannot be overcome at times. Specifically, Cavell is more concerned with skepticism of other minds than he is concerned with skepticism of the external world (as, say, Descartes
was concerned with in his **"Meditations on First Philosophy"**). To Cavell, Wittgenstein's "criteria" show just how difficult skepticism of other minds is to overcome.

The problem of other minds is an epistemological problem that concerns how we can __know__ that other minds exist (as in, have a subjective, conscious experience). As individuals, 
we know that we exist (although this relationship may be closer than one of "knowledge"). For others, we can see their brains and their behaviors. However, the skeptical question 
can always be raised (e.g. "Could they have been programmed to respond in that way?"). This sounds nonsensical, seeing as nobody actually responds this way to human behavior 
in their everyday lives. If someone is crying, we tend to assume that they are sad or in pain. Try, though, to come up with criteria that, if met, prove the existence of 
another person's mind. What ends up happening is generally a circular appeal to their behavior again, which is only observed from our external perspective. This is the 
truth behind skepticism of other minds. It carries a weight that cannot be refuted through science or logical proof. At a certain point, assumptions are our bedrock, 
and explanations stop somewhere. Even in logical proofs, you either begin with axioms as your foundation, which do not need to be proven, or you begin with an assumption.

If we cannot deductively prove the existence of other minds, then what are the implications of this? It isn't simply a matter of "Oh, I don't have access to their subjective
experience, but I will just assume they have one because I hope they do this for me". That is certainly part of it, but think about what the mind entails. What takes place 
solely in our minds (or simply our subjective experience)? What are the criteria for being called "smart" or "dumb"? What about the criteria for "love" or "hate"? 
What about a "just" or "stable" government? Simple assertions like "that song is awful" obviously ring out as an opinion, but how different is that from "that is an unhealthy
way to live life", or "that is a corrupt, evil government". We are moving into matters of morality, right and wrong. Is there a way to deductively prove that one thing is right and
the other is wrong? An example that really hit home for me in TCR is when Cavell brings up the case of someone who laughs at physical pain the way we laugh at a joke.
Their outward behavior seems almost the reverse of ours. What do you even say to that person at that point? How do you treat them? "If I say 'They are crazy' or 'incomprehensible'
then that is not a fact but my fate for them" (TCR, p. 118). We are deeming that those people have met our criteria for "crazy" or "incomprehensible", and so we can "call" them that. The
most daunting question that sits in front of me at this point is this: How shall we treat that person? Do we even acknowledge them as a person? I would argue that these
questions are just different forms of the fundamental question of ethics: "What __should__ I do now/How shall I act?".

To Cavell, the problem of other minds isn't merely metaphysical or epistemological, but ethical. We tend to take it as a given that other minds exist. 
On matters of what maybe a good song is, or a beautiful painting, we deem those to often be a matter of opinion on aesthetic value. When it comes to questions of 
humanity though, such as what is just or humane, we often treat those as immutable facts of the universe, like the law of gravitational pull. Both of these rest on 
what __our__ criteria are that allow us to proclaim that a song is beautiful, or a society is humane. I have had people object to me when I say this on the grounds 
of "if everything is subjective, then how do we ever have stable societies?" "Our" in that sentence could mean an individual, a small group, or a greater polis (community). 
The agreement in these criteria are what band people together along various different dimensions. An artist has a fanbase that probably does not include everyone, but 
surely a subset of people. A society has members that share even more common criteria that determine how it will operate. You see the difference in these criteria/values 
with different cultures. The right way to act in one country might be reprehensible in another. What might seem like a mere assertion of fact only appears that way because 
of these common values. It's like an echo chamber, and not necessarily a bad one either - we need communities of likeminded people. But if we never confront "others", then 
our "assertions of fact" can start to become unchecked assumptions. I think of moments when I still encounter people whose understanding of recreational drugs hasn't been 
updated since the 1980s.

On this view, the underlying notion in Cavell is that "valuing underwrites asserting" - "the idea that interest informs telling or talking generally" (p. 95).
What you are willing and able to call or count as something determines what you can assert. When making an assertion to another person, we are assuming that 
our criteria are shared and that communication may take place. I am certain we have all been caught in moments of disagreement, though. These moments are when 
we realize that we do not share all criteria together. It shows us how shaky the grounds of communication, and therefore relationships, actually are.

A real world example I encountered came as I was teaching group fitness classes at Orangetheory Fitness. I would tell people how to do an exercise verbally while simultaneously
showing them. One day I saw someone not performing an exercise correctly (or what I deemed to be correct). I went to correct them, and I told them "extend your elbows". The person 
kept bending their elbows. I said straighten your arms. No dice. I showed them what they were doing vs. what I wanted them to do. Still nothing. At this point I was 
incredibly frustrated. It felt like they just weren't listening. I told them it looked better, and just walked away cussing under my breath. Then I stopped and thought 
for a minute: I have been an athlete my whole life. Knowing how to move my body in space is largely a given for me. This person literally told me before that workout 
that they had never lifted a weight before. So their criteria for what counts as "extending their arms" may be entirely different from mine, if they have any criteria at 
all (it may not have ever been a thought). This happened often. Sometimes I would correct them easily. Sometimes they would tell me "I know, but that way hurts, so I 
modified it". These are moments when I realized that my criteria did not match theirs. The question of how I would treat them after this always sat heavy on me. Sometimes
I would think "Okay, but that isn't doing anything" - It might not be doing anything for the muscles the original exercise is supposed to work, but at least these people
are moving, and **that** might 'count' as doing something to them. I'd like to think this perspective made me a more patient coach and teacher. My goals from then on were to
always meet athletes on their terms, while simultaneously trying to bring them into ours.

Wittgenstein and Cavell were deeply concerned with how language is learned/acquired. Wittgenstein used examples like continuing the series of 2,4,6,8, etc. But what if one 
fails to catch on? Cavell provides an analogue to this when his daughter is learning different words. She points to their cat and says 
"kitty". So, he thinks she has learned what a kitty is, until later she points to a blanket and says "kitty" as well. Maybe she has only learned what we might call "soft" or "fluffy". She 
then picks up a bill in the mail and says "you have a letter". When he is watching coverage of the Vietnam conflict or the 1968 Democratic National Convention, 
she asks "what show are you watching". Cavell then notes that there are conversations she is not ready to have, like how we as a society cannot have certain 
conversations because we have failed to bring our criteria to each other to have a coherent discussions together. I will end on one of my favorite excerpts from part I of TCR:

"When you have thrown out your signals and I have had the opportunity to be apprised of your inner world, then __do__ I really know it (know __it__) or do the signals
come from a source I can never check, hence signify something I can never know? (Another's mind as God.) (p. 97)

---
### The nature of philosophy

While Ludwig Wittgenstein's ideas look very different between his early and later works, his views on the nature of
philosophy remained somewhat consistent between the two. I found that Cavell echoed these views, albeit with more words.

#### 1. Tractatus-Logico-Philosophicus (1921):

“The object of philosophy is the logical clarification of thoughts. 
Philosophy is not a theory, but an activity. A philosophical work consists essentially of elucidations. 
The result of philosophy is not a number of “philosophical propositions,” but to make propositions clear. 
Philosophy should make clear and delimit sharply the thoughts which otherwise are, as it were, opaque and blurred.” (§4.112)

#### 2. Philosophical Investigations (1953):

"A philosophical problem has the form 'I don't know my way about' " (§123). 

"What is your aim in philosophy?—To show the fly the way out of the fly-bottle” (§309)

#### 3. The Claim of Reason (1979)

"In philosophizing, I have to bring my own language and life into imagination. What I require is a convening of my culture's criteria, in order
to confront them with my words and life as I pursue them and as I may imagine them; and at the same time to confront my words and life as I pursue them
with the life my culture's words may imagine for me: to confront the culture with itself, along the lines in which it meets in me.

This seems to me a task that warrants the name of philosophy. It is also the description of something we might call education. In the face
of the questions posed in Augustine, Luther, Rousseau, Thoreau ..., we are children; we do not know how to go on with them, what ground we may occupy.
In this light, philosophy becomes the education of grownups. It is as though it must seek perspective upon a natural fact which is all but inevitably misinterpreted - 
that at an early point in a life the normal body reaches its full strength and height. Why do we take it that because we then must put away childish things, we must
put away the prospect of growth and the memory of childhood? **The anxiety in teaching, in serious communication, is that I myself require education. And
for grownups this is not natural growth, but change. Conversion is a turning of our natural reactions; so it is symbolized as rebirth.**" (p. 125)

In the first quote from PI above, section 123, if you translate the original German "Ich kenne mich nicht aus" word-for-word, it amounts to "I know me not out/about".
It echoes a lack of knowledge, either of the self, of the area around the self, or of the relationship between the self and the world around it. Cavell connects to this idea
here:

"Something of what we think goes into competence as a moral agent, the ability to excuse or justify or explain our actions (to elaborate them, as I come to say) is
the same as something that goes into what we think of as competence at knowing oneself, a way of saying what one is doing, hence into what we think of as having a self
(so that in such a way morality finds a foundation in knowledge)." (TCR, foreword, p. xvi)

Or again:

"What you do and fail to do are permanent facts of history, and the root of responsibility. But the trunk and branch of responsibility are what you are **answerable** 
for. And where your conduct raises a question, your answers will again be elaboratives. I have described moral arguments as ones whose direct point it is to determine
the positions we are assuming or are able or willing to assume responsibility for; and discussion is **necessary** because our responsibilities, the executions of our
cares and commitments, and the implications of our conduct, are not obvious; because the self is not obvious to the self. To the extent that that responsibility is the
subject of moral argument, what makes moral argument rational is not the assumption that there is in every situation one thing which ought to be done and that this may
be known, nor the assumption that we can always come to agreement about what ought to be done on the basis of rational methods. **Its rationality lies in following the
methods which lead to a knowledge of our own position, of where we stand; in short, to a knowledge and definition of ourselves.**" (p. 312)

"Knowing oneself is the capacity, as I wish to put it, for placing-oneself-in-the-world." (p. 108)


---
On these views, philosophy is a method, or an activity, **not** a subject. It is a mode of inquiry or problem solving, which I find necessary for effective communication.
`

export const internshipAtSSGA = `
## Overview

---

During the summer of 2019 I got to spend a few weeks in Dublin, Ireland working as an investment research intern with **State Street Global Advisors** on their
Fundamental Value Equities team. Our primary project was to explore publicly traded companies to determine their value as long-term investments. We chose to look
at publicly traded football clubs **Manchester United FC** and **Juventus FC**. Most of this time was spent gathering data from their annual financial statements between
2005 and 2018. 

We noticed that Manchester United's success was a somewhat turbulent since Sir Alex Ferguson's retirement in 2013, so we chose to avoid investing in them for now.

Juventus typically operates at a loss, so we ultimately decided to recommend shorting them.
`