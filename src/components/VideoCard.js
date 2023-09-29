import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  if (!info || !info.snippet || !info.snippet.thumbnails) {
    return null;
  }

  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="video-card">
      <div className="thumbnail">
        <img
          className="video"
          src={thumbnails.medium.url}
          alt="video"
          width={thumbnails.medium.width}
          height={thumbnails.medium.height}
        />
      </div>
      <div className="video-details">
        <h2 className="video-title">{title}</h2>
        <p className="video-channel">{channelTitle}</p>
        <div className="video-info">
          <p className="video-views">{statistics.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
