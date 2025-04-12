import React from 'react';
import { useParams } from 'react-router-dom';
import useGamesData from '../../Games'; 
import './GameDetails.css'; // Styling for game details view

// Component to show game details by matching the title from the URL
export default function GameDetailByName() {
  const { title } = useParams(); 
  const { games, loading, error } = useGamesData(); 

  // Display loading message while data is being fetched
  if (loading) return <p className='Loadinginfo'>Loading...</p>;

  // Display error message if there’s a problem fetching data
  if (error) return <p className='Loadinginfo'>Error: {error}</p>;

  // Find the game whose title matches the URL parameter (case-insensitive)
  const game = games.find(g => g.title.toLowerCase() === decodeURIComponent(title).toLowerCase());

  // Show a message if the game wasn't found
  if (!game) return <p>Game not found!</p>;

  // Render the game details UI
  return (
    <div className="game-detail">
      {/* Game cover image */}
      <img src={game.image} alt={game.title} className="game-detail-image" />
      
      {/* Game info section */}
      <div className="game-detail-content">
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p><strong>Release Date:</strong> {new Date(game.release_date).toLocaleDateString()}</p>
        <p><strong>Genre:</strong> <span className="genre-badge">{game.genre}</span></p>
        <p><strong>Platform:</strong> {game.platform}</p>
      </div>
    </div>
  );
}
