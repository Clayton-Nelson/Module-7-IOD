import React, { useContext, useState } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = (props) => {
    const [currentEmoji, setCurrentEmoji] = useState({mood:"😀"});

    return (
        <EmojiContext.Provider value={{currentEmoji, setCurrentEmoji}}>
            {props.children}
        </EmojiContext.Provider>
    );
};

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};