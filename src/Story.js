import React, { useEffect, useState } from 'react';

const Story = ({ story, onNext, onPrev }) => {
  const [timeLeft, setTimeLeft] = useState(3); // Story duration (3 seconds)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1); // Decrement time left by 1 second
      }, 1000);
      
      return () => clearInterval(timer); // Cleanup interval when component unmounts or timeLeft changes
    } else {
      setTimeLeft(3);
      onNext(); // Go to next story when the time expires
    }
  }, [timeLeft, onNext]);

  return (
    <div className="story">
      <img src={story.image} alt="Story" className="story-image" />      
    </div>
  );
};

export default Story;