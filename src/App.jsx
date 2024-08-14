import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArtistInfo, SongList, AddSongForm } from './components';

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
  const [songs, setSongs] = useState([
    {
      name: 'Yellow',
      releaseDate: '2000-06-26',
      coverArt: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yellow_cover_art.JPG'
    },
    {
      name: 'Viva La Vida',
      releaseDate: '2008-05-25',
      coverArt: 'https://m.media-amazon.com/images/I/9145yafeO2L._UF894,1000_QL80_.jpg'
    }
  ]);

  const handleAddSong = (songData) => {
    setSongs((prevSongs) => [...prevSongs, songData]);
  };

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<h2>TIFFJAI PICKS</h2>} />
          <Route path="/artist" element={<ArtistInfo />} />
          <Route path="/songs" element={<SongList songs={songs} />} />
          <Route path="/songs/add" element={<AddSongForm onAddSong={handleAddSong} />} />
          <Route path="/contact" element={<div>Contacts: tiffanieho@outlook.com </div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
