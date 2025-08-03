import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 45 },
    { name: 'Dhoni', score: 78 },
    { name: 'Jadeja', score: 68 },
    { name: 'Ashwin', score: 85 },
    { name: 'Hardik', score: 35 },
    { name: 'Gill', score: 95 },
    { name: 'Rahul', score: 67 },
    { name: 'Pant', score: 80 },
    { name: 'Shami', score: 60 },
    { name: 'Bumrah', score: 100 },
  ];

  const filtered = players.filter(p => p.score < 70); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>List of Players</h1>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - Score: {p.score}</li>
        ))}
      </ul>

      <h1>List of Players having score less than 70</h1>
      <ul>
        {filtered.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
