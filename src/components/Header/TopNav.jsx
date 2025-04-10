import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Players from '../Players/Players';
import Games from '../Games/Games';
import GameDetail from '../GameDetails/GameDetails'; 
import GameDetailByName from '../GameDetails/GameDetailsByName';
import './TopNav.css';

export default function TopNav() {
  return (
    <Router>
    <nav className="navbar">
      <p className="game-store">Game VIEWER</p>
      <div className="nav-links">
      <Link to="/players" className="nav-link">Players</Link>
      <Link to="/games" className="nav-link">Games</Link>
      </div>
    </nav>

      <Routes>
        <Route path="/players" element={<Players />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<GameDetail />} /> 
        <Route path="/game/title/:title" element={<GameDetailByName />} />
        <Route path="/"  element={<Games />} />
      </Routes>
    </Router>
  );
}
