import "./App.css";
import Events from "./pages/Events";
import styled from "styled-components";

function App() {
  const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 4em;
    background: white;
    border: 1px solid #eaeaea;
  `;

  const H1 = styled.h1`
    color: black;
    font-size: 30px;
    line-height: 38px;
    font-weight: 600;
  `;

  return (
    <MainWrapper>
      <H1>Événements</H1>
      <Events />
    </MainWrapper>
  );
}

export default App;
