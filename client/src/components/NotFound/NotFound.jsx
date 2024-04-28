import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate(); // Get the navigate function from React Router

    const handleGoBack = () => {
        navigate('/'); // Navigate to the Landingpage component
    };

    return (
        <div className="error-one-container">
            <div>
                <p className="error-text">404 error</p>
                <h1 className="error-heading">We can't find that page</h1>
                <p className="error-message">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <div className="error-buttons">
                    <button className="back-button" onClick={handleGoBack}>
                        <ArrowLeft size={16} className="back-icon" />
                        Go back
                    </button>
                    <button className="contact-button">Contact us</button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
