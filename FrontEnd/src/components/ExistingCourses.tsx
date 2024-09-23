// import React from 'react';

// export const ExistingCourses: React.FC = () => {
//   const handleStartChat = () => {
//     window.location.href = '/chatbot';
//   };

//   return (
//     <div className="chatbot">
//       <h1 className="text-3xl text-center">CHAT BOT</h1>
//       <p className="text-bg text-center p-3">Chat with our AI Assistant</p>
//       <button className="chatbot-button" onClick={handleStartChat}>
//         Start Chat
//       </button>
//     </div>
//   );
// };

// import React from 'react';
// import './ExistingCourses.css'; // Import the ExistingCourses CSS


// export const ExistingCourses: React.FC = () => {
//   const handleStartChat = () => {
//     window.location.href = '/chatbot';
//   };

//   return (
//     <div className="chatbot">
//       <h1>CHAT BOT</h1>
//       <p>Chat with our AI Assistant</p>
//       <button className="chatbot-button" onClick={handleStartChat}>
//         Start Chat
//       </button>
//     </div>
//   );
// };

import React from 'react';
import './ExistingCourses.css'; // Import the ExistingCourses CSS
import '../App.css';

export const ExistingCourses: React.FC = () => {
  const handleStartChat = () => {
    window.location.href = '/chatbot';
  };

  return (
    <div className="chatbot">
      <h1>CHAT BOT</h1>
      <p>Chat with our AI Assistant</p>
      <button className="chatbot-button" onClick={handleStartChat}>
        Start Chat
      </button>
    </div>
  );
};

