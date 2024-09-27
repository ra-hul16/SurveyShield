// import React from 'react';

// export const NewCourses: React.FC = () => {
//   const handleStartSurvey = () => {
//     window.location.href = '/survey';
//   };

//   return (
//     <div className="survey">
//       <h2 className="text-3xl text-center">SURVEY PAGE</h2>
//       <p className="text-bg text-center p-3">Click the button below to start the survey</p>
//       <button className="survey-button" onClick={handleStartSurvey}>
//         Start Survey
//       </button>
//     </div>
//   );
// };

//-------------------------

// import React from 'react';
// import './NewCourses.css'; // Import the NewCourses CSS
// import '../App.css';

// export const NewCourses: React.FC = () => {
//   const handleStartSurvey = () => {
//     window.location.href = '/survey';
//   };

//   return (
//     <div className="survey">
//       <h2>SURVEY PAGE</h2>
//       <p>Click the button below to start the survey</p>
//       <button className="survey-button" onClick={handleStartSurvey}>
//         Start Survey
//       </button>
//     </div>
//   );
// };

//-----------------------------

import React from 'react';
import './NewCourses.css'; // Import the NewCourses CSS
import '../App.css';

export const NewCourses: React.FC = () => {
  const handleStartSurvey = () => {
    window.location.href = '/survey';
  };

  return (
    <div className="survey">
      <h2>SURVEY PAGE</h2>
      <p>Click the button below to start the survey</p>
      <button className="survey-button" onClick={handleStartSurvey}>
        Start Survey
      </button>
    </div>
  );
};

//org

//--------------

// import React, { useState } from 'react';
// import './NewCourses.css'; // Import the NewCourses CSS
// import '../App.css';
// import axios from 'axios'; // For submitting data to the backend

// export const NewCourses: React.FC = () => {
//   const [surveyData, setSurveyData] = useState({
//     gender: '',
//     generalSymptoms: '',
//     painScale: 0,
//     symptomDuration: '',
//     onset: '',
//     chronicConditions: '',
//     allergies: '',
//     medications: '',
//     travelHistory: '',
//     contactWithSick: '',
//     smoking: '',
//     alcoholConsumption: '',
//     physicalActivity: '',
//     stressLevels: 0,
//     sleepQuality: '',
//   });

//   const [result, setResult] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setSurveyData({ ...surveyData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8081/predict-severity', surveyData); // Backend endpoint to handle the prediction
//       setResult(response.data.severity); // The predicted severity (mild, moderate, severe)
//     } catch (error) {
//       console.error('Error submitting survey:', error);
//     }
//   };

//   return (
//     <div className="survey">
//       <h2>SURVEY PAGE</h2>
//       <p>Answer the questions below and submit to classify the condition</p>

//       <form onSubmit={handleSubmit}>
//         <label>Gender:</label>
//         <select name="gender" value={surveyData.gender} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>

//         <label>General Symptoms:</label>
//         <select name="generalSymptoms" value={surveyData.generalSymptoms} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Fatigue">Fatigue</option>
//           <option value="Cough">Cough</option>
//           <option value="Fever">Fever</option>
//           <option value="Shortness of Breath">Shortness of Breath</option>
//         </select>

//         <label>Pain Scale (0-10):</label>
//         <input type="number" name="painScale" min="0" max="10" value={surveyData.painScale} onChange={handleChange} />

//         <label>Symptom Duration:</label>
//         <select name="symptomDuration" value={surveyData.symptomDuration} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Less than 2 days">Less than 2 days</option>
//           <option value="2-5 days">2-5 days</option>
//           <option value="More than 5 days">More than 5 days</option>
//         </select>

//         <label>Onset:</label>
//         <select name="onset" value={surveyData.onset} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Sudden">Sudden</option>
//           <option value="Gradual">Gradual</option>
//         </select>

//         <label>Chronic Conditions:</label>
//         <input type="text" name="chronicConditions" value={surveyData.chronicConditions} onChange={handleChange} />

//         <label>Allergies:</label>
//         <select name="allergies" value={surveyData.allergies} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <label>Medications:</label>
//         <select name="medications" value={surveyData.medications} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <label>Travel History:</label>
//         <select name="travelHistory" value={surveyData.travelHistory} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <label>Contact with Sick Individuals:</label>
//         <select name="contactWithSick" value={surveyData.contactWithSick} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <label>Smoking:</label>
//         <select name="smoking" value={surveyData.smoking} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <label>Alcohol Consumption:</label>
//         <select name="alcoholConsumption" value={surveyData.alcoholConsumption} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="No">No</option>
//           <option value="Occasionally">Occasionally</option>
//           <option value="Regularly">Regularly</option>
//         </select>

//         <label>Physical Activity:</label>
//         <select name="physicalActivity" value={surveyData.physicalActivity} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="No">No</option>
//           <option value="Light">Light</option>
//           <option value="Moderate">Moderate</option>
//           <option value="Intense">Intense</option>
//         </select>

//         <label>Stress Levels (0-10):</label>
//         <input type="number" name="stressLevels" min="0" max="10" value={surveyData.stressLevels} onChange={handleChange} />

//         <label>Sleep Quality:</label>
//         <select name="sleepQuality" value={surveyData.sleepQuality} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Excellent">Excellent</option>
//           <option value="Good">Good</option>
//           <option value="Fair">Fair</option>
//           <option value="Poor">Poor</option>
//         </select>

//         <button type="submit" className="survey-button">Submit Survey</button>
//       </form>

//       {result && <p>Predicted Severity: {result}</p>}
//     </div>
//   );
// };

//questions displayed on the main page itself

//------------------------

// import React, { useState } from 'react';
// import './NewCourses.css'; // Import the NewCourses CSS
// import '../App.css';

// export const NewCourses: React.FC = () => {
//   const [surveyData, setSurveyData] = useState({
//     gender: '',
//     symptoms: '',
//     painScale: 0,
//     onset: '',
//     duration: '',
//     allergies: '',
//     chronic: '',
//     medication: '',
//     travelHistory: '',
//     contact: '',
//     smoking: '',
//     alcohol: '',
//     physical: '',
//     stress: 0,
//     sleep: '',
//   });

//   const [result, setResult] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setSurveyData({
//       ...surveyData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8081/submit-survey', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(surveyData),
//       });

//       const data = await response.json();
//       setResult(data.severity);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="survey">
//       <h2>SURVEY PAGE</h2>
//       <p>Fill out the survey below to assess your condition</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Gender:
//           <select name="gender" value={surveyData.gender} onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </label>
//         <label>
//           General Symptoms:
//           <select name="symptoms" value={surveyData.symptoms} onChange={handleChange}>
//             <option value="">Select Symptom</option>
//             <option value="Fatigue">Fatigue</option>
//             <option value="Cough">Cough</option>
//             <option value="Fever">Fever</option>
//             <option value="Shortness of Breath">Shortness of Breath</option>
//           </select>
//         </label>
//         <label>
//           Pain Scale (0-10):
//           <input type="number" name="painScale" value={surveyData.painScale} onChange={handleChange} min="0" max="10" />
//         </label>
//         <label>
//           Onset:
//           <select name="onset" value={surveyData.onset} onChange={handleChange}>
//             <option value="">Select Onset</option>
//             <option value="Sudden">Sudden</option>
//             <option value="Gradual">Gradual</option>
//           </select>
//         </label>
//         <label>
//           Symptom Duration:
//           <select name="duration" value={surveyData.duration} onChange={handleChange}>
//             <option value="">Select Duration</option>
//             <option value="Less than 2 days">Less than 2 days</option>
//             <option value="2-5 days">2-5 days</option>
//             <option value="More than 5 days">More than 5 days</option>
//           </select>
//         </label>
//         {/* Add other questions similarly */}

//         <button type="submit" className="survey-button">Submit Survey</button>
//       </form>

//       {result && (
//         <div className="result">
//           <h3>Survey Result: {result}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

//--------------------------------

// import React from 'react';
// import './NewCourses.css'; // Import the NewCourses CSS
// import '../App.css';
// import { useNavigate } from 'react-router-dom';

// export const NewCourses: React.FC = () => {
//   const navigate = useNavigate();

//   const handleStartSurvey = () => {
//     // Navigate to the survey page
//     navigate('/survey');
//   };

//   return (
//     <div className="survey">
//       <h2>SURVEY PAGE</h2>
//       <p>Click the button below to start the survey</p>
//       <button className="survey-button" onClick={handleStartSurvey}>
//         Start Survey
//       </button>
//     </div>
//   );
// };





