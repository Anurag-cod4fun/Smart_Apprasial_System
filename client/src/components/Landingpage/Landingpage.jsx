import React from 'react';
import "./Landingpage.css";
import { useNavigate } from 'react-router-dom'; 

import logo from '../Landingpage/dyp-logo1.png';
import backgroundImage from '../Landingpage/dyp.jpeg'; 

const Landingpage = () => {
    const navigate = useNavigate(); 

    const navigateToLogin = () => {
        navigate('/Loginpage'); 
    };

    return (
        <div className="landing-page">
            <div className="left-section">
                <div className="centered-logo-container">
                    <img src={logo} alt="Logo" className="centered-logo" />
                    <h1 className="header-text">Welcome to Dr. D Y Patil Educational Complex, Akurdi, Pune</h1>
                </div>
            </div>
            <div className="right-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                {/* <h1 className="header-text">Welcome to Dr. D Y Patil Educational Complex, Akurdi, Pune</h1> */}
                <div className="button-container">
                    <button className="get-started-button" onClick={navigateToLogin}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;
