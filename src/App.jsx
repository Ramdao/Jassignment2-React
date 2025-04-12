import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import TopNav from './components/Header/TopNav';
import Players from './components/Players/Players';
import Games from './components/Games/Games';
import GameDetail from './components/GameDetails/GameDetails';
import GameDetailByName from './components/GameDetails/GameDetailsByName';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <TopNav />
      <Routes>
        <Route path="/players" element={<Players />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<GameDetail />} /> 
        <Route path="/game/title/:title" element={<GameDetailByName />} />
        <Route path="/" element={<Games />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
