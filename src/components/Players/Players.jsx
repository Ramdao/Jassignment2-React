import React from 'react';
import usePlayerData from '../../Players'; // Custom hook to fetch player data
import './Players.css'; // Styles for the Players component
import { Link } from 'react-router-dom'; // To enable internal linking

// Functional component to display a list of players
export default function Players() {
  const { players, loading, error } = usePlayerData(); // Destructure loading state, error, and player data

  // Show loading state
  if (loading) return <p className='Loadinginfo'>Loading player info...</p>;
  
  // Show error if any occurred
  if (error) return <p className='Loadinginfo'>Error: {error}</p>;
  
  // Show fallback if no players are found
  if (!players || players.length === 0) return <p className='Loadinginfo'>No players found.</p>;

  return (
    <>
      <h2 className="player-title">Player List</h2> {/* Page title */}
      
      <div className="player-container"> {/* Container for all player cards */}
        {players.map((player) => (
          <div key={player.id} className="player-card"> {/* Each player card */}
            
            {/* Default avatar image */}
            <img
              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
              alt="PlayerIcon"
              className="player-image"
            />
            
            <div className="player-card-content"> {/* Content inside the card */}
              <ul className="list-style">
                
                {/* Player username */}
                <li><strong>{player.username}</strong></li>
                
                {/* Player's favorite games section */}
                <li>
                  <div className="game-inventory">
                    <strong>Game Inventory:</strong>
                    <div className="game-cards">
                      {/* Map through favorite games and link each to its detail page by title */}
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
                
                {/* Total hours played */}
                <li>Total Hours: {player.hours_played}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
