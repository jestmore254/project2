import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleLogin=async()=>{
    const res=await fetch(`${import.meta.env.VITE_API_URL}/api/login`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email,password})
    });
    const data=await res.json();
    if(data.token){
      localStorage.setItem('token',data.token);
      localStorage.setItem('role',data.role);
      if(data.role==='farmer') navigate('/farmer-dashboard');
      if(data.role==='admin') navigate('/admin-dashboard');
      if(data.role==='expert') navigate('/expert-dashboard');
    } else alert(data.error);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border mb-2 rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border mb-4 rounded"/>
        <button onClick={handleLogin} className="bg-green-600 text-white p-2 rounded w-full">Login</button>
      </div>
    </div>
  )
}

export default LoginPage;
