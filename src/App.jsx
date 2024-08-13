import { useState } from 'react';
import { ArtistInfo, SongList } from './components';

const App = () => {
  //State variable
  const [songs, setSongs] = useState([
{
  name: 'Yellow',
  releaseDate: '2000-06-26',
  coverArt: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yellow_cover_art.JPG'
},
{
  name: 'Viva La vida',
  releaseDate: '2008-05-25',
  coverArt: 'https://m.media-amazon.com/images/I/9145yafeO2L._UF894,1000_QL80_.jpg'
}

])
const handleAddSong = (songData) => {
  setSongs((prevSongs) => [...prevSongs, songData]);
}  
  return (
    <div className="container">
      <ArtistInfo />
      <SongList songs={songs} />
    </div>
  )
}
export default App;