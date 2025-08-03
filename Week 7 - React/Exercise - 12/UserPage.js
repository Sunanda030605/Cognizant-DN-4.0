import React from 'react';

function UserPage() {
  const flights = [
    { id: 1, flight: "A123", route: "Mumbai → Delhi", price: 5000 },
    { id: 2, flight: "B456", route: "Bangalore → Chennai", price: 3500 },
    { id: 3, flight: "C789", route: "Kolkata → Hyderabad", price: 4500 },
    { id: 4, flight: "D234", route: "Delhi → Goa", price: 4000 },
    { id: 5, flight: "E567", route: "Chennai → Pune", price: 3800 },
    { id: 6, flight: "F890", route: "Hyderabad → Jaipur", price: 4200 },
  ];

  const handleBook = (flight) => {
    alert(`Ticket booked successfully!\nFlight: ${flight.flight}\nRoute: ${flight.route}\nPrice: ₹${flight.price}`);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome Back, User! </h2>
      <p>Available flights for booking:</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Route</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td>{f.flight}</td>
              <td>{f.route}</td>
              <td>₹{f.price}</td>
              <td>
                <button style={styles.bookButton} onClick={() => handleBook(f)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "15px" },
  bookButton: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "6px 12px", cursor: "pointer", borderRadius: "5px" },
};

export default UserPage;
