import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './TopNav.css'; // Import styling for the navigation bar

// Functional component for the top navigation bar
export default function TopNav() {
  return (
    <nav className="navbar"> {/* Wrapper for the navigation bar */}
      <p className="game-store">Game VIEWER</p> {/* App title/logo */}
      <div className="nav-links"> {/* Container for navigation links */}
        <Link to="/players" className="nav-link">Players</Link> {/* Link to Players page */}
        <Link to="/games" className="nav-link">Games</Link> {/* Link to Games page */}
      </div>
    </nav>
  );
}
