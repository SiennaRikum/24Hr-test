import React, { useState } from 'react';
import Story from './Story';
import ProgressBar from './ProgressBar';
import AddStoryButton from './AddStoryButton';


const StoryList = ({ stories, setStories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const nextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <div className="story-container">
      {stories.length > 0 && (
        <>
          {/* Global progress bar */}
          <ProgressBar
            totalStories={stories.length}
            currentStoryIndex={currentStoryIndex}
          />

          <div className="story-viewer">
            <Story
              story={stories[currentStoryIndex]}
              onNext={nextStory}  // Pass nextStory function
              onPrev={prevStory}  // Pass prevStory function
            />
          </div>

          <div className="story-list">
            <AddStoryButton setStories={setStories} />

            {stories.map((story, index) => (
              <img
                key={index}
                src={story.image}
                alt="story thumbnail"
                className="story-thumbnail"
                onClick={() => setCurrentStoryIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StoryList;