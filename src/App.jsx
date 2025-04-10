import { useState } from 'react'

import './App.css'
import TopNav from './components/Header/TopNav';


function App() {
  const [count, setCount] = useState(0)

  return (
    <TopNav />
    
  );
}

export default App
