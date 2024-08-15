import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { ArtistInfo, SongList, AddSongForm } from './components';
import { MusicProvider } from './MusicContext';  // Import the MusicProvider

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/artist">Artist Info</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/songs/add">Add Song</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

const App = () => {
  return (
    <MusicProvider>  {/* Wrap the app with MusicProvider */}
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<h2>TIFFJAI PICKS</h2>} />
            <Route path="/artist" element={<ArtistInfo />} />
            <Route path="/songs" element={<SongList />} />  {/* No need to pass songs as props */}
            <Route path="/songs/add" element={<AddSongForm />} />  {/* Context handles adding songs */}
            <Route path="/contact" element={<div>Contacts: tiffanieho@outlook.com </div>} />
          </Routes>
        </div>
      </Router>
    </MusicProvider>
  );
};

export default App;
