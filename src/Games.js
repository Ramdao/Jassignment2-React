import { useState, useEffect } from 'react';

const useGamesData = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://jassignment1.onrender.com/api/games');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } 
        setLoading(false);
      
    };

    fetchGames();
  }, []);

  return { games, loading, error };
};

export default useGamesData;