import React from 'react';
import { useParams } from 'react-router-dom';
import useGamesData from '../../Games'; 
import './GameDetails.css';

// Component to display detailed information about a specific game
export default function GameDetail() {
  const { id } = useParams(); // Extract the game ID from the URL
  const { games, loading, error } = useGamesData(); // Get games data from the custom hook

  // Show loading message while fetching data
  if (loading) return <p className='Loadinginfo'>Loading game details...</p>;

  // Show error message if data fetching fails
  if (error) return <p className='Loadinginfo'>Error: {error}</p>;

  console.log('Game ID from URL:', id); 
  console.log('Games array:', games);

  // Find the game that matches the ID from the URL
  const game = games.find((g) => g._id === id); 

  // If game is not found, show fallback message
  if (!game) return <p>Game not found!</p>;

  // Format the release date to a readable string
  const formattedDate = new Date(game.release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Render the game details UI
  return (
    <div className="game-detail">
      {/* Game cover image */}
      <img src={game.image} alt={game.title} className="game-detail-image" />
      
      {/* Game content section */}
      <div className="game-detail-content">
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p><strong>Release Date:</strong> {formattedDate}</p>
        <p><strong>Genre:</strong> <span className="genre-badge">{game.genre}</span></p>
        <p><strong>Platform:</strong> {game.platform}</p>
      </div>
    </div>
  );
}
