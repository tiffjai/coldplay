import React, { useContext } from 'react';
import { MusicContext } from '../MusicContext';
import LikeButton from './LikeButton';

const SongList = () => {
    const { songs } = useContext(MusicContext);  // Use context to get songs

    return (
        <div className="song-list">
            <h2>Da Song List</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className="song-item">
                        <img src={song.coverArt} alt={`${song.name} cover`} className="cover-art" />
                        <div>
                            <strong>{song.name}</strong> - {song.releaseDate}
                        </div>
                        <LikeButton />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
