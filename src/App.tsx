import "./App.css";
import EventsList from "./pages/EventsList";
import styled from "styled-components";
import EventDetails from "./pages/EventDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GLOBALS from "./utils/Globals";


function App() {
  const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2rem;
    background: ${GLOBALS.COLORS.WHITE};
  `;

  const H1 = styled.h1`
    color: black;
    font-size: 30px;
    line-height: 38px;
    font-weight: 600;
  `;

  return (
    <BrowserRouter  >
    <MainWrapper>
      <H1>Événements</H1>
      {/* <Events /> */}
      {/* <EventDetails /> */}
    </MainWrapper>
      <Routes>
        <Route path="/" element={<EventsList/>} />
        <Route path="/eventDetails/:eventID" element={<EventDetails/>} />
       {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
