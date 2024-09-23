// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import Chatbot from './Chatbot';  // Import the Chatbot component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} /> {/* Add the chatbot route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


