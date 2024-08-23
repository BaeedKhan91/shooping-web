import React, { useState } from 'react';
import './footer.css'

const ReadMore = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : text.substring(0, maxLength) + (text.length > maxLength ? '...' : '')}
      {text.length > maxLength && (
        <button onClick={handleToggle} className='readMore'>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
      </p>
    </div>
  );
};

export default ReadMore;