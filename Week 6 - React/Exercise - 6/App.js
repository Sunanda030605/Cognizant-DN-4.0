import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetails from './TrainerDetails';
import trainers from './trainermock';

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1 style={{ color: "#2c3e50", borderBottom: "2px solid #ccc" }}>
          My Academy Trainers App
        </h1>

        
        <nav style={{ margin: "15px 0" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/trainers">Trainers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainers} />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
