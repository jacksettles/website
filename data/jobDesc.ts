export const internshipWorkAtBI = `
## Overview

---

#### 1: Revolutionizing Document Analysis
    
One of my earliest challenges was tackling the time-consuming task of analyzing long, unstructured documents. Traditional methods 
could take days, but I saw an opportunity to revolutionize this process. Using **Streamlit** and **LangChain**, I developed a chatbot 
application that could summarize these documents in minutes. The key to this breakthrough was implementing a map-reduce workflow, 
which allowed us to split documents into smaller, manageable batches. Each batch was summarized individually, and the results were 
combined to form a coherent summary. To ensure accuracy, I integrated a RAG (Retrieval-Augmented Generation) vector store, which 
verified the outputs against the source documents, eliminating LLM hallucinations. This innovation significantly reduced analysis 
time, making document review faster and more reliable.

---

#### 2: Automating Manufacturing Efficiency
    
Next, I turned my attention to the manufacturing sector, where efficiency and real-time tracking are crucial. I designed and deployed 
a full-stack application using **Next.js** and **PostgreSQL**, incorporating NFC tags to automate file tracking at a manufacturing site. 
To provide stakeholders with real-time insights, I integrated a **PowerBI dashboard** that displayed operational efficiency and key 
performance metrics. To enhance development speeds, I containerized the application code and the database using **Docker**, achieving a 
20% improvement in development times. This project not only automated critical processes but also provided valuable insights that drove 
operational improvements.

--- 

#### 3: Enhancing Data Streaming Reliability

Data streaming is a cornerstone of modern data infrastructure, and I saw an opportunity to improve its reliability and accuracy. I 
engineered a custom **JDBC Kafka source connector** with support for incremental versioning. This connector ensured accurate and 
efficient data streaming by dynamically tracking and updating Kafka topics with the latest data changes from **PostgreSQL**. This 
innovation enhanced the reliability of data streaming, making it a crucial component of our data infrastructure.

---

#### 4: Predictive Modeling for Manufacturing

In the manufacturing sector, predictive modeling can significantly enhance operational efficiency. I trained and deployed an object 
detection model using **Ultralytics YOLOv11** and **MLflow** to predict the number of canes produced in manufacturing batches. The 
model achieved an impressive 99.7% accuracy on the test set, although there were a few instances of incorrect detection due to background 
segments being misclassified as canes. Importantly, no actual canes were overlooked during testing, making the model a valuable tool for 
enhancing manufacturing processes.


#### Milestones:
  - Reduced Document Analysis Time: By implementing advanced workflows for summarization, I significantly reduced the time required for document analysis.
  - Enhanced Manufacturing Efficiency: Through automation and real-time tracking, I improved manufacturing efficiency by 30%.
  - Deployed Predictive Models: By utilizing predictive models, I assisted in manufacturing processes, driving actionable insights and operational improvements.
`

export const workExpAtNEU = `
## Overview

---

I was a Teaching Assistant for the Algorithms course under Prof. Virgil Pavlu. During this role, I held office hours to assist students 
with their homework, projects, and conceptual understanding of the material. Since the course was taught using Python, I also provided 
support with Python programming for some students who needed it. My responsibilities included grading assignments and offering 
constructive feedback to help students deepen their understanding of the subject and improve their programming skills.

---
### Key Takeaways
- Developed strong communication skills by explaining complex concepts in simple terms to students with varying levels of understanding.
- Helping students improve their skills and overcome learning challenges taught me the value of patience and personalized mentorship.
- Balancing responsibilities like conducting office hours, grading, and supporting students required effective time and task management.
- Acting as a guide and mentor for students fostered my leadership abilities, preparing me to take on more collaborative and managerial roles in the future.
`

export const workAtJocata = `
## Overview

--- 
### Developing an AI-Powered Scoring Model - [SME DNA](https://www.jocata.com/gst/)
SME DNA, an AI-powered scoring model developed at Jocata, arrives at a critical juncture marked by a surging demand for 
tax-returns (GST)-based analytics. Bolstered by a strong regulatory push, increasing GST filing compliance, and the recent 
designation of GSTN as a Financial Information Provider (FIP) under the Account Aggregator framework, access to large volumes of 
consent-based GST data is expected to become more streamlined, enhancing analytics outcomes. By leveraging GSTN filings, SME DNA 
empowers underwriters with more transparent insights throughout the business cycle of credit seekers, significantly reducing the 
Time-to-Credit (disbursal) for MSME borrowers from 2-5 days to less than 6 hours. Our initial steps involved evaluating key factors 
such as sales growth, segment stability (B2B, B2C, Exports, NIL), and the dependency on buyers and suppliers, along with their health. 
Efficient data management is essential for any financial technology company. We developed a scalable ETL (Extract, Transform, Load) 
pipeline using Apache Spark to ingest tax filing data from government APIs. This data was then processed and stored in a PostgreSQL 
database, enabling us to manage and analyze large datasets effectively. This pipeline not only improved our data processing capabilities 
but also ensured that we had accurate and up-to-date information for credit evaluations.This model was meticulously designed to 
offer a comprehensive assessment of an SME's creditworthiness, considering various financial and operational metrics, 
thereby revolutionizing the credit evaluation process for SMEs. To further streamline our operations, we focused on improving the 
performance of our APIs. We integrated a Redis caching layer into our Django framework, which resulted in a 30% reduction in API 
response latency. This enhancement allowed us to handle over 10,000 daily requests consistently, ensuring that our systems remained 
robust and responsive under high demand.

---

### Vector store for images

With the increasing adoption of digital onboarding, ensuring the uniqueness of client images during account creation has become a 
critical challenge. To address this, we initiated the FaceMap research project, aiming to enhance banking system security through 
machine learning and computer vision. Our first step involved detecting the face in the client's submitted image and converting it 
into a vector using FaceNet, a pretrained model developed by Google. These vectors were then stored in a vector database built with the 
Approximate Nearest Neighbor (ANNOY) tree-based algorithm. We experimented with different vector sizes, ranging from 64-bits to 
512-bits, to find the optimal balance between accuracy and efficiency. Our results were promising, with a 96% accuracy rate in 
correctly ranking similar faces. We validated our model using the Labeled Faces in the Wild (LFW) dataset and generated 10,000 
synthetic vectors to benchmark its performance at scale, achieving a processing time of 15 milliseconds per image. 
Thus ensuring that our solution is both accurate and efficient, making it suitable for real-time applications.

---
### Improving Text Extraction Accuracy
As part of our online KYC solution, we needed to extract information from ID proofs submitted by customers and verify the details. 
Given India's diversity of regional languages, we encountered challenges in accurately extracting English text from images using a 
pre-trained text-recognition model. To address this, we decided to train a custom Faster R-CNN model using PyTorch and MLFlow, which 
could detect different languages in images and filter out relevant text. This effort resulted in a 40% improvement in text extraction 
accuracy, significantly enhancing the reliability of our OCR solution. Using AWS Lambda and AWS Batch, we performed real-time image 
resizing, compression, and format conversion, ensuring optimal utilization of our storage resources. Efficient use of storage is crucial 
for managing costs and performance, so we decreased our storage footprint by 40% through efficient image preprocessing. To 
further optimize the performance of our machine learning models, we automated hyper-parameter tuning using MLflow and HyperOpt. This 
approach allowed us to track experiments and fine-tune our models more effectively, reducing development times by 10%.

---
### Milestones
During its beta stage, the SME DNA score aided one of the top 5 private banks in India to build a business model in the small 
ticket segment of unsecured business loans ranging from INR 2 lakh to 20 lakh, and also secured overdrafts of up to INR 2 crores 
digitally from the ground up.


`