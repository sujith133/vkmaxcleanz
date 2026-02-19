import React from 'react';
import './UnderConstruction.css';

const UnderConstruction: React.FC = () => {
    return (
        <div className="uc-container">
            <div className="uc-content">
                <div className="uc-icon-wrapper">
                    <svg
                        className="uc-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                </div>
                <h1 className="uc-title">Something Amazing is Coming</h1>
                <p className="uc-subtitle">
                    We are currently building a new experience. Stay tuned for updates.
                </p>
                <div className="uc-progress-container">
                    <div className="uc-progress-bar"></div>
                </div>
                <div className="uc-footer">
                    &copy; {new Date().getFullYear()} VK Max Cleanz. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;
