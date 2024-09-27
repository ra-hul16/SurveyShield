// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup"
// })

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    
//     const values = [
//       req.body.name,
//       req.body.email,
//       req.body.password
//     ];
  
//     db.query(sql, [values], (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       return res.json(data);
//     })
// })

// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM login WHERE `email` = ? AND `password`= ?" ;
  
//     db.query(sql, [req.body.email,req.body.password], (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       if(data.length>0){
//         return res.json("Success");
//       }
//       else{
//         return res.json("Failed");
//       }
//     })
// })

// app.listen(8081, () =>{
//     console.log("listening");
// })

//org

// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup"
// })

// // Existing signup endpoint
// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    
//     const values = [
//       req.body.name,
//       req.body.email,
//       req.body.password
//     ];
  
//     db.query(sql, [values], (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       return res.json(data);
//     })
// })

// // Existing login endpoint
// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM login WHERE `email` = ? AND `password`= ?" ;
  
//     db.query(sql, [req.body.email,req.body.password], (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       if(data.length>0){
//         return res.json("Success");
//       }
//       else{
//         return res.json("Failed");
//       }
//     })
// })

// // New endpoint for resetting the password
// app.post('/reset-password', (req, res) => {
//     const sql = "UPDATE login SET `password` = ? WHERE `email` = ?";
    
//     const values = [
//       req.body.newPassword,
//       req.body.email
//     ];

//     db.query(sql, values, (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       if (data.affectedRows > 0) {
//         return res.json("Success");
//       } else {
//         return res.json("User not found");
//       }
//     });
// })

// app.listen(8081, () =>{
//     console.log("listening");
// })

//org2

// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken'); // For generating tokens

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup"
// });

// // Email configuration using nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use your email service
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password'
//   }
// });

// // Secret key for token generation
// const JWT_SECRET = 'your-secret-key'; // You should store this in an environment variable

// // Endpoint to request password reset
// app.post('/request-password-reset', (req, res) => {
//   const { email } = req.body;
  
//   const sql = "SELECT * FROM login WHERE `email` = ?";
//   db.query(sql, [email], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     if (data.length > 0) {
//       const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
      
//       // Generate reset link
//       const resetLink = `http://localhost:3000/reset-password/${token}`;

//       // Send email with reset link
//       const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Password Reset Request',
//         text: `Please click the following link to reset your password: ${resetLink}`
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           return res.json("Error sending email");
//         } else {
//           return res.json("Password reset email sent");
//         }
//       });
//     } else {
//       return res.json("User not found");
//     }
//   });
// });

// // Endpoint to reset password
// app.post('/reset-password/:token', (req, res) => {
//   const { token } = req.params;
//   const { newPassword } = req.body;

//   // Verify the token
//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.json("Invalid or expired token");
//     }

//     // Update password in the database
//     const sql = "UPDATE login SET `password` = ? WHERE `email` = ?";
//     db.query(sql, [newPassword, decoded.email], (err, data) => {
//       if (err) {
//         return res.json("Error updating password");
//       }
//       return res.json("Password updated successfully");
//     });
//   });
// });

// app.listen(8081, () => {
//   console.log("listening on port 8081");
// });

//-------

// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');
// const nodemailer = require('nodemailer');  // Import nodemailer for sending emails
// const crypto = require('crypto');  // Import crypto to generate random tokens

// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup"
// });

// // Existing signup endpoint
// app.post('/signup', (req, res) => {
//   const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  
//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.password
//   ];

//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     return res.json(data);
//   });
// });

// // Existing login endpoint
// app.post('/login', (req, res) => {
//   const sql = "SELECT * FROM login WHERE `email` = ? AND `password`= ?" ;

//   db.query(sql, [req.body.email,req.body.password], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     if(data.length > 0){
//       return res.json("Success");
//     }
//     else{
//       return res.json("Failed");
//     }
//   });
// });

// // New endpoint for requesting password reset
// app.post('/request-reset-password', (req, res) => {
//   const email = req.body.email;
  
//   // Generate a random token
//   const token = crypto.randomBytes(32).toString('hex');
  
//   // Set token expiration time (1 hour from now)
//   const expirationTime = new Date(Date.now() + 3600000);

//   // Save the token and expiration in the database
//   const sql = "UPDATE login SET `reset_token` = ?, `reset_token_expiration` = ? WHERE `email` = ?";
//   db.query(sql, [token, expirationTime, email], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     if (data.affectedRows > 0) {
//       // Send the email with reset link
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'your-email@gmail.com',  // Replace with your Gmail account
//           pass: 'your-app-password'  // Replace with your Gmail app password
//         }
//       });

//       const resetLink = `http://localhost:3000/reset-password/${token}`;
//       const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Password Reset Request',
//         text: `You requested a password reset. Please click on the following link to reset your password: ${resetLink}`
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//           return res.json("Error sending email");
//         } else {
//           console.log('Email sent: ' + info.response);
//           return res.json("Email sent");
//         }
//       });
//     } else {
//       return res.json("User not found");
//     }
//   });
// });

// // New endpoint to verify token and reset the password
// app.post('/reset-password/:token', (req, res) => {
//   const token = req.params.token;
//   const newPassword = req.body.newPassword;
  
//   // Check if token is valid and not expired
//   const sql = "SELECT * FROM login WHERE `reset_token` = ? AND `reset_token_expiration` > NOW()";
//   db.query(sql, [token], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     if (data.length > 0) {
//       // Update the password
//       const email = data[0].email;
//       const updateSql = "UPDATE login SET `password` = ?, `reset_token` = NULL, `reset_token_expiration` = NULL WHERE `email` = ?";
//       db.query(updateSql, [newPassword, email], (err, data) => {
//         if (err) {
//           return res.json("Error");
//         }
//         return res.json("Password updated successfully");
//       });
//     } else {
//       return res.json("Invalid or expired token");
//     }
//   });
// });

// app.listen(8081, () =>{
//   console.log("listening");
// });

//---------------------------


// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');
// const nodemailer = require('nodemailer');  // Added for email functionality
// const crypto = require('crypto');          // Added for generating reset tokens
// const bcrypt = require('bcrypt');          // Added for password hashing
// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup"
// })

// // Nodemailer transporter configuration for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',  // You can use any email service like Gmail, Outlook, etc.
//   auth: {
//     user: 'surveyshielders@gmail.com',  // Replace with your email
//     pass: 'zwxa irmc fqbl vmor'    // Replace with your email password
//   }
// });

// // Existing signup endpoint
// app.post('/signup', async (req, res) => {
//     const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);  // Added password hashing
//     const values = [
//       req.body.name,
//       req.body.email,
//       hashedPassword  // Store hashed password instead of plain text
//     ];
  
//     db.query(sql, [values], (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       return res.json(data);
//     })
// })

// // Existing login endpoint
// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM login WHERE email = ?" ;
  
//     db.query(sql, [req.body.email], async (err, data) => {
//       if (err) {
//         return res.json("Error");
//       }
//       if(data.length > 0){
//         const isValidPassword = await bcrypt.compare(req.body.password, data[0].password);  // Compare hashed passwords
//         if (isValidPassword) {
//           return res.json("Success");
//         } else {
//           return res.json("Failed");
//         }
//       } else {
//         return res.json("Failed");
//       }
//     })
// })

// // New endpoint for requesting password reset
// app.post('/request-password-reset', (req, res) => {
//     const email = req.body.email;
    
//     // Check if the user exists
//     const sql = "SELECT * FROM login WHERE email = ?";
//     db.query(sql, [email], (err, data) => {
//       if (err || data.length === 0) {
//         return res.json("User not found");
//       }

//       // Generate a random reset token
//       const resetToken = crypto.randomBytes(32).toString('hex');
//       const tokenExpiry = Date.now() + 3600000;  // Token valid for 1 hour

//       // Save the token and expiry in the database
//       const updateSql = "UPDATE login SET reset_token = ?, reset_token_expiry = ? WHERE email = ?";
//       db.query(updateSql, [resetToken, tokenExpiry, email], (err, data) => {
//         if (err) {
//           return res.json("Error");
//         }

//         // Send reset email
//         const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;  // Link for frontend reset password
//         const mailOptions = {
//           from: 'surveyshielders@gmail.com',
//           to: email,
//           subject: 'Password Reset Request',
//           text: `You requested a password reset. Click this link to reset your password: ${resetUrl}`
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             return res.json("Error sending email");
//           }
//           return res.json("Password reset email sent");
//         });
//       });
//     });
// });

// // New endpoint for verifying token and resetting the password
// app.post('/reset-password/:token', async (req, res) => {
//     const resetToken = req.params.token;
//     const newPassword = req.body.newPassword;

//     // Find the user with the matching reset token and check if it has expired
//     const sql = "SELECT * FROM login WHERE reset_token = ? AND reset_token_expiry > ?";
//     db.query(sql, [resetToken, Date.now()], async (err, data) => {
//       if (err || data.length === 0) {
//         return res.json("Invalid or expired token");
//       }

//       // Hash the new password and update the user
//       const hashedPassword = await bcrypt.hash(newPassword, 10);
//       const updateSql = "UPDATE login SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE reset_token = ?";
//       db.query(updateSql, [hashedPassword, resetToken], (err, data) => {
//         if (err) {
//           return res.json("Error updating password");
//         }
//         return res.json("Password updated successfully");
//       });
//     });
// });

// app.listen(8081, () =>{
//     console.log("listening");
// })


//-------------------------------


const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Add nodemailer for sending emails
const crypto = require('crypto'); // Add crypto for generating tokens
const app = express();


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});

// Existing signup endpoint
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    
    const values = [
      req.body.name,
      req.body.email,
      req.body.password
    ];
  
    db.query(sql, [values], (err, data) => {
      if (err) {
        return res.json("Error");
      }
      return res.json(data);
    })
})

// Existing login endpoint
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password= ?" ;
  
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
      if (err) {
        return res.json("Error");
      }
      if(data.length>0){
        return res.json("Success");
      }
      else{
        return res.json("Failed");
      }
    })
})

// New endpoint for sending password reset email
app.post('/forgot-password', (req, res) => {
    const email = req.body.email;
    const token = crypto.randomBytes(20).toString('hex');

    const sql = "UPDATE login SET reset_token = ? WHERE email = ?";
    
    db.query(sql, [token, email], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.affectedRows > 0) {
            // Set up nodemailer transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'surveyshielders@gmail.com', // Replace with your email
                    pass: 'zwxa irmc fqbl vmor' // Replace with your email password
                }
            });

            // Prepare email options
            const mailOptions = {
                from: 'surveyshielders@gmail.com', // Replace with your email
                to: email,
                subject: 'Password Reset Request',
                text: `You are receiving this email because you have requested the reset of a password. 
                Please click on the following link, or paste this into your browser to complete the process: 
                http://localhost:3000/reset-password/${token}`
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.json("Error sending email");
                }
                return res.json("Email sent successfully");
            });
        } else {
            return res.json("User not found");
        }
    });
});

// New endpoint for resetting the password using token
app.post('/reset-password', (req, res) => {
    const { token, newPassword } = req.body;
    const sql = "UPDATE login SET password = ?, reset_token = NULL WHERE reset_token = ?";

    db.query(sql, [newPassword, token], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.affectedRows > 0) {
            return res.json("Success");
        } else {
            return res.json("Invalid or expired token");
        }
    });
});


app.listen(8081, () =>{
    console.log("listening");
});

//org3







