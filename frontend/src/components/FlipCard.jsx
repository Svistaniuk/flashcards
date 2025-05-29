import React, { useState } from 'react';

function FlipCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div className="card-container" onClick={toggleFlip}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="card-face card-front">
          <p><strong>Q:</strong> {question}</p>
        </div>
        <div className="card-face card-back">
          <p><strong>A:</strong> {answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
