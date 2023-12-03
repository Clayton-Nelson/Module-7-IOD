import React from "react";

function Exercise(props) {
  const insertLineBreaks = (description) => { {/*This function maps the words in props.description then adds a line break every 7 words.*/} 
    const words = description.split(" ");     {/*this is to make the page look neater instead of stretched out*/} 
    const updatedDescription = words.map((word, index) => {
      const space = index !== words.length - 1 ? " " : "";
      if ((index + 1) % 7 === 0) {
        return (
          <span key={index}>
            {word}
            <br />
          </span>
        );
      }
      return word + space;
    });
    return updatedDescription;
  };
  return (
    <>
      <h1>Exercise: {props.number}</h1>
      <p>Description: {insertLineBreaks(props.description)}</p>
    </>
  );
}

export default Exercise;
