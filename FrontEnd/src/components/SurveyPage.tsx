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
