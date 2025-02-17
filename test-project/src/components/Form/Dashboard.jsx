import React from 'react';
import './Dashboard.css';
import MapViewer from '../../components/MapViewer2';

const Dashboard = ({ properties }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        
        {/* Left Panel: Heading + Properties */}
        <div className="left-panel">
          <h2>AVAILABLE PROPERTIES</h2>
          
          <div className="properties-list">
            {properties.map((property, index) => (
              <div key={index} className="property-card">
                <img
                  className="property-image"
                  src={property.image}
                  alt={property.name}
                />
                <h3>{property.name}</h3>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Price:</strong> {property.price}</p>
                <p><strong>Size:</strong> {property.size}</p>
                <p><strong>Amenities:</strong> {property.amenities.join(', ')}</p>
                <p><strong>View:</strong> {property.view}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Map Viewer */}
        <div className="map-container">
          <MapViewer />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
