import React from 'react';
import useGamesData from '../../Games'; 
import './Games.css'; // CSS styling for the games grid
import { Link } from 'react-router-dom'; // For navigation to individual game pages
import { motion } from 'framer-motion'; // Animation library for smooth transitions

export default function Games() {
  const { games, loading, error } = useGamesData(); 

  // Show loading message while fetching data
  if (loading) return <p className='Loadinginfo'>Loading games...</p>;

  // Show error message if fetch fails
  if (error) return <p className='Loadinginfo'>Error: {error}</p>;

  return (
    <div className="games-container"> {/* Container for all game cards */}
      {games.map((game) => {
        // Format release date for display
        const formattedDate = new Date(game.release_date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return (
          // Link to the game detail page using game ID
          <Link to={`/game/${game._id}`} key={game._id} className="game-link">
            <motion.div
              className="game-card"
              initial={{ opacity: 0, y: 20 }} // Start with faded and slightly lowered card
              animate={{ opacity: 1, y: 0 }} // Animate to fully visible and aligned
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(0, 255, 255, 0.3)' }} // Hover effect
              transition={{ duration: 0.3, ease: 'easeInOut' }} // Smooth animation transition
            >
              {/* Game cover image */}
              <img src={game.image} alt={game.title} className="game-image" />

              {/* Content section with game info */}
              <div className="game-card-content">
                <ul className="list-style">
                  <li><strong>{game.title}</strong>: {game.description}</li>
                  <li>Release Date: {formattedDate}</li>
                  <li><span className="genre-badge">{game.genre}</span></li>
                </ul>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
