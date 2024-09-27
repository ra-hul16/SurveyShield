// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ResetPassword() {
//     const { token } = useParams();
//     const [newPassword, setNewPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post(`http://localhost:8081/reset-password/${token}`, { newPassword })
//             .then(res => {
//                 if (res.data === 'Password updated successfully') {
//                     setMessage('Password updated successfully!');
//                     navigate('/');
//                 } else {
//                     setMessage('Error updating password');
//                 }
//             })
//             .catch(err => console.log(err));
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Reset Password</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="newPassword"><strong>New Password</strong></label>
//                         <input type="password" placeholder="Enter new password" className="form-control rounded-0"
//                             onChange={(e) => setNewPassword(e.target.value)} required />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">Reset Password</button>
//                 </form>
//                 {message && <p className='text-danger'>{message}</p>}
//             </div>
//         </div>
//     );
// }

// export default ResetPassword;

//-------------------------------------------


import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/reset-password', { token, newPassword })
            .then(res => {
                setMessage(res.data);
                if (res.data === 'Success') {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="newPassword"><strong>New Password</strong></label>
                        <input type="password" placeholder="Enter new password" className="form-control rounded-0"
                            onChange={(e) => setNewPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Reset Password</button>
                </form>
                {message && <p className='text-danger'>{message}</p>}
            </div>
        </div>
    );
}

export default ResetPassword;

