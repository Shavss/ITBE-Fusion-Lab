// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import IFCViewer from '../components/IFCViewer';

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Fix: Define missing style object
const navigationTabsStyle = { display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' };

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setUser(data);
      } catch (err) {
        setError(err.message);
        navigate('/login');
      }
    };
    fetchUserProfile();
  }, [navigate]);

  const electricityUsage = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ label: 'Electricity Usage (kWh)', data: [120, 150, 180, 220, 200, 240], fill: false, borderColor: 'blue' }],
  };

  const heatingUsage = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ label: 'Heating Usage (kWh)', data: [300, 280, 260, 250, 240, 220], fill: false, borderColor: 'red' }],
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 60px)', marginTop: '60px', backgroundColor: 'rgb(242, 240, 237)' }}>
      {/* Left Column (30%) */}
      <div style={{ width: '30%', padding: '2rem', overflowY: 'auto' }}>
        <header style={headerStyle}>Current Status</header>
        <p>Welcome, {user?.email ?? 'Guest'}</p>
        <button onClick={() => navigate('/login')} style={logoutButtonStyle}>Logout</button>
        
        {/* Navigation Tabs */}
        <div style={navigationTabsStyle}>
          <button style={{ padding: '0.5rem', backgroundColor: '#000', color: '#fff', borderRadius: '8px' }}>Building</button>
          <button style={{ padding: '0.5rem', backgroundColor: '#ccc', borderRadius: '8px' }}>Costs</button>
          <button style={{ padding: '0.5rem', backgroundColor: '#ccc', borderRadius: '8px' }}>Materials</button>
          <button style={{ padding: '0.5rem', backgroundColor: '#ccc', borderRadius: '8px' }}>Technology</button>
        </div>
        <section style={contentCardStyle}>
          <p>Year of Construction:</p>
          <input placeholder="e.g. 1946" style={inputStyle} />
          <p>Construction Type:</p>
          <button style={optionButtonStyle}>Solid</button>
          <button style={optionButtonStyle}>Skeleton</button>
          <button style={optionButtonStyle}>Timber Frame</button>
          <div style={footerButtonStyle}>
            <button style={secondaryButtonStyle}>Back</button>
            <button style={primaryButtonStyle}>Next</button>
          </div>
        </section>


        {/* Graphs Section */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ textAlign: 'center' }}>Electricity Usage</h3>
          <Line data={electricityUsage} />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ textAlign: 'center' }}>Heating Usage</h3>
          <Line data={heatingUsage} />
        </div>
      </div>

      {/* Right Column (70%) */}
      <div style={{ width: '70%', padding: '1rem' }}>
        <div style={{ height: '95%', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
          <IFCViewer/>
        </div>
      </div>
    </div>
  );
};

const headerStyle = { fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' };
const logoutButtonStyle = { padding: '0.5rem 1rem', backgroundColor: '#FF9900', color: '#fff', borderRadius: '20px', cursor: 'pointer' };

// Styles remain the same as previously defined
const menuStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' };
const activeTabStyle = { backgroundColor: '#000', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px' };
const inactiveTabStyle = { backgroundColor: '#EAEAEA', padding: '0.5rem 1rem', borderRadius: '20px' };
const contentCardStyle = { padding: '1rem', borderRadius: '12px', backgroundColor: '#F9F9F9' };
const optionButtonStyle = { padding: '0.5rem 1rem', margin: '0.5rem', borderRadius: '12px', border: '1px solid #ccc' };
const inputStyle = { padding: '0.5rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc', width: '100%' };
const footerButtonStyle = { display: 'flex', justifyContent: 'space-between', marginTop: '1rem' };
const primaryButtonStyle = { padding: '0.5rem 1.5rem', backgroundColor: '#FF9900', color: '#fff', borderRadius: '20px' };
const secondaryButtonStyle = { padding: '0.5rem 1.5rem', backgroundColor: '#E0E0E0', borderRadius: '20px' };

export default Dashboard;
