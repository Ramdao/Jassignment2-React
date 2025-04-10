import React from 'react';
import { useParams } from 'react-router-dom';
import useGamesData from '../../Games';
import './GameDetails.css';



export default function GameDetailByName() {
  const { title } = useParams();
  const { games, loading, error } = useGamesData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const game = games.find(g => g.title.toLowerCase() === decodeURIComponent(title).toLowerCase());

  if (!game) return <p>Game not found!</p>;

  return (
    <div className="game-detail">
      <img src={game.image} alt={game.title} className="game-detail-image" />
      <div className="game-detail-content">
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p><strong>Release Date:</strong> {new Date(game.release_date).toLocaleDateString()}</p>
        <p><strong>Genre:</strong> <span className="genre-badge">{game.genre}</span></p>
      </div>
    </div>
  );
}
