import streamlit as st
import pandas as pd
import joblib
import time
from sklearn.preprocessing import LabelEncoder

# Load the model and encoders
model = joblib.load('logistic_regression_model.pkl')

# Load the CSV file and LabelEncoders for transformation
data = pd.read_csv('expanded_synthetic_health_data (1).csv')
X = data.drop(columns='Severity')  # Use this to check for missing features

label_encoders = {}
for column in data.select_dtypes(include=['object']).columns:
    label_encoders[column] = LabelEncoder()
    label_encoders[column].fit(data[column])

# Conversion dictionary for manual conversions
conversion_dict = {
    "Gender": {"Female": 0, "Male": 1, "Unknown": 2},
    "Smoking": {"No": 0, "Yes": 1},
}

# Function to convert user inputs to the model-compatible format without showing warnings
def convert_input(column, value):
    if column in conversion_dict:
        return conversion_dict[column].get(value, value)

    # Handle unseen labels without showing warnings
    if column in label_encoders:
        try:
            return label_encoders[column].transform([value])[0]
        except ValueError:
            # Silently handle unseen label by using the first available class (default label)
            return label_encoders[column].transform([label_encoders[column].classes_[0]])[0]
    return value

# Ensure feature names are consistent
def adjust_feature_names(user_data):
    feature_mapping = {
        'Pain Scale (0-10)': 'Pain Scale',
        'Stress Levels (0-10)': 'Stress Levels'
    }
    adjusted_data = {}
    for feature, value in user_data.items():
        # Map the feature name if needed
        adjusted_feature = feature_mapping.get(feature, feature)
        adjusted_data[adjusted_feature] = value
    return adjusted_data

# Function to show loading spinner and predict severity
def predict_severity(user_data):
    # Adjust the feature names to match the model's features
    adjusted_data = adjust_feature_names(user_data)
    
    # Simulate a loading process (displayed after submission)
    with st.spinner('Predicting severity...'):
        time.sleep(2)  # Simulate delay for prediction processing

        # Convert inputs
        model_input = {}
        for column, value in adjusted_data.items():
            model_input[column] = [convert_input(column, value)]
        user_df = pd.DataFrame(model_input)

        # Check for missing columns and add them with default values
        for col in X.columns:
            if col not in user_df.columns:
                user_df[col] = 0  # Default value for missing features

        # Make prediction
        severity_prediction = model.predict(user_df)
        severity_class = label_encoders['Severity'].inverse_transform(severity_prediction)

        return severity_class[0]

# Survey Form
def show_survey():
    st.title('MEDICAL SURVEY PAGE')
    st.write('Please fill out the following questionnaire to asses severity:')

    user_data = {}
    questions = {
        'Gender': ['Male', 'Female', 'Unknown'],
        'General Symptoms': ['Fatigue', 'Cough', 'Shortness of Breath'],
        'Pain Scale (0-10)': 'number',
        'Symptom Duration': ['Less than 2 days', '2-5 days', 'More than 5 days'],
        'Onset': ['Sudden', 'Gradual'],
        'Chronic Conditions': ['Hypertension', 'Diabetes', 'Asthma', 'None'],
        'Allergies': ['Yes', 'No'],
        'Medications': ['Yes', 'No'],
        'Travel History': ['Yes', 'No'],
        'Contact with Sick Individuals': ['Yes', 'No'],
        'Smoking': ['Yes', 'No'],
        'Alcohol Consumption': ['Yes', 'No', 'Occasionally'],
        'Physical Activity': ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'],
        'Stress Levels (0-10)': 'number',
        'Sleep Quality': ['Very Good', 'Good', 'Average', 'Poor', 'Very Poor']
    }

    # Age as a number input instead of a slider
    user_data['Age'] = st.number_input('Age:', min_value=1, max_value=100, step=1)

    for question, input_type in questions.items():
        if input_type == 'number':
            user_data[question] = st.slider(f'{question}', min_value=0, max_value=10, step=1)
        else:
            user_data[question] = st.selectbox(f'{question}', input_type)

    submit_button = st.button('Submit', key='submit_button', help="Submit the survey", 
                              use_container_width=True)

    if submit_button:
        return user_data
    return None

# Main Streamlit Application
def main():
    st.set_page_config(page_title="survey page", layout="centered", initial_sidebar_state="collapsed")
    
    # Set background and text color
    st.markdown("""
        <style>
        .main {
            background-color: #b688e3;
            color: #333;
        }
        h1 {
            color: #5a5a87;
            
        }
        .stButton>button {
            background-color: #b688e3;
            color: white;
            width: 100%;
            height: 60px;
            font-size: 18px;
            border-radius: 10px;
        }
        .stSlider>div>div>div>div>div>div {
            color: #5a5a87;
        }
        .stSelectbox>div>div>div>div {

            color: #333;
        }
        </style>
        """, unsafe_allow_html=True)

    if 'user_data' not in st.session_state:
        st.session_state['user_data'] = None

    if not st.session_state['user_data']:
        user_data = show_survey()
        if user_data:
            st.session_state['user_data'] = user_data
            st.experimental_rerun()
    else:
        # Display result page
        st.title("Severity Prediction Result")
        st.write("### your condition based on your response seems to be:")

        # Box for severity result
        severity = predict_severity(st.session_state['user_data'])
        st.markdown(f"<div style='background-color:#b3d9ff;padding:20px;text-align:center;border-radius:10px;'><h1>{severity}</h1></div>", unsafe_allow_html=True)

        st.write("### Survey Responses given by you")
        # Display user data in a table format
        table_data = pd.DataFrame(list(st.session_state['user_data'].items()), columns=["Question", "Responses"])
        
        # Apply custom styles to make the table bold
        styled_table = table_data.style.set_properties(**{
            'text-align': 'left',
            'font-weight': 'bold',
            'background-color': '#b688e3',
            'border': '2px solid black'
        })
        
        st.write(styled_table.to_html(), unsafe_allow_html=True)

if __name__ == '__main__':
    main()
