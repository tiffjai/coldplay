import { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    }

    return (
        <button
        onClick={toggleLike}
        className={`like-button ${liked ? 'liked' : ''}`}
        >
            {liked ? 'Unlike' : 'Like'}
        </button>    
        )
}

export default LikeButton;