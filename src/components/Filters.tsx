import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type FiltersProps = {
  setNewSearch: Function;
  search: string;
};

function Filters({ setNewSearch, search }: FiltersProps) {
  const EventsStatusWrapper = styled.section`
    display: flex;
    justify-content: start;
    padding: 0.4rem;
    margin-bottom: 1rem;
    background-color: ${GLOBALS.COLORS.WHITE};
    width: fit-content;
    border-radius: 0.5rem;
  `;

  const Button = styled.span`
    padding: 0.5rem 1rem;
    background: ${GLOBALS.COLORS.WHITE};
    color: ${GLOBALS.COLORS.GREY5};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: ${GLOBALS.COLORS.BLUE4};
      color: ${GLOBALS.COLORS.BLUE6};
    }
  `;

  const buttons = ["A venir", "Passés"];

  const clickedButtonHandler = (name: string) => {
    name === "A venir" ? setNewSearch("active") : setNewSearch("archived");
  };

  return (
    <EventsStatusWrapper>
      {buttons.map((buttonName) => (
        <Button
          key={buttonName}
          onClick={() => clickedButtonHandler(buttonName)}
          style={{
            backgroundColor:
              (search === "active" && buttonName === "A venir") ||
              (search === "archived" && buttonName === "Passés")
                ? GLOBALS.COLORS.BLUE4
                : GLOBALS.COLORS.WHITE,
          }}
        >
          {buttonName}
        </Button>
      ))}
    </EventsStatusWrapper>
  );
}

export default Filters;
