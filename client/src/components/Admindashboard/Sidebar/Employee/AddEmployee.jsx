
import React, { useState } from 'react';
import axios from "axios";
import "./Employee.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!name) {
      toast.error('Please enter your name');
      return;
    }

    if (!college) {
      toast.error('Please select your college');
      return;
    }

    if (!department) {
      toast.error('Please select your department');
      return;
    }

    if (!designation) {
      toast.error('Please enter your designation');
      return;
    }

    if (!email) {
      toast.error('Please enter your email');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!mobile) {
      toast.error('Please enter your mobile number');
      return;
    } else if (!/^\d{10}$/.test(mobile)) {
      toast.error('Mobile number must be a 10 digit number');
      return;
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/api/employee", {
          name,
          college,
          department,
          designation,
          email,
          mobile,
        });

        // handle the success response       
        toast.success("Employee Added successfully");
        setName('');
        setCollege('');
        setDepartment('');
        setDesignation('');
        setEmail('');
        setMobile('');

      } catch (error) {
        // handle the error response
        // alert(error.response.data.message);
        toast.error("An error occurred while adding the employee. Please try again later .");

      }
    }
  };

  return (
    <div>
      <div className="cardE">
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="department-wrapper">
            <label htmlFor="college" className="department-label">College:</label>
            <select id="college" value={college} onChange={handleCollegeChange} className="department-select">
              <option value="">Select college</option>
              <option value="DYPCOE">DYPCOE</option>
              <option value="DYPIMER">DYPIMER</option>
            </select>
            {errors.college && <div className="error">{errors.college}</div>}
          </div>
          <div className="department-wrapper">
            <label htmlFor="department" className="department-label">Department:</label>
            <select id="department" value={department} onChange={handleDepartmentChange} className="department-select">
              <option value="">-- Select Department --</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
              <option value="Electronics & Telecommunication Engineering">Electronics & Telecommunication Engineering</option>
              <option value="Instrumentation and Control Engineering">Instrumentation and Control Engineering</option>
              <option value="Robotics and Automation">Robotics and Automation</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
            </select>
            {errors.department && <div className="department-error">{errors.department}</div>}
          </div>

          <div>
            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" value={designation} onChange={handleDesignationChange}
              onBlur={(event) => {
                const disallowedValues = ["hod", "principal"];
                if (disallowedValues.includes(event.target.value.toLowerCase())) {
                  setErrors({ ...errors, designation: "Please enter a valid designation." });
                } else {
                  setErrors({ ...errors, designation: "" });
                }
              }} />
            {errors.designation && <div className="error">{errors.designation}</div>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input type="tel" id="mobile" value={mobile} onChange={handleMobileChange} />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </div>

          <button className='buttonA' type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
