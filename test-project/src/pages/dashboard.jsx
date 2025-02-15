// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import IFCViewer from '../components/IFCViewer';

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

  // Example data for charts
  const electricityUsage = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Electricity Usage (kWh)',
        data: [120, 150, 180, 220, 200, 240],
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const heatingUsage = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Heating Usage (kWh)',
        data: [300, 280, 260, 250, 240, 220],
        fill: false,
        borderColor: 'red',
      },
    ],
  };

  return (
    <div style={dashboardContainerStyle}>
      {/* Left Column (30%) */}
      <div style={leftColumnStyle}>
        
        {/* Row 1: Welcome + Logout on the same line */}
        <div style={userRowStyle}>
          <p style={{ margin: 0 }}>Welcome, {user?.email ?? 'Guest'}</p>
          <button onClick={() => navigate('/login')} style={logoutButtonStyle}>
            Logout
          </button>
        </div>

        {/* Row 2: Navigation Tabs */}
        <div style={tabsContainerStyle}>
          <button style={activeTabStyle}>Overview</button>
          <button style={tabStyle}>Financials</button>
          <button style={tabStyle}>Maintenance</button>
          <button style={tabStyle}>Documents</button>
        </div>

        {/* Property Info */}
        <section style={contentCardStyle}>
          <h3 style={cardHeaderStyle}>Property Info</h3>
          <p>Year of Construction: <strong>2025</strong></p>
          <p>Construction Type: <strong>Solid</strong></p>
        </section>

        {/* Rent Payment */}
        <section style={contentCardStyle}>
          <h3 style={cardHeaderStyle}>Rent Payment</h3>
          <p>Status: <strong>Paid</strong></p>
          <button style={primaryButtonStyle}>View Receipt</button>
        </section>

        {/* Maintenance Requests */}
        <section style={contentCardStyle}>
          <h3 style={cardHeaderStyle}>Maintenance</h3>
          <p>Pending Requests: <strong>2</strong></p>
          <button style={primaryButtonStyle}>View Requests</button>
        </section>

        {/* Energy Usage (Electricity + Heating in one card) */}
        <section style={contentCardStyle}>
          <h3 style={cardHeaderStyle}>Energy Usage</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '50%' }}>
              <Line data={electricityUsage} />
            </div>
            <div style={{ width: '50%' }}>
              <Line data={heatingUsage} />
            </div>
          </div>
        </section>
      </div>

      {/* Right Column (70%) - IFC Viewer */}
      <div style={rightColumnStyle}>
        <div style={viewerWrapperStyle}>
          <IFCViewer />
        </div>
      </div>
    </div>
  );
};

/* Inline style objects */

const dashboardContainerStyle = {
  display: 'flex',
  height: 'calc(100vh - 60px)',
  marginTop: '60px',
  backgroundColor: 'rgb(242, 240, 237)',
};

const leftColumnStyle = {
  width: '30%',
  padding: '2rem',
  overflowY: 'auto',
};

/* 
   Row 1: "Welcome, user@example.com" on the left 
   and "Logout" on the far right 
*/
const userRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem',
};

/* Row 2: Navigation tabs in a row */
const tabsContainerStyle = {
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1.5rem',
};

const tabBaseStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
};

const activeTabStyle = {
  ...tabBaseStyle,
  backgroundColor: '#000',
  color: '#fff',
};

const tabStyle = {
  ...tabBaseStyle,
  backgroundColor: '#ccc',
};

const logoutButtonStyle = {
  ...tabBaseStyle,
  backgroundColor: '#FF9900',
  color: '#fff',
  borderRadius: '20px',
};

const contentCardStyle = {
  padding: '1rem',
  borderRadius: '12px',
  backgroundColor: '#F9F9F9',
  marginBottom: '1.5rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
};

const cardHeaderStyle = {
  marginTop: 0,
  marginBottom: '0.5rem',
};

const primaryButtonStyle = {
  padding: '0.5rem 1.5rem',
  backgroundColor: '#FF9900',
  color: '#fff',
  borderRadius: '20px',
  cursor: 'pointer',
  border: 'none',
  marginTop: '0.5rem',
};

const rightColumnStyle = {
  width: '70%',
  padding: '1rem',
};

const viewerWrapperStyle = {
  height: '95%',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#fff',
};

export default Dashboard;
