import React from 'react';

const ProgressBar = ({ totalStories, currentStoryIndex }) => {
  const progress = ((currentStoryIndex + 1) / totalStories) * 100;

  return (
    <div className="global-progress-bar">
      <div
        className="progress"
        style={{
          width: `${progress}%`, // The progress will fill based on the current story index
          height: '5px',
          backgroundColor: "red",
        }}
      />
      <div className="segments">
        {[...Array(totalStories)].map((_, index) => (
          <div
            key={index}
            className={`segment ${index == currentStoryIndex ? 'filled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;