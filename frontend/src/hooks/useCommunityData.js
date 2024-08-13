// src/hooks/useCommunityData.js

import { useState, useEffect } from 'react';

export const useCommunityData = (communityName, user) => {
  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMember, setIsMember] = useState(false);
  const [joinLoading, setJoinLoading] = useState(false);

  useEffect(() => {
    const fetchCommunity = async () => {
      if (!user) {
        console.error('No user is logged in.');
        return;
      }

      try {
        const response = await fetch(`https://community-api-gamma.vercel.app/api/community/${communityName}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch community');
        }

        const data = await response.json();
        setCommunity(data);

        const userIsMember = data.c_members.some((member) => member._id === user.id);
        setIsMember(userIsMember);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunity();
  }, [communityName, user]);

  const joinCommunity = async () => {
    setJoinLoading(true);
    try {
      const response = await fetch(`https://community-api-gamma.vercel.app/api/community/join/${communityName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to join community');
      }

      const data = await response.json();
      setCommunity(data.community); // Ensure the response includes the updated community data
      setIsMember(true); // Update state to reflect membership
    } catch (err) {
      setError(err.message);
    } finally {
      setJoinLoading(false);
    }
  };

  return {
    community,
    loading,
    error,
    isMember,
    joinLoading,
    joinCommunity,
  };
};
