import React, { useRef } from 'react';

const AddStoryButton = ({ setStories }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;

        const newStory = {
          image: base64Image,
          timestamp: Date.now(),
        };

        const storedStories = JSON.parse(localStorage.getItem('stories')) || [];
        storedStories.push(newStory);
        localStorage.setItem('stories', JSON.stringify(storedStories));
        setStories(storedStories);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button className="add-story-btn" onClick={handleClick}>
        +
      </button>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default AddStoryButton;