import React, { useEffect, useState } from 'react';

function Counties() {
  const [counties, setCounties] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/counties`)
      .then(res=>res.json())
      .then(data=>setCounties(data));
  },[]);

  return (
    <div className="p-4 space-y-4">
      {counties.map(c => (
        <div key={c._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{c.name}</h3>
          <p>Coffee Varieties: {c.coffeeVarieties.map(v=>v.name).join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default Counties;
