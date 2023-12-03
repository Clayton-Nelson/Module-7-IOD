import React, { useState, useContext } from "react";

const CurrentPageContext = React.createContext();

export const CurrentPageProvider = (props) => {
  const [currentPage, setCurrentPage] = useState({page: "Home"});

  return (
    <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
      {props.children}
    </CurrentPageContext.Provider>
  );
};

export const useCurrentPageContext = () => {
  return useContext(CurrentPageContext);
};

