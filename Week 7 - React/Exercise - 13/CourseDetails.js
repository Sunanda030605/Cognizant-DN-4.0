import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: "React Fundamentals", duration: "4 weeks" },
    { id: 2, name: "Full Stack Development", duration: "8 weeks" },
    { id: 3, name: "Data Structures in JS", duration: "5 weeks" },
  ];

  return (
    <div style={styles.container}>
      <h3>Course Details</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = { container: { padding: "10px", border: "1px solid #ccc", margin: "10px" } };

export default CourseDetails;
