// Components/SearchSpecies.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchSpecies = () => {
  const [commonName, setCommonName] = useState('');
  const [speciesData, setSpeciesData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/searchSpecies', { common_name: commonName });
      setSpeciesData(response.data); // Update species data
    } catch (error) {
      console.error('Error fetching species:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Search for a Species</h1>
      <input
        type="text"
        value={commonName}
        onChange={(e) => setCommonName(e.target.value)}
        placeholder="Enter species name"
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded">Search</button>

      <ul>
        {speciesData.map((species) => (
          <li key={species.species_id}>{species.common_name} - {species.scientific_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSpecies;
