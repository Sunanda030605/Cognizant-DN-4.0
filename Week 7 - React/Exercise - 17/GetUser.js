import React from 'react';

class GetUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      this.setState({ user: data.results[0], loading: false });
    } catch (error) {
      console.error("Error fetching user:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <p>Loading user details...</p>;
    }

    if (!user) {
      return <p>Failed to load user data.</p>;
    }

    return (
      <div style={styles.container}>
        <h2>User Details</h2>
        <p>
          Name: {user.name.title} {user.name.first}
        </p>
        <img
          src={user.picture.large}
          alt="User"
          style={styles.image}
        />
      </div>
    );
  }
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial", textAlign: "center" },
  image: { borderRadius: "50%", marginTop: "10px" }
};

export default GetUser;
