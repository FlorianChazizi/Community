import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const CreateCommunity = () => {
  const [c_name, setC_name] = useState('');
  const [c_description, setC_description] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const community = { c_name, c_description, c_creator_id: user._id };

    const response = await fetch('https://community-api-gamma.vercel.app/api/community/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(community),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      setIsLoading(false);
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Community</h2>
        <p></p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="c_name" className="block text-sm font-medium text-gray-700">Community Name</label>
            <input
              type="text"
              id="c_name"
              value={c_name}
              onChange={(e) => setC_name(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="c_description" className="block text-sm font-medium text-gray-700">Community Description</label>
            <textarea
              id="c_description"
              value={c_description}
              onChange={(e) => setC_description(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Community'}
          </button>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CreateCommunity;
