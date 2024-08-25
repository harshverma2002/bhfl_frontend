import React, { useState } from 'react';
import InputForm from './InputForm';
import MultiSelectDropdown from './MultiSelectDropdown';
import ResponseDisplay from './ResponseDisplay';

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [isValidJson, setIsValidJson] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [response, setResponse] = useState(null);

  const fetchResponse = async () => {
    try {
      const res = await fetch('https://bfhl-snowy.vercel.app/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div>
      <h1>21BEC1319</h1>
      <InputForm setJsonData={setJsonData} setIsValidJson={setIsValidJson} />
      {isValidJson && (
        <>
          <MultiSelectDropdown
            options={['Alphabets', 'Numbers', 'Highest lowercase alphabet']}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <button onClick={fetchResponse}>Fetch Response</button>
        </>
      )}
      {response && (
        <ResponseDisplay response={response} selectedOptions={selectedOptions} />
      )}
    </div>
  );
}

export default App;
