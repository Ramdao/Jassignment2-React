import React from 'react';
import usePlayerData from '../../Players';
import './Players.css';
import { Link } from 'react-router-dom';

export default function Players() {
  const { players, loading, error } = usePlayerData();

  if (loading) return <p>Loading player info...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!players || players.length === 0) return <p>No players found.</p>;

  return (
    <>
      <h2 className="player-title">Player List</h2>
      <div className="player-container">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
              alt="PlayerIcon"
              className="player-image"
            />
            <div className="player-card-content">
              <ul className="list-style">
                <li><strong>{player.username}</strong></li>
                <li>
                  <div className="game-inventory">
                    <strong>Game Inventory:</strong>
                    <div className="game-cards">
                      {player.favorite_games.map((game, index) => (
                        <Link
                        to={`/game/title/${encodeURIComponent(game)}`}
                        key={index}
                        className="game-card"
                      >
                        <p>{game}</p>
                      </Link>
                    ))}
                    </div>
                  </div>
                </li>
                <li>Total Hours: {player.hours_played}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
