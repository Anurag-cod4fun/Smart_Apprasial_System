
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Principle.css";
import LoadingBar from 'react-top-loading-bar'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagePrinciple = () => {
  const [principles, setprinciples] = useState([]);
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [mode, setMode] = useState("");
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const handleViewClick = (principle) => {
    setSelectedPrinciple(principle);
    setMode("view");
  };

  const handleEditClick = (principle) => {
    setSelectedPrinciple(principle);
    setMode("edit");
  };




  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Principle?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/deleteprinciple/${id}`);
        setprinciples(principles.filter((principle) => principle._id !== id));
        toast.success("Principle deleted successfully");
      } catch (error) {
        console.error(error);
      }
    }
  };


  const fetchprinciples = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchprinciple');
      setprinciples(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchprinciples();
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPrinciple = {
      name: selectedPrinciple.name,
      college: selectedPrinciple.college,

      role: selectedPrinciple.role,
      email: selectedPrinciple.email,
      mobile: selectedPrinciple.mobile,
    };
    try {
      const res = await axios.put(`http://localhost:8080/api/updatehod/${selectedPrinciple._id}`, updatedPrinciple);
      const data = res.data;
      if (data.error) {
        console.log(data.error);
      } else {
        setSelectedPrinciple({});
        setMode('');
        fetchprinciples();
      }
      toast.success("Principle updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update Principle, please try again later");
    }
  };

  return (
    <div className='cardP'>
        <LoadingBar
        color="#f11946"
        progress={isLoading ? 100 : 0} // Set progress to 100% when loading
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
      <h1>Manage Principle</h1>
      <table class="employee-table">
        <thead>
          <tr>
            <th>Name</th>

            <th>College</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {principles.map((principle) => (
            <tr key={principle._id}>
              <td>{principle.name}</td>

              <td>{principle.college}</td>
              <td>{principle.email}</td>
              <td>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewClick(principle)} >  <AiOutlineEye /> </button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleEditClick(principle)}><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleDelete(principle._id)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mode === "view" && (
  <div className='card3' style={{ display: 'flex',  padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
    <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
      <img src={selectedPrinciple.profilePhotoURL} alt={selectedPrinciple.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', display: 'flex', alignItems: 'center' ,marginBottom:'4px' }}>
        <span style={{ marginRight: '10px' }}>{selectedPrinciple.name}</span>
        {/* Add any other icons or elements you want to include here */}
      </h2>
      <p style={{ margin: '0', color: '#555' ,marginBottom:'4px'}}>College: {selectedPrinciple.college}</p>
      <p style={{ margin: '0', color: '#555' ,marginBottom:'4px'}}>Role: {selectedPrinciple.role}</p>
      <p style={{ margin: '0', color: '#555' ,marginBottom:'4px'}}>Email: {selectedPrinciple.email}</p>
      <p style={{ margin: '0', color: '#555' ,marginBottom:'4px'}}>Mobile: {selectedPrinciple.mobile}</p>
    </div>
  </div>
)}
      {mode === "edit" && (
        <div className='card1'>
          <h2>Edit Principles</h2>
          <form onSubmit={handleUpdate}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' value={selectedPrinciple.name} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, name: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='college'>College:</label>
              <input type='text' id='college' name='college' value={selectedPrinciple.college} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, college: e.target.value })} />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' value={selectedPrinciple.email} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, email: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile:</label>
              <input type='text' id='mobile' name='mobile' value={selectedPrinciple.mobile} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, mobile: e.target.value })} />
            </div>
            <button className='button3' type='submit'>Update</button>

          </form>
        </div>
      )}

    </div>
  )
};

export default ManagePrinciple;
