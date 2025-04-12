import React from 'react';
import useGamesData from '../../Games';
import './Games.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

export default function Games() {
  const { games, loading, error } = useGamesData();

  if (loading) return <p className='Loadinginfo'>Loading games...</p>;
  if (error) return <p className='Loadinginfo'>Error: {error}</p>;

  return (
    <div className="games-container">
      {games.map((game) => {
        const formattedDate = new Date(game.release_date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return (
          <Link to={`/game/${game._id}`} key={game._id} className="game-link">
            <motion.div
              className="game-card"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(0, 255, 255, 0.3)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }} 
            >
              <img src={game.image} alt={game.title} className="game-image" />
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
