// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ForgotPassword() {
//     const [email, setEmail] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:8081/reset-password', { email, newPassword })
//             .then(res => {
//                 if (res.data === 'Success') {
//                     setMessage('Password updated successfully!');
//                     navigate('/');
//                 } else {
//                     setMessage('User not found');
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
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="email" placeholder="Enter your registered email" className="form-control rounded-0"
//                             onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
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

// export default ForgotPassword;

//org

// import React, { useState } from 'react';
// import axios from 'axios';

// function ForgotPassword() {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:8081/request-password-reset', { email })
//             .then(res => {
//                 setMessage(res.data);
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Forgot Password</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input
//                             type="email"
//                             placeholder="Enter your registered email"
//                             className="form-control rounded-0"
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">Request Password Reset</button>
//                 </form>
//                 {message && <p>{message}</p>}
//             </div>
//         </div>
//     );
// }

// export default ForgotPassword;


//---------------

// import React, { useState } from 'react';
// import axios from 'axios';

// function ForgotPassword() {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:8081/request-reset-password', { email })
//             .then(res => {
//                 if (res.data === 'Email sent') {
//                     setMessage('Password reset email has been sent to your email.');
//                 } else if (res.data === 'User not found') {
//                     setMessage('User with this email not found.');
//                 } else {
//                     setMessage('Error sending email.');
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Forgot Password</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="email" placeholder="Enter your registered email" className="form-control rounded-0"
//                             onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">Send Reset Link</button>
//                 </form>
//                 {message && <p className="text-danger">{message}</p>}
//             </div>
//         </div>
//     );
// }

// export default ForgotPassword;

//-------------------------


// import React, { useState } from 'react';
// import axios from 'axios';

// function ForgotPassword() {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:8081/request-password-reset', { email })
//             .then(res => {
//                 setMessage(res.data);
//             })
//             .catch(err => console.log(err));
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Forgot Password</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="email" placeholder="Enter your registered email" className="form-control rounded-0"
//                             onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">Send Reset Link</button>
//                 </form>
//                 {message && <p className='text-danger'>{message}</p>}
//             </div>
//         </div>
//     );
// }

// export default ForgotPassword;

//-----------------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/forgot-password', { email })
            .then(res => {
                setMessage(res.data);
                if (res.data === 'Email sent successfully') {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter your registered email" className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Send Reset Link</button>
                </form>
                {message && <p className='text-danger'>{message}</p>}
            </div>
        </div>
    );
}

export default ForgotPassword;

//org2



