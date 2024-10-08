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


