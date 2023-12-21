import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Contextprovider from "./components/context/GlobalContext";

function App() {
  return (
    <Router>
      <Contextprovider>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Contextprovider>
    </Router>
  );
}

export default App;
