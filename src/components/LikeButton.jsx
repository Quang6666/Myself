import React, { useState } from 'react';

export default function LikeButton({ video }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(video.likes || 0);

  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <button
      style={{
        marginTop: 12,
        padding: '8px 16px',
        borderRadius: 4,
        border: 'none',
        background: liked ? '#ff5252' : '#eee',
        color: liked ? '#fff' : '#333',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
      onClick={handleLike}
    >
      {liked ? 'Đã thích' : 'Thích'} ({count})
    </button>
  );
}
