// src/pages/Dashboard.tsx
import React from 'react';
import { useUserStore } from '../stores/userStore';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
            Logout
          </button>
        </div>
      ) : (
        <p>Please sign in to view your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
