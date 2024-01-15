import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import {Navbar} from "./components";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2bc875',
      contrastText: '#fff'
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
