import React, { useState, useEffect } from 'react';

export const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    nationality: '',
    gender: '',
  });
  
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profileData') || '{}');
    setProfileData({
      name: storedProfile.name || 'User', // Default name in case of no data
      email: storedProfile.email || 'user@example.com',
      dateOfBirth: storedProfile.dateOfBirth || '',
      phoneNumber: storedProfile.phoneNumber || '',
      address: storedProfile.address || '',
      nationality: storedProfile.nationality || '',
      gender: storedProfile.gender || '',
    });
  }, []);

  // Handle saving data to localStorage
  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setIsEditing(false); // Stop editing after saving
  };

  // Handle input changes for form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>My Profile</h2>
      {isEditing ? (
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            disabled
          />
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleChange}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={profileData.phoneNumber}
            onChange={handleChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleChange}
          />
          <label>Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={profileData.nationality}
            onChange={handleChange}
          />
          <label>Gender:</label>
          <select name="gender" value={profileData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Date of Birth: {profileData.dateOfBirth}</p>
          <p>Phone Number: {profileData.phoneNumber}</p>
          <p>Address: {profileData.address}</p>
          <p>Nationality: {profileData.nationality}</p>
          <p>Gender: {profileData.gender}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
