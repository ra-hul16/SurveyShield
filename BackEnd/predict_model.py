import sys
import json
import pandas as pd
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
import numpy as np

# Load the user data from command line argument
user_data = json.loads(sys.argv[1])

# Load the trained model (ensure it's in the same directory or provide correct path)
model = tf.keras.models.load_model('model.h5')

# Prepare the data as required (the same preprocessing as during model training)
# Apply necessary mappings, scaling, and transformations here

# Example for gender mapping and other mappings:
user_data['Gender'] = 1 if user_data['gender'] == 'Male' else 0
user_data['General Symptoms'] = ...  # Apply symptom mapping
# Continue applying mappings for other fields...

# Convert the user data to a DataFrame
df = pd.DataFrame([user_data])

# Normalize data
scaler = StandardScaler()
df = scaler.fit_transform(df)

# Predict severity
prediction = model.predict(df)
severity_class = np.argmax(prediction, axis=1)

# Mapping the predicted label to severity
severity_mapping = {0: 'Mild', 1: 'Moderate', 2: 'Severe'}
severity = severity_mapping[severity_class[0]]

# Output the result
print(severity)
