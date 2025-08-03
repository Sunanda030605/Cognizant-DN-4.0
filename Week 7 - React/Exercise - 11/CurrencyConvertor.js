import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const euroValue = parseFloat(rupees) / 90; 
    setEuro(euroValue.toFixed(2));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Currency Convertor (INR → Euro)</h2>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Amount:</label>
        <input
          type="number"
          value={rupees}
          onChange={e => setRupees(e.target.value)}
          placeholder="Enter INR"
          style={{ padding: "10px", fontSize: "16px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Currency:</label>
        <input
          value="Euro"
          disabled
          style={{ padding: "10px", fontSize: "16px", width: "120px", backgroundColor: "#eee" }}
        />
      </div>

      <button onClick={handleSubmit} style={{ padding: "10px 15px" }}>
        Submit
      </button>

      {euro && (
        <p style={{ marginTop: "15px" }}>
           Converted Amount: <strong>€{euro}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
