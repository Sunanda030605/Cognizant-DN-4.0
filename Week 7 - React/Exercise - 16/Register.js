import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    let formErrors = {};

    if (name.trim().length < 5) {
      formErrors.name = "Name must be at least 5 characters long.";
    }
    if (!email.includes("@") || !email.includes(".")) {
      formErrors.email = "Email must contain '@' and '.'";
    }
    if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div style={styles.container}>
      <h2>Mail Register App</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        {errors.name && <span style={styles.error}>{errors.name}</span>}

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {errors.password && <span style={styles.error}>{errors.password}</span>}

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  label: { fontWeight: "bold" },
  input: { padding: "8px", fontSize: "14px" },
  button: { padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer", marginTop: "10px" },
  error: { color: "red", fontSize: "13px" },
};

export default Register;
