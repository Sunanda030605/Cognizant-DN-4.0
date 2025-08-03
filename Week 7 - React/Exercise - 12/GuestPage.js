import React from 'react';

function GuestPage() {
  return (
    <div style={styles.container}>
      <h2>Welcome Guest </h2>
      <p>Browse available flights below:</p>
      <ul style={styles.list}>
        <li>A123 - Mumbai → Delhi - ₹5000</li>
        <li>B456 - Bangalore → Chennai - ₹3500</li>
        <li>C789 - Kolkata → Hyderabad - ₹4500</li>
        <li>D234 - Delhi → Goa - ₹4000</li>
        <li>E567 - Chennai → Pune - ₹3800</li>
        <li>F890 - Hyderabad → Jaipur - ₹4200 </li>
      </ul>
      <p><em>Login to book your tickets.</em></p>
    </div>
  );
}

const styles = { 
  container: { padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px" },
  list: { listStyleType: "none", paddingLeft: 0 }
};

export default GuestPage;
