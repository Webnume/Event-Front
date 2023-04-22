import styled from "styled-components";
import { useState } from "react";
import GLOBALS from "../utils/Globals";

type FiltersProps = {
  setNewSearch: Function;
};

function Filters({ setNewSearch }: FiltersProps) {
  const EventsStatusWrapper = styled.section`
    display: flex;
    justify-content: start;
    padding: 0.4rem;
    margin-bottom: 1rem;
    background-color: white;
    width: fit-content;
    border-radius: 0.5rem;
  `;

  const Button = styled.span`
    padding: 0.5rem 1rem;
    background: white;
    color: ${GLOBALS.COLORS.GREY5};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: ${GLOBALS.COLORS.BLUE4};
      color: ${GLOBALS.COLORS.BLUE6};
    }
  `;
  const [activeButton, setActiveButton] = useState("A venir");

  const clickedButtonHandler = (name: string) => {
    setActiveButton(name);

    name === "A venir" ? setNewSearch("active") : setNewSearch("archived");
  };

  const buttons = ["A venir", "Passés"];

  return (
    <EventsStatusWrapper>
      {buttons.map((buttonName) => (
        <Button
          key={buttonName}
          onClick={() => clickedButtonHandler(buttonName)}
          style={{
            backgroundColor:
              buttonName === activeButton ? GLOBALS.COLORS.BLUE4 : "white",
          }}
        >
          {buttonName}
          {activeButton}
        </Button>
      ))}
    </EventsStatusWrapper>
  );
}

export default Filters;
