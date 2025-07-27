import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <tr>
        <td style={cellStyle}>{this.props.itemname}</td>
        <td style={cellStyle}>{this.props.price}</td>
      </tr>
    );
  }
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px"
};

Cart.defaultProps = {
  itemname: 'Unknown Item',
  price: '0',
};

export default Cart;
