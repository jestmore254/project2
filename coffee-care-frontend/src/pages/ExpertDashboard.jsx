import React, { useState } from 'react';

function ExpertDashboard() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');
  const [level, setLevel] = useState('beginner');

  const token = localStorage.getItem('token');

  const handleSubmit = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/courses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, description: desc, content, level })
    });
    const data = await res.json();
    if(data._id){
      alert('Course added successfully');
      setTitle(''); setDesc(''); setContent(''); setLevel('beginner');
    } else alert(data.error);
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Expert Dashboard</h1>
      <input type="text" placeholder="Course Title" value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-2 border rounded"/>
      <textarea placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} className="w-full p-2 border rounded"></textarea>
      <input type="text" placeholder="Content URL" value={content} onChange={e=>setContent(e.target.value)} className="w-full p-2 border rounded"/>
      <select value={level} onChange={e=>setLevel(e.target.value)} className="w-full p-2 border rounded">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={handleSubmit} className="bg-green-600 text-white p-2 rounded w-full">Add Course</button>
    </div>
  )
}

export default ExpertDashboard;
