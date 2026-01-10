
# 🦠 Sentinel AI: COVID-19 Sentiment Analysis

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![NLP](https://img.shields.io/badge/AI-NLP-orange)
![Python](https://img.shields.io/badge/Python-3.8%2B-yellow)
![Node.js](https://img.shields.io/badge/Node.js-14%2B-green)
![Status](https://img.shields.io/badge/Status-Deployed-success)

**Sentinel AI** is a full-stack web application designed to monitor and classify public sentiment during the COVID-19 pandemic. By leveraging **Natural Language Processing (NLP)** and Machine Learning, the system analyzes social media text to detect **Positive**, **Negative**, or **Neutral** emotional polarity in real-time.

---

## 🚀 Key Features

* **Real-Time Inference:** Instant sentiment prediction using a pre-trained Support Vector Machine (SVM) model.
* **Modern UI/UX:** A responsive "Glassmorphism" interface that works seamlessly on desktop and mobile devices.
* **Advanced NLP Pipeline:** Implements sophisticated text preprocessing including regex cleaning and lemmatization.
* **Visual Feedback:** Dynamic color-coded results (Green/Red/Yellow) with emoji indicators.
* **Interactive Team Section:** A responsive grid showcasing the development team.

---

## 🛠️ Tech Stack

### **Frontend**
* **HTML5 & CSS3:** Custom responsive design with CSS Grid/Flexbox and CSS Variables.
* **JavaScript (ES6):** Async/Await for API calls and DOM manipulation.

### **Backend**
* **Node.js & Express:** Handles API requests and static file serving.
* **Child Processes:** Spawns Python scripts to bridge the web server with the AI model.

### **Natural Language Processing (NLP)**
* **Preprocessing:** NLTK (WordNet Lemmatizer, Stopword Removal).
* **Vectorization:** * **TF-IDF:** Statistical weighting for keyword importance.
  * **Word Embeddings:** SpaCy (GloVe) for semantic context analysis.
* **Libraries:** `spaCy`, `NLTK`, `re` (Regex).

### **Machine Learning**
* **Frameworks:** Scikit-learn, Pandas, NumPy.
* **Model:** Linear Support Vector Machine (LinearSVC), Logistic Regression and Naive Bayes
* **Serialization:** Joblib for efficient model loading.

---

## 📂 Project Structure

```bash
root/
├── public/                 # Frontend Static Files
│   ├── index.html          # Main Interface
│   ├── style.css           # Glassmorphism Styles
│   ├── script.js           # Client-side Logic
│   └── image/              # Team Photos & Assets
│
├── server.js               # Node.js Express Server
├── predict.py              # Python Interface for Inference
├── sentiment_model.pkl     # Serialized Trained Model
├── Corona_NLP_train.csv    # Dataset (Training)
├── package.json            # Node Dependencies
└── README.md               # Documentation

```

---

## ⚙️ Installation & Setup

Follow these steps to run Sentinel AI on your local machine.

### **1. Clone the Repository**

```bash
git clone [https://github.com/your-username/sentinel-ai.git](https://github.com/your-username/sentinel-ai.git)
cd sentinel-ai

```

### **2. Backend Setup (Node.js)**

Make sure you have Node.js installed.

```bash
npm install

```

### **3. AI Engine Setup (Python)**

Make sure you have Python installed and the required libraries.

```bash
pip install scikit-learn pandas numpy nltk spacy joblib
# Download language models for NLP
python -m spacy download en_core_web_md
python -m nltk.downloader wordnet

```

### **4. Run the Application**

Start the local server.

```bash
node server.js

```

Open your browser and visit: `http://localhost:3000`

---

## 📊 Model Performance

The AI model was trained on the **Twitter COVID-19 Sentiment Dataset** (~41,000 tweets). We benchmarked three algorithms:

| Algorithm | Accuracy | F1-Score | Status |
| --- | --- | --- | --- |
| **Linear SVM** | **81%** | **0.81** | ✅ **Selected** |
| Logistic Regression | 79% | 0.79 | Baseline |
| Naive Bayes | 68% | 0.67 | Discarded |

*Note: The Linear SVM was chosen for its superior ability to handle high-dimensional text data.*

---

## 👥 The Team

This project was developed by the **NLP Group** as part of the Natural Language Processing coursework (2026).

* **Ali Sena Danishwer** - *Lead Developer & Full Stack Engineer*
* **Maria Iqbal** - *Software Developer*
* **Asiyan Bahahkhiri** - *Frontend Specialist*

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

```

```
