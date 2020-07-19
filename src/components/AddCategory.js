import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ addCategory }) => {
  const [category, setCategory] = useState('');
  const handleInputText = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(category.length>2){
      addCategory((categories) => [category, ...categories]);
      setCategory('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={handleInputText}
      />
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;