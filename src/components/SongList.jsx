const SongList = ({ songs }) => {
    return (
        <div className="song-list">
            <h2>Da Song List</h2>   
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className="song-item">
                        <img src={song.coverArt} alt={`${song.name} conver`} className="cover-art" />
                    <div>
                        <strong>{song.name}</strong> - {song.releaseDate}
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SongList;