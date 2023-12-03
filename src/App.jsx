import React from "react";
import "./App.css";
import Exercise from "../components/Exercise";
import BitcoinRates from "../components/BitcoinRates";
import BitcoinRates2 from "../components/BitcionRates2";
import BitcoinRates3 from "../components/BitcoinRates3";
import { EmojiProvider } from "../context/EmojiContext";
import Emoji from "../components/Emoji";
import AppRoutes from "../routes/AppRoutes";
import NavBar from "../components/NavBar";
import MyThemeProvider from "../context/MyThemeContext";
import ButtonAppBar from "../MUI/AppBar";
import { CurrentPageProvider } from "../context/CurrentPageContext";

function App() {
  return (
    <>
      <CurrentPageProvider>
        <EmojiProvider>
          <MyThemeProvider>
            <Exercise
              number="1"
              description="
              1.Using the following starter code, complete the BitcoinRates component to fetch and display the current price of Bitcoin in the selected currency. 
              2.Use a useEffect hook with cleanup and appropriate dependencies."
            />
            <BitcoinRates />
            <Exercise
              number="2"
              description="
              1.Update your BitcoinRates component to use a custom hook for extracting the external data synchronization process."
            />
            <BitcoinRates2 />
            <Exercise
              number="3"
              description="
              1.Modify the Emoji component from Module 6 Exercise 3 and create a context for storing the current emoji/mood. 
              2.Display the current emoji from the BitcoinRates component, and make sure it updates when clicking the 'Change Mood' button."
            />
            <Emoji />
            <Exercise
              number="4"
              description="
              1.Create an app with 3 different pages: Home, Login and Bitcoin Rates. 
              2.Use existing components to add content to each page. 
              3.Include a navbar to navigate between pages."
            />
            <BitcoinRates3 />
            <NavBar />
            <AppRoutes />
            <br />
            <Exercise
              number="5"
              description="
              1.Update your solution for Exercise 4 to use MUI components for styling. 
              2.Use the AppBar for navigation and MUI form components for any form inputs"
            />
            <ButtonAppBar />
            <AppRoutes />
          </MyThemeProvider>
        </EmojiProvider>
      </CurrentPageProvider>
    </>
  );
}

export default App;
