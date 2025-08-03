import React, { useState } from 'react';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const generateRefNumber = () => {
    return 'REF-' + Math.floor(1000 + Math.random() * 9000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !complaint) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const refNo = generateRefNumber();
    alert(`Complaint Submitted!\nReference No: ${refNo}\nEmployee: ${name}\nComplaint: ${complaint}`);
    setName('');
    setComplaint('');
  };

  return (
    <div style={styles.container}>
      <h2>Ticket Raising App</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Employee Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={styles.input}
        />

        <label style={styles.label}>Complaint Details:</label>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter your complaint here..."
          rows="4"
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Submit Complaint</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "auto", textAlign: "left" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  label: { fontWeight: "bold" },
  input: { padding: "8px", fontSize: "14px" },
  textarea: { padding: "8px", fontSize: "14px" },
  button: { padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer", marginTop: "10px" },
};

export default ComplaintRegister;
