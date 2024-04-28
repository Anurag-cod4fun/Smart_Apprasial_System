
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Hod.css";
import profilePhoto from "../HOD/profile.jpg";
import LoadingBar from 'react-top-loading-bar'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageHod = () => {
  const [hods, setHods] = useState([]);
  const [selectedHod, setSelectedHod] = useState(null);
  const [mode, setMode] = useState("");
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const handleViewClick = (hod) => {
    setSelectedHod(hod);
    setMode("view");
  };

  const handleEditClick = (hod) => {
    setSelectedHod(hod);
    setMode("edit");
  };




  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hod?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/deletehod/${id}`);
        setHods(hods.filter((hod) => hod._id !== id));
        toast.success("Hod deleted successfully");
      } catch (error) {
        console.error(error);
      }
    }
  };


  const fetchHods = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchhod');
      setHods(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    fetchHods();
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedHod = {
      name: selectedHod.name,
      college: selectedHod.college,
      department: selectedHod.department,
      role: selectedHod.role,
      email: selectedHod.email,
      mobile: selectedHod.mobile,
    };
    try {
      const res = await axios.put(`http://localhost:8080/api/updatehod/${selectedHod._id}`, updatedHod);
      const data = res.data;
      if (data.error) {
        console.log(data.error);
      } else {
        setSelectedHod({});
        setMode('');
        fetchHods();
      }
      toast.success("Hod updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update Hod, please try again later");
    }
  };

  return (
    <div className='cardH'>
        <LoadingBar
        color="#f11946"
        progress={isLoading ? 100 : 0} // Set progress to 100% when loading
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
      <h1>Manage Hod</h1>
      <table class="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            {/* <th>Role</th> */}
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hods.map((hod) => (
            <tr key={hod._id}>
              <td>{hod.name}</td>
              <td>{hod.department}</td>
              {/* <td>{hod.role}</td> */}
              <td>{hod.email}</td>
              <td>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewClick(hod)} >  <AiOutlineEye /> </button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleEditClick(hod)}><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleDelete(hod._id)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mode === "view" && (
        <div className='card3' style={{ display: 'flex', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
            <img src={selectedHod.profilePhotoURL || profilePhoto} alt={selectedHod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>{selectedHod.name}</span>
              {/* Add any other icons or elements you want to include here */}
            </h2>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>College: {selectedHod.college}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Department: {selectedHod.department}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Role: {selectedHod.role}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Email: {selectedHod.email}</p>
            <p style={{ margin: '0', color: '#555', marginBottom: '2px' }}>Mobile: {selectedHod.mobile}</p>
          </div>
        </div>
      )}

      {mode === "edit" && (
        <div className='card1'>
          <h2>Edit Hods</h2>
          <form onSubmit={handleUpdate}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' value={selectedHod.name} onChange={(e) => setSelectedHod({ ...selectedHod, name: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='college'>College:</label>
              <input type='text' id='college' name='college' value={selectedHod.college} onChange={(e) => setSelectedHod({ ...selectedHod, college: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='department'>Department:</label>
              <input type='text' id='department' name='department' value={selectedHod.department} onChange={(e) => setSelectedHod({ ...selectedHod, department: e.target.value })} />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' value={selectedHod.email} onChange={(e) => setSelectedHod({ ...selectedHod, email: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile:</label>
              <input type='text' id='mobile' name='mobile' value={selectedHod.mobile} onChange={(e) => setSelectedHod({ ...selectedHod, mobile: e.target.value })} />
            </div>
            <button className='button3' type='submit'>Update</button>

          </form>
        </div>
      )}

    </div>
  )
};

export default ManageHod;
