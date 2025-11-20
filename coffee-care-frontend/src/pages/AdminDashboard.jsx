import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [market, setMarket] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => res.json()).then(data => setUsers(data));

    fetch(`${import.meta.env.VITE_API_URL}/api/courses`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => res.json()).then(data => setCourses(data));

    fetch(`${import.meta.env.VITE_API_URL}/api/market`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => res.json()).then(data => setMarket(data));
  }, []);

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold">Users</h2>
        <ul className="list-disc ml-6">
          {users.map(u => <li key={u._id}>{u.name} ({u.role})</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Courses</h2>
        <ul className="list-disc ml-6">
          {courses.map(c => <li key={c._id}>{c.title} - {c.level}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Market Listings</h2>
        <ul className="list-disc ml-6">
          {market.map(m => <li key={m._id}>{m.farmerName} - {m.quantityKg}kg @ KES {m.pricePerKg}/kg</li>)}
        </ul>
      </section>
    </div>
  )
}

export default AdminDashboard;
