import React , {useEffect} from 'react';
import './dashboard.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
    const navigate = useNavigate(); 

    const getUser = async () => {
        try {
          const response = await axios.get("http://localhost:4000/login/success", {
            withCredentials: true,
          });
          console.log('response: ', response);
         
        } catch (error) {
          navigate('*'); 
        }
      };
      useEffect(() => {
        getUser();
      });
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
