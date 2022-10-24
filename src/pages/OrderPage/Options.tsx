import React, { ChangeEvent } from 'react';
import { updateItemCountComponentFunc } from './Type';

export interface OptionsProps {
  name: string;
  updateItemCount: updateItemCountComponentFunc;
}

const Options = ({name, updateItemCount}: OptionsProps) => {
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateItemCount(name, event.target.checked ? 1 : 0);
  }
  
  return (
    <form>
      <input
        type="checkbox"
        id={`${name} option`}
        onChange={handleChange}
      />
        {' '}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
