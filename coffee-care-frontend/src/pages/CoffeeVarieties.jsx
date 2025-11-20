import React, { useEffect, useState } from 'react';

function CoffeeVarieties() {
  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/coffee-varieties`)
      .then(res => res.json())
      .then(data => setVarieties(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {varieties.map(v => (
        <div key={v._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{v.name}</h3>
          <p>Growth Duration: {v.growthDurationMonths} months</p>
          <p>Climate: {v.suitableClimate}</p>
          <p>Fertilizers: {v.recommendedFertilizers.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default CoffeeVarieties;
