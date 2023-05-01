import styled from "styled-components";
import GLOBALS from "../utils/Globals";
import { useState } from "react";

type BookingProps = {
  children: React.ReactNode;
};

function Booking({ children }: BookingProps) {

 

  const GlobalWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2.4rem;
    gap: 1rem;
    height: 348px;
    max-width: 452px;
  `;

  const BookingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 12px;
    background-color: ${GLOBALS.COLORS.WHITE};
    font-size: 20px;
    font-weight: 600;
    max-width: 420px;
    /* width: 100%; */
    width: fill-available;
    height: 148px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
    padding: 1rem;
  `;

  const Button = styled.span`
    background-color: ${GLOBALS.COLORS.LIME8};
    color: ${GLOBALS.COLORS.WHITE};
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 400;
    max-width: 388px;
    width: 100%;
    height: 40px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: ${GLOBALS.COLORS.GREY6};
    }
  `;
  const CancellationPolicy = styled.section`
    background-color: ${GLOBALS.COLORS.WHITE};
    color: ${GLOBALS.COLORS.GREY7};
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
    max-width: 420px;
  `;

  return (
    <GlobalWrapper>
      <BookingWrapper>
        {children}
        <Button>Réserver</Button>
      </BookingWrapper>
      <CancellationPolicy>
        <span>Politique d’annulation et de remboursement</span>
        <p>
          Les annulations et remboursements peuvent s’effectuer jusqu’à la date
          de clôture des inscriptions soit jusqu’au 2 janvier 2021.
        </p>
      </CancellationPolicy>
    </GlobalWrapper>
  );
}

export default Booking;
