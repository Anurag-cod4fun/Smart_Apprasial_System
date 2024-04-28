import React, { useState } from 'react';
import ManageHod from './ManageHod';
import AddHod from './AddHod';
import "./Hod.css";

const Employee = () => {
    const [isAddHod, setIsAddHod] = useState(false);

    const handleAddHodClick = () => {
        setIsAddHod(!isAddHod);
    }

    return (
        <>
            <h1 style={{ color: 'brown', marginTop:"100px" }}>Hod Management</h1>
            <div className="card-content">
                {isAddHod ? <AddHod /> : <ManageHod />}
            </div>
            <div className="card-actions">
                <button className='buttonB' onClick={handleAddHodClick}>
                    {isAddHod ? <span ><i class="fas fa-tasks faa-pulse animated-icon"></i>  </span> : <span class="icon-container"><i class="fas fa-plus-circle faa-tada animated-icon"></i></span>}
                    <span style={{ marginLeft: "10px" }}>{isAddHod ? 'Manage Hod' : 'Add Hod'}</span>
                </button>
            </div>



        </>
    );
}

export default Employee;
