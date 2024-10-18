import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/ClientNav';
import SearchSpecies from '../Components/SearchSpecies';



const ClientDashboard = () => {
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [className, setClassName] = useState('');
  const [phylum, setPhylum] = useState('');
  const [kingdom, setKingdom] = useState('');
  const [speciesData, setSpeciesData] = useState([]);

  // Function to handle species search
  const handleSearch = async () => {
    const searchParams = {
      common_name: commonName,
      scientific_name: scientificName,
      class: className,
      phylum: phylum,
      kingdom: kingdom,
    };

    // Check if all fields are empty
    if (Object.values(searchParams).every(field => field === '')) {
      alert('Please fill at least one search field.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/searchSpecies', searchParams);
      setSpeciesData(response.data); // Set the retrieved species data
    } catch (error) {
      console.error('Error fetching species:', error);
      alert('There was an error fetching the species data.');
    }
  };

  return (
    <div>
    <Navbar />
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Client Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Search for Species</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Common Name"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Scientific Name"
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Phylum"
            value={phylum}
            onChange={(e) => setPhylum(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Kingdom"
            value={kingdom}
            onChange={(e) => setKingdom(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Results Section */}
      <h2 className="text-2xl font-semibold mb-2">Search Results</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Species ID</th>
              <th className="py-2 px-4 border-b">Common Name</th>
              <th className="py-2 px-4 border-b">Scientific Name</th>
              <th className="py-2 px-4 border-b">Class</th>
              <th className="py-2 px-4 border-b">Phylum</th>
              <th className="py-2 px-4 border-b">Kingdom</th>
            </tr>
          </thead>
          <tbody>
            {speciesData.map((species) => (
              <tr key={species.species_id}>
                <td className="py-2 px-4 border-b">{species.species_id}</td>
                <td className="py-2 px-4 border-b">{species.common_name}</td>
                <td className="py-2 px-4 border-b">{species.scientific_name}</td>
                <td className="py-2 px-4 border-b">{species.class}</td>
                <td className="py-2 px-4 border-b">{species.phylum}</td>
                <td className="py-2 px-4 border-b">{species.kingdom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ClientDashboard;
