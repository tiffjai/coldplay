import React, { useState, useContext } from 'react';
import { MusicContext } from '../MusicContext';

const AddSongForm = () => {
    const [name, setName] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [coverArt, setCoverArt] = useState('');
    const { handleAddSong } = useContext(MusicContext);  // Use context to add a song

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddSong({ name, releaseDate, coverArt });
        setName('');
        setReleaseDate('');
        setCoverArt('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Song Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Cover Art URL"
                value={coverArt}
                onChange={(e) => setCoverArt(e.target.value)}
            />
            <button type="submit">Add Song</button>
        </form>
    );
};

export default AddSongForm;
