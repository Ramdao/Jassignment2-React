import { useState, useEffect } from 'react';

const usePlayerData = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://jassignment1.onrender.com/api/players');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return { players, loading, error };
};

export default usePlayerData;
