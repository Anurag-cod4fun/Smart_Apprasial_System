import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Employee.css";
import profilePhoto from "../Employee/profile.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [mode, setMode] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State for selected department filter
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
    setMode("view");
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setMode("edit");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/deleteemployee/${id}`);
        setEmployees(employees.filter((employee) => employee._id !== id));
        toast.success("Employee deleted successfully");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedEmployee = {
      name: selectedEmployee.name,
      college: selectedEmployee.college,
      department: selectedEmployee.department,
      designation: selectedEmployee.designation,
      email: selectedEmployee.email,
      mobile: selectedEmployee.mobile,
    };
    try {
      const res = await axios.put(`http://localhost:8080/api/updateemployee/${selectedEmployee._id}`, updatedEmployee);
      const data = res.data;
      if (data.error) {
        console.log(data.error);
      } else {
        setSelectedEmployee({});
        setMode('');
        fetchEmployees();
      }
      toast.success("Employee updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update student, please try again later");
    }
  };


  const fetchEmployeesByDepartment = async (selectedDepartment) => {
    try {
      const encodedDepartment = encodeURIComponent(selectedDepartment);
      const response = await axios.get(`http://localhost:8080/api/department?department=${encodedDepartment}`);
      console.log(response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchemployee');
      console.log(response.data)
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedDepartment !== "") {
      fetchEmployeesByDepartment(selectedDepartment);
    } else {
      // If no department is selected, fetch all employees
      fetchEmployees();
    }
  }, [selectedDepartment]); // Update the employee list when the selected department changes





  return (
    <div className='cardE'>
       <LoadingBar
        color="#f11946"
        progress={isLoading ? 100 : 0} // Set progress to 100% when loading
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
      <h1>Manage Employees</h1>
      {/* Dropdown select for department filter */}
      <div className="department-wrapper">

        <select value={selectedDepartment} className="department-select" onChange={(e) => setSelectedDepartment(e.target.value)}>

          <option value="">All Departments</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
          <option value="Electronics & Telecommunication Engineering">Electronics & Telecommunication Engineering</option>
          <option value="Instrumentation and Control Engineering">Instrumentation and Control Engineering</option>
          <option value="Robotics and Automation">Robotics and Automation</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          {/* Add other department options here */}
        </select>

      </div>


      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.email}</td>
              <td>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewClick(employee)} >  <AiOutlineEye /> </button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleEditClick(employee)}><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleDelete(employee._id)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mode === "view" && (
        <div className='card3' style={{ display: 'flex', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
            <img src={selectedEmployee.profilePhotoURL || profilePhoto} alt={selectedEmployee.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ marginRight: '10px' }}>{selectedEmployee.name}</span>
              {/* Add any other icons or elements you want to include here */}
            </h2>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>College: {selectedEmployee.college}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Department: {selectedEmployee.department}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Designation: {selectedEmployee.designation}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Email: {selectedEmployee.email}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Mobile: {selectedEmployee.mobile}</p>
          </div>
        </div>
      )}



      {mode === "edit" && (
        <div className='card1'>
          <h2>Edit Employee</h2>
          <form onSubmit={handleUpdate}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' value={selectedEmployee.name} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='college'>College:</label>
              <input type='text' id='college' name='college' value={selectedEmployee.college} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, college: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='department'>Department:</label>
              <input type='text' id='department' name='department' value={selectedEmployee.department} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='designation'>Designation:</label>
              <input type='text' id='designation' name='designation' value={selectedEmployee.designation} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, designation: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' value={selectedEmployee.email} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, email: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile:</label>
              <input type='text' id='mobile' name='mobile' value={selectedEmployee.mobile} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, mobile: e.target.value })} />
            </div>
            <button className='button3' type='submit'>Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageEmployee;
