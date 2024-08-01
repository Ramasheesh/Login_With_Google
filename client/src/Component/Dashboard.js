import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    return (
        <>
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="dashboard-content">
                <div className="card">
                    <h3>Welcome</h3>
                    <p>Here you can find an overview of your activity.</p>
                </div>
                <div className="card">
                    <h3>Statistics</h3>
                    <p>Track your performance and progress here.</p>
                </div>
                <div className="card">
                    <h3>Settings</h3>
                    <p>Adjust your preferences and account settings.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
