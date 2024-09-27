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

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';
// import Chatbot from './Chatbot';  // Import the Chatbot component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} /> {/* Add the chatbot route */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//org

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';
// import Chatbot from './Chatbot';  // Import the Chatbot component
// import ForgotPassword from './ForgotPassword';  // Import the ForgotPassword component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} /> {/* Add the chatbot route */}
//         <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the forgot password route */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//org2

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';
// import Chatbot from './Chatbot';
// import ForgotPassword from './ForgotPassword';
// import ResetPassword from './ResetPassword';  // Import the new component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Route for forgot password */}
//         <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* Route for reset password with token */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//--------------


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';
// import Chatbot from './Chatbot';
// import ForgotPassword from './ForgotPassword';
// import ResetPassword from './ResetPassword';  // Import ResetPassword component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />  {/* Add reset password route */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


//-------------------------

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';
// import Chatbot from './Chatbot';  // Import the Chatbot component
// import ForgotPassword from './ForgotPassword';  // Import the ForgotPassword component
// import ResetPassword from './ResetPassword';  // Import the new ResetPassword component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} /> {/* Add the chatbot route */}
//         <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the forgot password route */}
//         <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* New Reset Password route */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


//------------------------

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import Chatbot from './Chatbot';  // Import the Chatbot component
import ForgotPassword from './ForgotPassword';  // Import the ForgotPassword component
import ResetPassword from './ResetPassword'; // Import the ResetPassword component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/chatbot" element={<ProtectedRoute element={<Chatbot />} />} /> {/* Add the chatbot route */}
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the forgot password route */}
        <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* Add the reset password route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//org3






