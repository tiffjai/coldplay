import React, { useState } from 'react'; // Ensure React and useState are imported

const AddSongForm = ({ onAddSong }) => {
  // Initialize the formData state with useState
  const [formData, setFormData] = useState({
    name: '',
    releaseDate: '',
    coverArt: '',
  });

  // Handle input changes and update the formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled before calling onAddSong
    if (formData.name && formData.releaseDate && formData.coverArt) {
      onAddSong(formData);
      // Reset the formData state after submission
      setFormData({ name: '', releaseDate: '', coverArt: '' });
    }
  };

  // Return the form JSX
  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <h2>Add a New Song</h2>
      <input
        type="text"
        name="name"
        placeholder="Song Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="releaseDate"
        value={formData.releaseDate}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="coverArt"
        placeholder="Cover Art URL"
        value={formData.coverArt}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
