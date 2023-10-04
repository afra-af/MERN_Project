import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container= styled.div`
display:flex;
`;

const Main= styled.div`
flex:7;
background-color: ${({theme})=> theme.bg};
`;

const Wrapper= styled.div`\\
padding-top: 22px;
  padding-right: 96px;
  padding-bottom: 22px;
  padding-left: 96px;
`;


function App() {
  const [darkMode, setDarkMode]=useState(true)
  return (
    //set deafult theme 
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
     <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
     <Main>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="video">
          <Route path=":id" element={<Video/>}/>
        </Route>
        </Route>
        </Routes>
      </Wrapper>
     </Main>
     </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
