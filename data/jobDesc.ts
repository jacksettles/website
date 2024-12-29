export const internshipWorkAtBI = `
## Overview

---

#### 1: Document Summarization

The first project I worked on at Boehringer-Ingelheim was to leverage the power of large language models (LLMs) to summarize long company
documents. Previously, various business units within BI had access to LLMs, but the limited context window sizes prevented them from being
able to generalize broadly on company documents. My teammate and I then discovered a workflow known as **Map-Reduce** from **LangChain**,
which essentially split the documents into chunks that were just the right size to fit into an LLM's context window. The LLM would then 
summarize these chunks, and then aggregate these summaries into one big summary. Importantly, this provided full oversight into documents 
of virtually any length. We also implemented a chat functionality with Retreival-Augmented-Generation **(RAG)**, allowing users to ask
specific questions about the documents. The RAG component also serves as a verification: since LLMs are prone to hallucinations, we wanted
the user to be able to verify its output against the original documents. So, the user can take part of a summary response, embed it, and 
find the __k__-most similar source documents to ground its output. We implemented this in **Streamlit** and served it using Red Hat OpenShift.

---

#### 2: Extracting Contamination from Images
    
As a pharmaceutical company, BI manufactures both prescription medicines and vaccines. In some cases, raw/non-sterile ingredients are used
in the vaccines. These ingredients are susceptible to bacterial contaminants, and if contaminated, the batch of vaccines must be thrown out.
So, with the help of another data scientist, we built a binary logistic regression model to predict contamination is these ingredents/batches 
of vaccines. We tested a number of different models, namely: **XGBoost**, a **Multi-Layer Perceptron (MLP)**, and a **Support Vector Machine (SVM)**.
The key feature that I implemented was the use of an image segmentation model to extract the pixel content from images of these
non-sterile ingredients. Since we only had images for about half of the instances of our original dataset, we shrunk our training data in hald. Nonetheless,
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
iteration of a linear regresion model to accurately predict vaccine potency. The users are able to provide the desired potency as an input
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
  - Cost Saving Opimization: Through traditional data science methods and techniques, I initiated a project that optimizes manufacturing from a cost and resource standpoint.
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

One of Dr. O'Connor's graduate students was doing a project on assessing an athlete's psychological state prior to competition and its affect on performance.
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
coaching certification, and began teaching group fitness classes in October of 2017. I was the youngest certfied coach in the OTF network at the time. I competed in
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
rest of the studio staff and members by disseminating announcements regarding promotions and polcies, as well as out of studio events.

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