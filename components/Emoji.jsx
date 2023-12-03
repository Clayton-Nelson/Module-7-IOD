import React from "react";
import { useEmojiContext } from "../context/EmojiContext";

function Emoji() {
  const {currentEmoji, setCurrentEmoji} = useEmojiContext();

  const changeMood = () => {
    if (currentEmoji.mood == "😀") {
        setCurrentEmoji({mood: "☹️"});
    } else if (currentEmoji.mood == "☹️") {
        setCurrentEmoji({mood: "😀"});
    }
  };

  return (
    <>
      <h2>Current Emoji: {currentEmoji.mood}</h2>
      <button onClick={changeMood}>Change Emoji</button>
    </>
  );
}

export default Emoji;