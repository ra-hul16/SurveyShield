// import React from 'react';
// import { Button } from './Button.tsx';

// export const Navbar: React.FC = () => {
//   const handleButtonClick = (url: string) => {
//     window.location.href = url;
//   };

//   return (
//     <nav className="bg-green-700 p-4 text-white flex justify-between items-center">
//       <div className="logo-title">
//         <h2 className="text-2xl">RAJ & RAHUL Tech Solutions Ltd</h2>
//       </div>
//       <div className="flex space-x-3">
//         <Button onClick={() => handleButtonClick("")}>ABOUT</Button>
//         <Button onClick={() => handleButtonClick("")}>CALL CARE</Button>
//         <Button onClick={() => handleButtonClick("")}>LOGOUT</Button>
//       </div>
//     </nav>
//   );
// };

// import React from 'react';
// import './Navbar.css'; // Import the Navbar CSS
// import { Button } from './Button.tsx';

// export const Navbar: React.FC = () => {
//   const handleButtonClick = (url: string) => {
//     window.location.href = url;
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo-title">
//         <h2>RAJ & RAHUL Tech Solutions Ltd</h2>
//       </div>
//       <div className="navbar-buttons">
//         <Button onClick={() => handleButtonClick("")}>ABOUT</Button>
//         <Button onClick={() => handleButtonClick("")}>CALL CARE</Button>
//         <Button onClick={() => handleButtonClick("")}>LOGOUT</Button>
//       </div>
//     </nav>
//   );
// };

// import React from 'react';
// import './Navbar.css'; // Import the Navbar CSS
// import { Button } from './Button.tsx';

// export const Navbar: React.FC = () => {
//   const handleButtonClick = (url: string) => {
//     if (url === "logout") {
//       // Perform logout actions
//       localStorage.removeItem('authToken'); // Example: remove auth token
//       // You can remove other authentication-related data as needed

//       window.location.href = '/Login'; // Redirect to the login page
//     } else {
//       window.location.href = url;
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo-title">
//         <h2>RAJ & RAHUL Tech Solutions Ltd</h2>
//       </div>
//       <div className="navbar-buttons">
//         <Button onClick={() => handleButtonClick("/about")}>ABOUT</Button>
//         <Button onClick={() => handleButtonClick("/call-care")}>CALL CARE</Button>
//         <Button onClick={() => handleButtonClick("logout")}>LOGOUT</Button>
//       </div>
//     </nav>
//   );
// };

// import React from 'react';
// import './Navbar.css'; // Import the Navbar CSS
// import { Button } from './Button.tsx';
// import { useNavigate } from 'react-router-dom';

// export const Navbar: React.FC = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = (url: string) => {
//     if (url === "logout") {
//       // Perform logout actions
//       localStorage.removeItem('isAuthenticated'); // Clear the authentication status

//       // Redirect to the login page using navigate
//       navigate('/'); // '/' points to the Login page as per your routing setup
//     } else {
//       navigate(url);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo-title">
//         <h2>RAJ & RAHUL Tech Solutions Ltd</h2>
//       </div>
//       <div className="navbar-buttons">
//         <Button onClick={() => handleButtonClick("/about")}>ABOUT</Button>
//         <Button onClick={() => handleButtonClick("/call-care")}>CALL CARE</Button>
//         <Button onClick={() => handleButtonClick("logout")}>LOGOUT</Button>
//       </div>
//     </nav>
//   );
// };

// import React, { useState } from 'react';
// import './Navbar.css'; // Import the Navbar CSS
// import { Button } from './Button.tsx';
// import { useNavigate } from 'react-router-dom';
// import profileImg from './profile.jpg';

// export const Navbar: React.FC = () => {
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const navigate = useNavigate();

//   const handleButtonClick = (url: string) => {
//     if (url === "logout") {
//       // Perform logout actions
//       localStorage.removeItem('isAuthenticated'); // Clear the authentication status

//       // Redirect to the login page using navigate
//       navigate('/'); // '/' points to the Login page as per your routing setup
//     } else {
//       navigate(url);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-center">
//         <Button onClick={() => handleButtonClick("/home")}>Home</Button>
//         <Button onClick={() => handleButtonClick("/about")}>About</Button>
//         <Button onClick={() => handleButtonClick("/contact")}>Contact</Button>
//       </div>
//       <div className="profile-menu">
//         <button 
//           className="profile-icon"
//           onClick={() => setShowProfileMenu(prev => !prev)}
//         >
//           <img src={profileImg} alt="Profile" /> {/* Replace with actual profile icon path */}
//         </button>
//         {showProfileMenu && (
//           <div className="profile-dropdown">
//             <button onClick={() => handleButtonClick("/profile")}>My Profile</button>
//             <button onClick={() => handleButtonClick("logout")}>Logout</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// import React, { useState } from 'react';
// import './Navbar.css'; // Import the Navbar CSS
// import { Button } from './Button.tsx'; // Make sure you have this component
// import { useNavigate } from 'react-router-dom';

// export const Navbar: React.FC = () => {
//   const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleButtonClick = (url: string) => {
//     if (url === "logout") {
//       // Perform logout actions
//       localStorage.removeItem('isAuthenticated'); // Clear the authentication status
//       navigate('/'); // Redirect to the login page
//     } else {
//       navigate(url);
//     }
//   };

//   const toggleProfileMenu = () => {
//     setProfileMenuOpen(!isProfileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-center">
//         <div className="navbar-buttons">
//           <Button onClick={() => handleButtonClick("/home")}>Home</Button>
//           <Button onClick={() => handleButtonClick("/about")}>About</Button>
//           <Button onClick={() => handleButtonClick("/contact")}>Contact</Button>
//         </div>
//       </div>
//       <div className="profile-menu">
//         <div className="profile-icon" onClick={toggleProfileMenu}>
//           <img src='./profile.jpg' alt="Profile" />
//         </div>
//         {isProfileMenuOpen && (
//           <div className="profile-dropdown">
//             <button onClick={() => handleButtonClick("/profile")}>My Profile</button>
//             <button onClick={() => handleButtonClick("logout")}>Logout</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// import React, { useState } from 'react';
// import './Navbar.css';
// import { Button } from './Button.tsx';
// import { useNavigate } from 'react-router-dom';
// import profileImg from './profile.jpg'; // Import the profile image

// export const Navbar: React.FC = () => {
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const navigate = useNavigate();

//   const handleButtonClick = (url: string) => {
//     if (url === "logout") {
//       localStorage.removeItem('isAuthenticated');
//       navigate('/');
//     } else {
//       navigate(url);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-center">
//         <Button onClick={() => handleButtonClick("")}>Home</Button>
//         <Button onClick={() => handleButtonClick("/about")}>About</Button>
//         <Button onClick={() => handleButtonClick("/contact")}>Contact</Button>
//       </div>
//       <div className="profile-container">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="profile-icon"
//           onClick={() => setShowProfileMenu(!showProfileMenu)}
//         />
//         <div className={`profile-menu ${showProfileMenu ? 'visible' : ''}`}>
//           <a href="/profile" onClick={() => setShowProfileMenu(false)}>My Profile</a>
//           <a href="/" onClick={() => handleButtonClick("logout")}>Logout</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import profileImg from './profile.jpg';

export const Navbar: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (url: string) => {
    if (url === "logout") {
      localStorage.removeItem('isAuthenticated');
      navigate('/');
    } else {
      navigate(url);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="navbar-link" onClick={() => handleButtonClick("")}>Home</span>
        <span className="navbar-link" onClick={() => handleButtonClick("/about")}>About</span>
        <span className="navbar-link" onClick={() => handleButtonClick("/contact")}>Contact</span>
      </div>
      <div className="profile-container">
        <img
          src={profileImg}
          alt="Profile"
          className="profile-icon"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        />
        <div className={`profile-menu ${showProfileMenu ? 'visible' : ''}`}>
          <a href="/profile" onClick={() => setShowProfileMenu(false)}>My Profile</a>
          <a href="/" onClick={() => handleButtonClick("logout")}>Logout</a>
        </div>
      </div>
    </nav>
  );
};




