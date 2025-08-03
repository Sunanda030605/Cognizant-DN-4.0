import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "React Basics", author: "John Doe" },
    { id: 2, title: "Advanced JavaScript", author: "Jane Smith" },
    { id: 3, title: "Node.js in Action", author: "Robert Brown" },
  ];

  return (
    <div style={styles.container}>
      <h3>Book Details</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = { container: { padding: "10px", border: "1px solid #ccc", margin: "10px" } };

export default BookDetails;
