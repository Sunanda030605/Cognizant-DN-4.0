import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("books");
  const isLoggedIn = true; 

  let element;
  if (view === "books") {
    element = <BookDetails />;
  } else if (view === "blogs") {
    element = <BlogDetails />;
  } else {
    element = <CourseDetails />;
  }

  return (
    <div style={styles.app}>
      <h1>Blogger App</h1>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setView("books")}>Show Books</button>
        <button onClick={() => setView("blogs")}>Show Blogs</button>
        <button onClick={() => setView("courses")}>Show Courses</button>
      </div>

      {/* Using element variable */}
      {element}

      {/* Using Ternary Operator */}
      <div style={styles.section}>
        {view === "blogs" ? <p>Currently viewing Blogs</p> : <p>Not viewing Blogs</p>}
      </div>

      {/*  Using Logical AND */}
      <div style={styles.section}>
        {isLoggedIn && <p>User is logged in, showing private content...</p>}
      </div>
    </div>
  );
}

const styles = {
  app: { padding: "20px", fontFamily: "Arial" },
  section: { marginTop: "15px", padding: "10px", backgroundColor: "#f9f9f9" },
};

export default App;
