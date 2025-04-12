import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './TopNav.css';

export default function TopNav() {
  return (
    <nav className="navbar">
      <p className="game-store">Game VIEWER</p>
      <div className="nav-links">
        <Link to="/players" className="nav-link">Players</Link>
        <Link to="/games" className="nav-link">Games</Link>
      </div>
    </nav>
  );
}
