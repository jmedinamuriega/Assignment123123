// src/App.tsx
import React, { useState } from 'react';
import Location from './components/locations';

const App: React.FC = () => {
  const [locationId, setLocationId] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationId(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <h1>Location Finder</h1>
      <input
        type="number"
        placeholder="Enter location ID"
        onChange={handleInputChange}
      />
      {locationId && <Location id={locationId} />}
    </div>
  );
};

export default App;
