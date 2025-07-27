import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemname: 'T-shirt', price: 299 },
        { itemname: 'Jeans', price: 999 },
        { itemname: 'Shoes', price: 1499 },
        { itemname: 'Backpack', price: 799 },
        { itemname: 'Cap', price: 199 },
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Items Ordered</h2>
        <table style={{ borderCollapse: "collapse", width: "60%" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={cellStyle}>Item Name</th>
              <th style={cellStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <Cart key={index} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left"
};

export default OnlineShopping;
