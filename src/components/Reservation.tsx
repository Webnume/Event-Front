import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type ReservationProps = {
  children: React.ReactNode;
};

function Reservation({ children }: ReservationProps) {
  const ReservationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 12px;
    background-color: ${GLOBALS.COLORS.WHITE};
    color: ${GLOBALS.COLORS.GREEN};
    font-size: 20px;
    font-weight: 600;
    width: 420px;
    height: 148px;
  `;

  const Button = styled.span`
    background-color: ${GLOBALS.COLORS.LIME8};
    color: ${GLOBALS.COLORS.WHITE};
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 400;
    width: 388px;
    height: 40px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <ReservationWrapper>
      {children}
      <Button>Réserver</Button>
    </ReservationWrapper>
  );
}

export default Reservation;
