// src/components/Dashboard.js

import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import CommunityCard from '../components/CommunityCard';
import { useNavigate } from 'react-router-dom';
import { useFetchCommunities } from '../hooks/useFetchCommunities'; 

const Dashboard = () => {
  const { user } = useAuthContext();
  const { communities, loading, error } = useFetchCommunities(); // Use the custom hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/createCommunity');
  };

  return (
    <div className=" relative  flex py-10 items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        {user ? (
          <div>
            <h3 className="text-xl font-bold mb-4">Welcome, {user.username}</h3>
            <p>Email: {user.email}</p>
            <div className="mt-6 flex justify-between">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
                Discover Communities
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700"
                onClick={handleClick}
              >
                Create Community
              </button>
            </div>
            <div className="mt-6">
              {loading ? (
                <p>Loading communities...</p>
              ) : error ? (
                <p>Error loading communities: {error}</p>
              ) : communities.length === 0 ? (
                <p>
                  There are no communities yet.{' '}
                  <span
                    className="hover:underline hover:font-semibold cursor-pointer"
                    onClick={handleClick}
                  >
                    Create your own!
                  </span>
                </p>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Communities</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {communities.map((community) => (
                    <CommunityCard key={community._id} community={community} />
                  ))}
                </div>
                </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
