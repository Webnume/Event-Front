import EventsList from "./pages/EventsList";
import styled from "styled-components";
import EventDetails from "./pages/EventDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GLOBALS from "./utils/constants";
import { EventsProvider } from "./context/EventsContext";
import { BookingsProvider } from "./context/BookingsContext";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem 0;
  background: ${GLOBALS.COLORS.WHITE};
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const H1 = styled.h1`
  color: black;
  font-size: 30px;
  line-height: 38px;
  font-weight: 600;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <MainWrapper>
          <H1>Événements</H1>
        </MainWrapper>
        <EventsProvider>
          <BookingsProvider>
            <Routes>
              <Route path="/" element={<EventsList />} />
              <Route path="eventDetails/:id" element={<EventDetails />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </BookingsProvider>
        </EventsProvider>
      </Router>
    </div>
  );
}

export default App;
