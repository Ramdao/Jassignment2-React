import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react'; 
import './App.css'; // Main stylesheet

// Importing components used in the application
import TopNav from './components/Header/TopNav'; // Top navigation bar
import Players from './components/Players/Players'; // Players list view
import Games from './components/Games/Games'; // Games list view
import GameDetail from './components/GameDetails/GameDetails'; // Game detail by ID
import GameDetailByName from './components/GameDetails/GameDetailsByName'; // Game detail by title
import Footer from './components/Footer/Footer'; // Footer component

function App() {
  

  return (
    <>
      <Router>
        {/* Navigation bar shown on all pages */}
        <TopNav />

        {/* Main routing section */}
        <Routes>
          {/* Route for players page */}
          <Route path="/players" element={<Players />} />

          {/* Route for games listing */}
          <Route path="/games" element={<Games />} />

          {/* Route to show game detail by ID */}
          <Route path="/game/:id" element={<GameDetail />} />

          {/* Route to show game detail by title */}
          <Route path="/game/title/:title" element={<GameDetailByName />} />

          {/* Default route (home) shows games */}
          <Route path="/" element={<Games />} />
        </Routes>
      </Router>

      {/* Footer displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;
