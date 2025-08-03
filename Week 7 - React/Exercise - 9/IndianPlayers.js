import React from 'react';
const toOrdinal = (n) => {
  const ordinals = [
    "First", "Second", "Third", "Fourth", "Fifth",
    "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh"
  ];
  return ordinals[n] || `${n + 1}th`;
};

function IndianPlayers() {
  const team = [
    'Virat', 'Rohit', 'Dhoni', 'Jadeja', 'Ashwin',
    'Hardik', 'Gill', 'Rahul', 'Pant', 'Shami', 'Bumrah'
  ];

  const oddTeam = team
    .map((name, i) => ({ name, index: i }))
    .filter(player => player.index % 2 === 0); 

  const evenTeam = team
    .map((name, i) => ({ name, index: i }))
    .filter(player => player.index % 2 !== 0); 

  const T20 = ['Kohli', 'Surya', 'Pant'];
  const Ranji = ['Pujara', 'Rahane', 'Iyer'];
  const mergedPlayers = [...T20, ...Ranji];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Odd Players</h1>
      <ul>
        {oddTeam.map((player, i) => (
          <li key={i}>{toOrdinal(player.index)}: {player.name}</li>
        ))}
      </ul>

      <h1>Even Players</h1>
      <ul>
        {evenTeam.map((player, i) => (
          <li key={i}>{toOrdinal(player.index)}: {player.name}</li>
        ))}
      </ul>

      <h1>
        List of Indian Players Merged:
      </h1>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
