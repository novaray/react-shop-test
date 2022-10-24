import React, { ChangeEvent } from 'react';
import { updateItemCountComponentFunc } from './Type';

export interface ProductsProps {
  name: string;
  imagePath: string;
  updateItemCount: updateItemCountComponentFunc;
}

const Products = ({name, imagePath, updateItemCount}: ProductsProps) => {
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    updateItemCount(name, currentValue);
  };
  
  return (
    <div style={{textAlign: 'center'}}>
      <img
        style={{width: '75%'}}
        src={`http://localhost:5001/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{marginTop: '10px'}}>
        <label htmlFor={name} style={{textAlign: 'right'}}>{name}</label>
        <input
          id={name}
          style={{marginLeft: 7}}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
