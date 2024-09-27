import React, { useState } from 'react';
import './SurveyPage.css';

export const SurveyPage: React.FC = () => {
  const [responses, setResponses] = useState<{ [key: number]: string }>({});

  const handleOptionChange = (questionId: number, option: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/surveys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ responses }),
      });
      if (response.ok) {
        alert('Survey submitted!');
      } else {
        alert('Error submitting survey');
      }
    } catch (error) {
      alert('Error submitting survey');
    }
  };

  return (
    <div className="survey-page">
      <h1 className="text-1xl text-center">Survey Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="survey-question">
          <h1 className="text-xl">Did the doctor pay attention to your complaints?</h1>
          <label>
            <input
              type="radio"
              name="question1"
              value="Yes"
              onChange={() => handleOptionChange(1, 'Yes')}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="No"
              onChange={() => handleOptionChange(1, 'No')}
            />
            No
          </label>
        </div>
        <div className="survey-question">
          <h1 className="text-xl">Did you spend the time you expected with the doctor?</h1>
          <label>
            <input
              type="radio"
              name="question2"
              value="Yes"
              onChange={() => handleOptionChange(2, 'Yes')}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="No"
              onChange={() => handleOptionChange(2, 'No')}
            />
            No
          </label>
        </div>
        <button type="submit" className="survey-button">Submit</button>
      </form>
    </div>
  );
};

//org but not used

//--------------------------

// SurveyPage.tsx
// import React, { useState } from 'react';
// import './SurveyPage.css'; // Add your styles here

// export const SurveyPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     gender: '',
//     symptoms: '',
//     painScale: '',
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
//     stressLevels: '',
//     sleepQuality: '',
//   });

//   const [severity, setSeverity] = useState<string | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Send data to backend for prediction
//     const response = await fetch('/api/predict', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     setSeverity(data.severity); // Assuming backend returns severity
//   };

//   return (
//     <div className="survey-page">
//       <h2>Survey Page</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Gender:
//           <select name="gender" value={formData.gender} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </label>

//         <label>
//           General Symptoms:
//           <select name="symptoms" value={formData.symptoms} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Fatigue">Fatigue</option>
//             <option value="Cough">Cough</option>
//             <option value="Fever">Fever</option>
//             <option value="Shortness of Breath">Shortness of Breath</option>
//           </select>
//         </label>

//         <label>
//           Pain Scale (0-10):
//           <input type="number" name="painScale" value={formData.painScale} onChange={handleInputChange} />
//         </label>

//         <label>
//           Symptom Duration:
//           <select name="symptomDuration" value={formData.symptomDuration} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Less than 2 days">Less than 2 days</option>
//             <option value="2-5 days">2-5 days</option>
//             <option value="More than 5 days">More than 5 days</option>
//           </select>
//         </label>

//         <label>
//           Onset:
//           <select name="onset" value={formData.onset} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Sudden">Sudden</option>
//             <option value="Gradual">Gradual</option>
//           </select>
//         </label>

//         <label>
//           Chronic Conditions:
//           <select name="chronicConditions" value={formData.chronicConditions} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="asthma">Asthma</option>
//             <option value="diabetes">Diabetes</option>
//             <option value="hypertension">Hypertension</option>
//           </select>
//         </label>

//         <label>
//           Allergies:
//           <select name="allergies" value={formData.allergies} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </label>

//         <label>
//           Medications:
//           <select name="medications" value={formData.medications} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </label>

//         <label>
//           Travel History:
//           <select name="travelHistory" value={formData.travelHistory} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </label>

//         <label>
//           Contact with Sick Individuals:
//           <select name="contactWithSick" value={formData.contactWithSick} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </label>

//         <label>
//           Smoking:
//           <select name="smoking" value={formData.smoking} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </label>

//         <label>
//           Alcohol Consumption:
//           <select name="alcoholConsumption" value={formData.alcoholConsumption} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="No">No</option>
//             <option value="Occasionally">Occasionally</option>
//             <option value="Regularly">Regularly</option>
//           </select>
//         </label>

//         <label>
//           Physical Activity:
//           <select name="physicalActivity" value={formData.physicalActivity} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="No">No</option>
//             <option value="Light">Light</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Intense">Intense</option>
//           </select>
//         </label>

//         <label>
//           Stress Levels (1-10):
//           <input type="number" name="stressLevels" value={formData.stressLevels} onChange={handleInputChange} />
//         </label>

//         <label>
//           Sleep Quality:
//           <select name="sleepQuality" value={formData.sleepQuality} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Excellent">Excellent</option>
//             <option value="Good">Good</option>
//             <option value="Fair">Fair</option>
//             <option value="Poor">Poor</option>
//           </select>
//         </label>

//         <button type="submit">Submit Survey</button>
//       </form>

//       {severity && <p>Predicted Condition: {severity}</p>}
//     </div>
//   );
// };

//------------------------------

// import React, { useState } from 'react';
// import './SurveyPage.css'; // Create CSS for SurveyPage styling

// export const SurveyPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     gender: '',
//     symptoms: '',
//     painScale: 0,
//     onset: '',
//     duration: '',
//     chronicConditions: '',
//     allergies: '',
//     medications: '',
//     travelHistory: '',
//     contactWithSick: '',
//     smoking: '',
//     alcohol: '',
//     physicalActivity: '',
//     stressLevels: 0,
//     sleepQuality: '',
//   });

//   const [result, setResult] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8081/predict-severity', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       setResult(data.severity); // Set the severity result from the backend
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="survey-page">
//       <h2>Health Survey</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Gender:
//           <select name="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </label>

//         <label>
//           Symptoms:
//           <select name="symptoms" value={formData.symptoms} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="Fatigue">Fatigue</option>
//             <option value="Cough">Cough</option>
//             <option value="Fever">Fever</option>
//             <option value="Shortness of Breath">Shortness of Breath</option>
//           </select>
//         </label>

//         <label>
//           Pain Scale (0 to 10):
//           <input
//             type="number"
//             name="painScale"
//             value={formData.painScale}
//             onChange={handleChange}
//             min="0"
//             max="10"
//             required
//           />
//         </label>

//         <label>
//           Symptom Duration:
//           <select name="duration" value={formData.duration} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="Less than 2 days">Less than 2 days</option>
//             <option value="2-5 days">2-5 days</option>
//             <option value="More than 5 days">More than 5 days</option>
//           </select>
//         </label>

//         <label>
//           Chronic Conditions:
//           <input
//             type="text"
//             name="chronicConditions"
//             value={formData.chronicConditions}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         {/* Additional fields for other survey data */}
        
//         <button type="submit">Submit Survey</button>
//       </form>

//       {result && (
//         <div className="result">
//           <h3>Survey Result: {result}</h3>
//         </div>
//       )}
//     </div>
//   );
// };


