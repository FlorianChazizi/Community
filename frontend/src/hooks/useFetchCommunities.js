import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';

export const useFetchCommunities = () => {
  const { user } = useAuthContext();
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      if (!user) {
        console.error('User is not logged in');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://community-api-gamma.vercel.app/api/community', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch communities');
        }

        const data = await response.json();
        setCommunities(data);
      } catch (error) {
        console.error('Error fetching communities:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, [user]);

  return { communities, loading, error };
};
