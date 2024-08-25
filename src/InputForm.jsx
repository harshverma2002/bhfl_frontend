import React, { useState } from 'react';

function InputForm({ setJsonData, setIsValidJson }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(input);
      setJsonData(parsedJson);
      setIsValidJson(true);
    } catch (error) {
      setIsValidJson(false);
      alert('Invalid JSON format');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON'
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
