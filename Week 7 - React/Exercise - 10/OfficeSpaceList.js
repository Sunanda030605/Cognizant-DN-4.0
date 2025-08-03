import React from 'react';

function OfficeSpaceList() {

  const heading = <h2 style={{ color: "#2c3e50" }}>Office Space Rentals</h2>;

 

  const officeSpaces = [
    { name: "TechPark One", rent: 75000, address: "Bangalore" },
    { name: "Startup Hub", rent: 55000, address: "Chennai" },
    { name: "BizSpace", rent: 90000, address: "Hyderabad" },
    { name: "WorkNest", rent: 48000, address: "Pune" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}
      <img src="/office1.jpg" alt="Office Space" style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }} />

      <h3 style={{ marginTop: "20px" }}>Available Spaces</h3>
      <ul>
        {officeSpaces.map((office, index) => {
          const rentStyle = {
            color: office.rent > 60000 ? "green" : "red",
            fontWeight: "bold"
          };

          return (
            <li key={index} style={{ marginBottom: "10px" }}>
              <p><strong>Name:</strong> {office.name}</p>
              <p><strong>Address:</strong> {office.address}</p>
              <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OfficeSpaceList;
