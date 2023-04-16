import styled from "styled-components";
import Button from "./Button";

function Filters() {
  const EventsStatusWrapper = styled.section`
    display: flex;
    justify-content: start;
    padding: .4rem;
    margin-bottom: 1rem;
    background-color: white;
    width: fit-content;
    border-radius: 0.5rem;
  `;

  return (
    <EventsStatusWrapper>
      <Button>A venir</Button>
      <Button>Passés</Button>
    </EventsStatusWrapper>
  );
}

export default Filters;
