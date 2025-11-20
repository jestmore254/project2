import React, { useEffect, useState } from 'react';

function Education() {
  const [content,setContent] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/education`)
      .then(res=>res.json())
      .then(data=>setContent(data));
  },[]);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {content.map(c => (
        <div key={c._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{c.title}</h3>
          <p>Type: {c.type}</p>
          <p>{c.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Education;
