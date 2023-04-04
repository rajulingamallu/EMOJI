import React, { useState } from 'react';
import { ImAttachment } from 'react-icons/im';

const AttachmentIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleClick = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div>
      <ImAttachment onClick={handleClick} />
      {showIcons && (
        <div>
          <p> pictures </p>
          <p> videos </p>
          <p> file </p>
          <p> contact </p>
        </div>
      )}
    </div>
  );
};

export default AttachmentIcons;
