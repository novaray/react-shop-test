import React from 'react';

export interface ProductsProps {
  name: string;
  imagePath: string;
}

const Products = ({name, imagePath}: ProductsProps) => {
  return (
    <div style={{textAlign: 'center'}}>
      <img
        style={{width: '75%'}}
        src={`http://localhost:5001/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{marginTop: '10px'}}>
        <label style={{textAlign: 'right'}}>{name}</label>
        <input
          style={{marginLeft: 7}}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;
