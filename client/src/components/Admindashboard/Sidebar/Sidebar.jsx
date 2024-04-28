

import React, { useState } from 'react';
import './sidebar.css';
import Dashboard from './Dashboard/Dashboard';
import Employee from './Employee/Employee';
import Hod from './HOD/Hod';
import Principle from './Principle/Principle';
import Appraisal from './Appraisal/Appraisal';


const Sidebar = () => {
    const [show, setShow] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const handleClick = (component) => {
        setActiveComponent(component);
    }

    return (
        <main className={show ? 'space-toggle' : null}>

            <header className={`header ${show ? 'space-toggle' : null}`}>

                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
                </div>

            </header>

            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <div className='nav-logo'>
                            <i className={`fas fa-home-alt nav-logo-icon`}></i>
                            <span className='nav-logo-name'>Admin</span>
                        </div>

                        <div className='nav-list'>
                            <div className={`nav-link ${activeComponent === 'Dashboard' ? 'active' : ''}`} onClick={() => handleClick('Dashboard')}>
                                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                                <span className='nav-link-name'>Dashboard</span>
                            </div>
                            <div className={`nav-link ${activeComponent === 'Principle' ? 'active' : ''}`} onClick={() => handleClick('Principle')}>
                                <i className='fas fa-hotel nav-link-icon'></i>
                                <span className='nav-link-name'>Principle</span>
                            </div>
                            <div className={`nav-link ${activeComponent === 'HOD' ? 'active' : ''}`} onClick={() => handleClick('HOD')}>
                                <i className='fas fa-chess-king nav-link-icon'></i>
                                <span className='nav-link-name'>HOD</span>
                            </div>
                            <div className={`nav-link ${activeComponent === 'Employee' ? 'active' : ''}`} onClick={() => handleClick('Employee')}>
                                <i className='fas fa-user nav-link-icon'></i>
                                <span className='nav-link-name'>Employee</span>
                            </div>
                            {/* <div className={`nav-link ${activeComponent === 'Appraisal' ? 'active' : ''}`} onClick={() => handleClick('Appraisal')}>
                                <i className='fas fa-pencil-alt'></i>
                                <span className='nav-link-name'>Appraisal</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="nav-linkLog">
                        <i className="fas fa-sign-out nav-link-icon" onClick={handleLogout}></i>
                        <span className="nav-link-name">Logout</span>
                    </div>


                </nav>
            </aside>

            <div className="main-content">
                {activeComponent === 'Dashboard' && <Dashboard />}
                {activeComponent === 'Employee' && <Employee />}
                {activeComponent === 'HOD' && <Hod />}
                {activeComponent === 'Principle' && <Principle />}
                {/* {activeComponent === 'Appraisal' && <Appraisal />} */}
            </div>

        </main>
    );
};


export default Sidebar;
