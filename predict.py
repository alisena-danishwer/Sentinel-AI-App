# predict.py
import sys
import joblib
import re
import warnings

# Suppress warnings to keep output clean
warnings.filterwarnings("ignore")

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r'http\S+', '', text)
    text = re.sub(r'<.*?>', '', text)
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def load_and_predict(text):
    try:
        # Load the model
        pipeline = joblib.load('sentiment_model.pkl')
        
        # Clean and Predict
        cleaned = clean_text(text)
        prediction = pipeline.predict([cleaned])[0]
        
        # Print ONLY the prediction (Node.js reads this)
        print(prediction)
        
    except Exception as e:
        print("Error")

if __name__ == "__main__":
    # Get the input text from command line arguments
    if len(sys.argv) > 1:
        input_text = sys.argv[1]
        load_and_predict(input_text)