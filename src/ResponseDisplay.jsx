import React from 'react';

function ResponseDisplay({ response, selectedOptions }) {
  const filteredResponse = response.filter((item) =>
    selectedOptions.includes(item.type)
  );

  return (
    <div>
      <h2>Response:</h2>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
}

export default ResponseDisplay;
