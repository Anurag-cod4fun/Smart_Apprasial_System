
import React, { useState } from 'react';
import './sidebar.css';
import Dashboard from './Dashboard/Dashboard';
import Guidelines from './Guidelines/Guidelines';
import Appraisal from './Appraisal/Appraisal';
import AppraisalTimeline from './Appraisal/AppraisalTimeline';
import Feedback from './Feedback/Feedback';
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
                            <span className='nav-logo-name'>Employee</span>
                        </div>

                        <div className='nav-list'>
                            <div className={`nav-link ${activeComponent === 'Dashboard' ? 'active' : ''}`} onClick={() => handleClick('Dashboard')}>
                                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                                <span className='nav-link-name'>Dashboard</span>
                            </div>
                            <div className={`nav-link ${activeComponent === 'Appraisal' ? 'active' : ''}`} onClick={() => handleClick('Appraisal')}>
                                <i className='fas fa-hotel nav-link-icon'></i>
                                <span className='nav-link-name'>Appraisal</span>
                            </div>
                            <div className={`nav-link ${activeComponent === 'Guidelines' ? 'active' : ''}`} onClick={() => handleClick('Guidelines')}>
                                <i className='fas fa-image nav-link-icon'></i>
                                <span className='nav-link-name'>Guidelines</span>
                            </div>
                            <div className={`nav-link ${activeComponent === 'Appraisal status' ? 'active' : ''}`} onClick={() => handleClick('Appraisal status')}>
                                <i className='fas fa-clock nav-link-icon'></i>
                                <span className='nav-link-name'>Appraisal status</span>
                            </div>
                             <div className={`nav-link ${activeComponent === 'Feedback' ? 'active' : ''}`} onClick={() => handleClick('Feedback')}>
                                <i className='fas fa-pen nav-link-icon'></i>
                                <span className='nav-link-name'>Feedback</span>
                            </div>
                           
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
                {activeComponent === 'Appraisal' && <Appraisal />}
                {activeComponent === 'Guidelines' && <Guidelines />}
                {activeComponent === 'Appraisal status' && <AppraisalTimeline />}
                {activeComponent === 'Feedback' && <Feedback />}
            </div>

        </main>
    );
};


export default Sidebar;
