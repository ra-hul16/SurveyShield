// Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginValidation from './LoginValidation';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (LoginValidation(email, password)) {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginValidation';
// import LoginValidation from './LoginValidation';
// import './Login.css'; // Import the CSS file
// import axios from 'axios';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (LoginValidation(email, password)) {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//         <p>You agree to our terms and policies</p>
//         <a href="/signup">Create Account</a>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from 'react';
// import {Link, useNavigate} from 'react-router-dom'
// import './LoginValidation';
// import Validation from './LoginValidation';
// import axios from 'axios';

// function Login() {
//     const [values, setValues]=useState({
//         email:'',
//         password:''
//     })
//     const navigate=useNavigate();
//     const [errors, setErrors] = useState({})
//     const handleInput=(event) => {
//         setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
//     }

//     const handleSubmit=(event) => {
//         event.preventDefault();
//         setErrors(Validation(values));
//         if(errors.email ==="" && errors.password===""){
//           axios.post('http://localhost:8081/login', values)
//           .then(res => {
//             if(res.data==="Success"){
//               navigate('/home');
//             }
//             else{
//               alert("No record existed");
//             }
//           })
//           .catch(err => console.log(err));
//         }
//     }
//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//       <h2>Sign-in</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//                 <label htmlFor="email"><strong>Email</strong></label>
//                 <input type="email" placeholder="Enter Email" name='email'
//                 onChange={handleInput} className="form-control rounded-0"/>
//                 {errors.email && <span className='text-danger'> {errors.email}</span>}
//           </div>
//           <div className="mb-3">
//                 <label htmlFor="password"><strong>Password</strong></label>
//                 <input type="password" placeholder="Enter Password" name='password'
//                 onChange={handleInput} className="form-control rounded-0"/>
//                 {errors.password && <span className='text-danger'> {errors.password}</span>}
//           </div>
//           <button type='submit' className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
//           <p>You agree to our terms and policies</p>
//           <Link to='/signup' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginValidation';
// import Validation from './LoginValidation';
// import axios from 'axios';

// function Login() {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate();
//     const [errors, setErrors] = useState({});

//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(Validation(values));
//         if (errors.email === "" && errors.password === "") {
//             axios.post('http://localhost:8081/login', values)
//                 .then(res => {
//                     if (res.data === "Success") {
//                         localStorage.setItem('isAuthenticated', 'true');
//                         navigate('/home');
//                     } else {
//                         alert("No record existed");
//                     }
//                 })
//                 .catch(err => console.log(err));
//         }
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Sign-in</h2>
//                 <form action="" onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="email" placeholder="Enter Email" name='email'
//                             onChange={handleInput} className="form-control rounded-0" />
//                         {errors.email && <span className='text-danger'> {errors.email}</span>}
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="password" placeholder="Enter Password" name='password'
//                             onChange={handleInput} className="form-control rounded-0" />
//                         {errors.password && <span className='text-danger'> {errors.password}</span>}
//                     </div>
//                     <button type='submit' className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
//                     {/* <p>You agree to our terms and policies</p> */}
//                     <Link to='/signup' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;

//org

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginValidation';
// import Validation from './LoginValidation';
// import axios from 'axios';

// function Login() {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate();
//     const [errors, setErrors] = useState({});

//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(Validation(values));
//         if (errors.email === "" && errors.password === "") {
//             axios.post('http://localhost:8081/login', values)
//                 .then(res => {
//                     if (res.data === "Success") {
//                         localStorage.setItem('isAuthenticated', 'true');
//                         navigate('/home');
//                     } else {
//                         alert("No record existed");
//                     }
//                 })
//                 .catch(err => console.log(err));
//         }
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Sign-in</h2>
//                 <form action="" onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="email" placeholder="Enter Email" name='email'
//                             onChange={handleInput} className="form-control rounded-0" />
//                         {errors.email && <span className='text-danger'> {errors.email}</span>}
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="password" placeholder="Enter Password" name='password'
//                             onChange={handleInput} className="form-control rounded-0" />
//                         {errors.password && <span className='text-danger'> {errors.password}</span>}
//                     </div>
//                     <button type='submit' className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
//                     <Link to='/signup' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
//                 </form>
//                 {/* Adding "Forgot Password" link */}
//                 <Link to='/forgot-password' className="text-decoration-none">Forgot Password?</Link>
//             </div>
//         </div>
//     );
// }

// export default Login;

//org2-------------------------


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginValidation';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        localStorage.setItem('isAuthenticated', 'true');
                        // Store user profile in localStorage for use in Profile
                        localStorage.setItem('userProfile', JSON.stringify({
                            name: 'User Name', // Replace with actual data from response
                            email: values.email
                        }));
                        navigate('/home');
                    } else {
                        alert("No record existed");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-in</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email'
                            onChange={handleInput} className="form-control rounded-0" />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password'
                            onChange={handleInput} className="form-control rounded-0" />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100"><strong>Log in</strong></button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    <Link to="/forgot-password" className="text-decoration-none">
                        <p className="text-center mt-3">Forget Password?</p>
                    </Link> {/* Added Forget Password back */}
                </form>
            </div>
        </div>
    );
}

export default Login;









