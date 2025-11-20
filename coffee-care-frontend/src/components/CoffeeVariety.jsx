import React, { useEffect, useState } from 'react';

function AlertList() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/alerts`)
      .then(res => res.json())
      .then(data => setAlerts(data));
  }, []);

  return (
    <div className="space-y-2">
      {alerts.map(alert => (
        <div key={alert._id} className="bg-yellow-100 p-2 rounded border-l-4 border-yellow-400">
          {alert.message}
        </div>
      ))}
    </div>
  );
}

export default AlertList;
