import React, { useEffect, useState } from 'react';

function Factories() {
  const [factories,setFactories] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/factories`)
      .then(res=>res.json())
      .then(data=>setFactories(data));
  },[]);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {factories.map(f => (
        <div key={f._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{f.name}</h3>
          <p>Location: {f.location}</p>
          <p>Contact: {f.contact}</p>
        </div>
      ))}
    </div>
  )
}

export default Factories;
