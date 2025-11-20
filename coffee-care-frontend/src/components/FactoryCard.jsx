import React, { useEffect, useState } from 'react';

function CoopList() {
  const [coops, setCoops] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/coops`)
      .then(res => res.json())
      .then(data => setCoops(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coops.map(coop => (
        <div key={coop._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg">{coop.name}</h2>
          <p>{coop.location}</p>
        </div>
      ))}
    </div>
  );
}

export default CoopList;
