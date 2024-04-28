import React, { useState } from 'react';
import ManagePrinciple from './ManagePrinciple';
import AddPrinciple from './AddPrinciple';
import "./Principle.css";

const Employee = () => {
    const [isAddPrinciple, setIsAddPrinciple] = useState(false);

    const handleAddPrincipleClick = () => {
        setIsAddPrinciple(!isAddPrinciple);
    }

    return (
        <>
            <h1 style={{ color: 'brown' ,marginTop:"100px"}}>Principle Management</h1>
            <div className="card-content">
                {isAddPrinciple ? <AddPrinciple /> : <ManagePrinciple />}
            </div>
            <div className="card-actions">
                <button className='button2' onClick={handleAddPrincipleClick}>
                    {isAddPrinciple ? <span ><i class="fas fa-tasks faa-pulse animated-icon"></i>  </span> : <span class="icon-container"><i class="fas fa-plus-circle faa-tada animated-icon"></i></span>}
                    <span style={{ marginLeft: "10px" }}>{isAddPrinciple ? 'Manage Principle' : 'Add Principle'}</span>
                </button>
            </div>



        </>
    );
}

export default Employee;
