// import React, { useState } from "react";
// import EmojiPicker from "emoji-picker-react";

// function Emoji() {
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const handleEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//   };

//   return (
//     <div>
//       {chosenEmoji && (
//         <span>You chose: {chosenEmoji.emoji}</span>
//       )}
//       <EmojiPicker onEmojiClick={handleEmojiClick} />
//     </div>
//   );
// }
// export default Emoji;
 import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function Emoji() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    setChosenEmoji(emojiObject);
  };

  const handleSendClick = () => {
    if (chosenEmoji) {
      alert(`Sending ${chosenEmoji.emoji}...`);
      setChosenEmoji(null);
    } else {
      alert("Please choose an emoji before sending.");
    }
  };

  return (
    <div>
      {chosenEmoji && (<span>You chose: {chosenEmoji.emoji}</span>)}
      <EmojiPicker onEmojiClick={handleEmojiClick} />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default Emoji;
