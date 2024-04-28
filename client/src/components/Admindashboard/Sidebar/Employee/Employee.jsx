import React, { useState } from 'react';
import ManageEmployee from './ManageEmployee';
import AddEmployee from './AddEmployee';
import "./Employee.css";

const Employee = () => {
    const [isAddEmployee, setIsAddEmployee] = useState(false);

    const handleAddEmployeeClick = () => {
        setIsAddEmployee(!isAddEmployee);
    }

    return (
        <>
            <h1 style={{ color: 'brown' , marginTop:"100px"}}>Employee Management</h1>
            <div className="card-content">
                {isAddEmployee ? <AddEmployee /> : <ManageEmployee />}
            </div>
            <div className="card-actions">
                <button className='buttonB' onClick={handleAddEmployeeClick}>
                    {isAddEmployee ? <span ><i class="fas fa-tasks faa-pulse animated-icon"></i></span> : <span class="icon-container"><i class="fas fa-plus-circle faa-tada animated-icon"></i></span>}
                    <span style={{ marginLeft: "10px" }}>{isAddEmployee ? 'Manage Employees' : 'Add Employee'}</span>
                </button>
            </div>



        </>
    );
}

export default Employee;
