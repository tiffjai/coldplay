import React, { createContext, useState } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [songs, setSongs] = useState([
        {
            name: 'Yellow',
            releaseDate: '2000-06-26',
            coverArt: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yellow_cover_art.JPG',
        },
        {
            name: 'Viva La Vida',
            releaseDate: '2008-05-25',
            coverArt: 'https://m.media-amazon.com/images/I/9145yafeO2L._UF894,1000_QL80_.jpg',
        }
    ]);

    const handleAddSong = (songData) => {
        setSongs((prevSongs) => [...prevSongs, songData]);
    };

    return (
        <MusicContext.Provider value={{ songs, handleAddSong }}>
            {children}
        </MusicContext.Provider>
    );
};
