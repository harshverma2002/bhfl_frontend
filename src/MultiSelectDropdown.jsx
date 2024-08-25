import React from 'react';

function MultiSelectDropdown({ options, selectedOptions, setSelectedOptions }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions(
      selectedOptions.includes(value)
        ? selectedOptions.filter((opt) => opt !== value)
        : [...selectedOptions, value]
    );
  };

  return (
    <div>
      <label>Select options:</label>
      <select multiple onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MultiSelectDropdown;
