import React, { useState, useEffect } from 'react';
import StoryList from './StoryList';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem('stories')) || [];
    setStories(storedStories);
    const interval = setInterval(() => removeExpiredStories(storedStories), 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  const removeExpiredStories = (storedStories) => {
    const updatedStories = storedStories.filter(
      (story) => Date.now() - story.timestamp < 24 * 60 * 60 * 1000
    );
    if (updatedStories.length !== storedStories.length) {
      localStorage.setItem('stories', JSON.stringify(updatedStories));
      setStories(updatedStories);
    }
  };

  return (
    <div className="App">
      <StoryList stories={stories} setStories={setStories} />
      
    </div>
  );
}

export default App;