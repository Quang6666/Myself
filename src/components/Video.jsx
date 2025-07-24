import React from 'react';
import Thumbnail from './Thumbnail';
import LikeButton from './LikeButton';

export default function Video({ video }) {
  return (
    <div className="video-card" style={{ background: '#f9f9f9', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16, marginBottom: 24 }}>
      <Thumbnail video={video} />
      <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 style={{ margin: '12px 0 4px' }}>{video.title}</h3>
        <p style={{ margin: 0 }}>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
