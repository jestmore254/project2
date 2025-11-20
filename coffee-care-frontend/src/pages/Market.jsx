import React, { useEffect, useState } from 'react';

function Market() {
  const [listings,setListings] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/market`)
      .then(res=>res.json())
      .then(data=>setListings(data));
  },[]);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map(l => (
        <div key={l._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{l.farmerName}</h3>
          <p>Variety: {l.coffeeVariety?.name}</p>
          <p>Quantity: {l.quantityKg}kg</p>
          <p>Price: KES {l.pricePerKg}/kg</p>
          <p>Location: {l.location}</p>
        </div>
      ))}
    </div>
  )
}

export default Market;
