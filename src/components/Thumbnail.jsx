import React from 'react';

export default function Thumbnail({ video }) {
  return (
    <img
      src={video.thumbnail || 'https://via.placeholder.com/320x180?text=No+Thumbnail'}
      alt={video.title}
      style={{ width: '100%', height: 'auto', borderRadius: 6 }}
    />
  );
}
