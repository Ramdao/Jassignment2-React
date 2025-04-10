import React from 'react';
import { useParams } from 'react-router-dom';
import useGamesData from '../../Games';
import './GameDetails.css';

export default function GameDetail() {
  const { id } = useParams(); 
  const { games, loading, error } = useGamesData(); 

  if (loading) return <p>Loading game details...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log('Game ID from URL:', id); 
  console.log('Games array:', games);

  
  const game = games.find((g) => g._id === id); 

  if (!game) return <p>Game not found!</p>;

  const formattedDate = new Date(game.release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="game-detail">
      <img src={game.image} alt={game.title} className="game-detail-image" />
      <div className="game-detail-content">
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p><strong>Release Date:</strong> {formattedDate}</p>
        <p><strong>Genre:</strong> {game.genre}</p>
        <p><strong>Platform:</strong> {game.platform}</p>
      </div>
    </div>
  );
}
