import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ id, username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
           {/* Build your post card here */}
  
      <div className="post-header">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <div className="username">{username}</div>
      </div>

      <img src={imageUrl} alt={caption} className="post-image" />

      <div className="post-actions">
        <button
          className={`like-button ${likes > 0 ? 'liked' : ''}`}
          onClick={() => onLike(id)}
        >
          <Heart />
        </button>
        <div className="likes-count">
          {likes} {likes === 1 ? 'like' : 'likes'}
        </div>
      </div>


      <div className="post-caption">
        <span className="username">{username}</span> {caption}
      </div>
    </div>
  );
}

export default PostCard;
