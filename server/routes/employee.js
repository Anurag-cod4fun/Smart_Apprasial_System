
const router = require("express").Router();
const { Employee } = require("../models/employee");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "Gmail", // Replace with your email service provider (e.g., Gmail)
	auth: {
	  user: "dyanixdhawale@gmail.com", // Replace with your email
	  pass: "pkje icqw ralm usog", // Replace with your email password
	},
  });
// Function to generate a random password
function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

router.post("/", async (req, res) => {
  const { name, college, department, designation, email, mobile } = req.body;

  try {
    // Generate a random password
    const password = generateRandomPassword(10);

    // Save the employee with the random password
    const employee = new Employee({
      name,
      college,
      department,
      designation,
      email,
      mobile,
      password, // Save the random password
    });
    await employee.save();

    // Send an email with the random password
    const mailOptions = {
		from: "dyanixdhawale@gmail.com",
		to: email,
		subject: "Your New Employee Account",
		html: `
		<!DOCTYPE html>
		<html lang="en-US">
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Your New Employee Account</title>
		  <style>
			/* Add your CSS styles here */
			body {
			  font-family: 'Arial', sans-serif;
			  background-color: #f4f7f6;
			  margin: 0;
			  padding: 0;
			}
			.container {
			  max-width: 600px;
			  margin: 0 auto;
			  padding: 20px;
			  border: 1px solid #e1e1e1;
			  border-radius: 5px;
			  background-color: #fff;
			  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
			}
			h1 {
			  color: #5a9e5e;
			  margin: 0;
			}
			p {
			  color: #555;
			  margin-bottom: 20px;
			}
			ul {
			  list-style-type: none;
			  padding: 0;
			}
			ul li {
			  margin-bottom: 5px;
			}
			.button {
			  background-color: #5a9e5e;
			  color: #fff;
			  text-decoration: none;
			  padding: 10px 20px;
			  border-radius: 5px;
			  display: inline-block;
			}
		  </style>
		</head>
		<body>
		  <div class="container">
			<h1>Your New Employee Account</h1>
			<p>Hello ${name},</p>
			<p>Your new employee account has been created with the following credentials:</p>
			<ul>
			  <li>Email: ${email}</li>
			  <li>Password: ${password}</li>
			</ul>
			<p>Please change your password after logging in.</p>
			<a href="http://localhost:3000/ResetPassword" class="button">Change Password</a>
		  </div>
		</body>
		</html>
		
		`,
	  };
	  
	  // Rest of your code remains the same
	  

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Employee added successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
