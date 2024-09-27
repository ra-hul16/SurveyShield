// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Profile() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     dob: '',
//     phone: '',
//     address: '',
//     nationality: '',
//     gender: ''
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     // Fetch user data (this should ideally be done via an API call)
//     const storedUser = JSON.parse(localStorage.getItem('userProfile'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // Save the information in localStorage or via an API call to persist data
//     localStorage.setItem('userProfile', JSON.stringify(user));
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <div className="profile-container">
//       <h2>My Profile</h2>
//       <div className="profile-info">
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dob"
//             value={user.dob}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="phone"
//             value={user.phone}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={user.address}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Nationality:</label>
//           <input
//             type="text"
//             name="nationality"
//             value={user.nationality}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <input
//             type="text"
//             name="gender"
//             value={user.gender}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//           />
//         </div>
//       </div>
//       {isEditing ? (
//         <button onClick={handleSave}>Save</button>
//       ) : (
//         <button onClick={handleEdit}>Edit</button>
//       )}
//     </div>
//   );
// }

// export default Profile;

//--------------------------


import React, { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    nationality: '',
    gender: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Retrieve profile data from localStorage on component mount
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
    alert('Profile saved successfully!');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <div className="profile-field">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Date of Birth: </label>
        <input
          type="date"
          name="dateOfBirth"
          value={profile.dateOfBirth}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Phone Number: </label>
        <input
          type="text"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Address: </label>
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Nationality: </label>
        <input
          type="text"
          name="nationality"
          value={profile.nationality}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Gender: </label>
        <select
          name="gender"
          value={profile.gender}
          onChange={handleInputChange}
          disabled={!isEditing}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default Profile;

