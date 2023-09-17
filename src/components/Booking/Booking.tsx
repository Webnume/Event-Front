import styled from "styled-components";
import BookingsContext from "../../context/BookingsContext";
import GLOBALS from "../../utils/constants";
import { useState, useContext } from "react";
import Price from "../Price/Price";
import api from "../../api/bookings";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import Portal from "../Portal/Portal";

interface BookingProps {
  price: string;
}

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
  width: fill-available;
  height: 148px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  padding: 1rem;
  @media screen and (max-width: 1050px) {
    max-width: unset;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    z-index: 1000;
    align-items: center;
  }
`;

const Button = styled.button<{ $bookedID: number | null }>`
  background-color: ${(props) =>
    props.$bookedID ? GLOBALS.COLORS.WHITE : GLOBALS.COLORS.LIME8};
  color: ${(props) => (props.$bookedID ? "red" : GLOBALS.COLORS.WHITE)};
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
  border: ${(props) => (props.$bookedID ? "1px solid red" : "none")};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.$bookedID ? GLOBALS.COLORS.LIME8 : "#314905"};
    color: ${GLOBALS.COLORS.WHITE};
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
  @media screen and (max-width: 1050px) {
    max-width: unset;
    width: 100%;
  }
`;

const ConfirmButton = styled.button`
  background-color: ${GLOBALS.COLORS.LIME8};
  color: ${GLOBALS.COLORS.WHITE};
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.8rem 1rem;
`;

const CancelButton = styled(ConfirmButton)`
  background-color: crimson;
  margin-left: 1rem;
`;

const GlobalWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 452px;
  flex: 1;
  max-width: 806px;
  width: 100%;
  @media screen and (max-width: 1050px) {
    max-width: 806px;
    flex: unset;
  }
`;

function Booking({ price }: BookingProps): JSX.Element {
  const [bookedID, setBookedID] = useState<number | null>(null);
  const {
    bookings,
    setBookings,
    bookingsFetchError,
    bookingsIsLoading,
    user,
    userFetchError,
    userIsLoading,
    isModalOpen,
    setModalIsOpen,
  } = useContext(BookingsContext);
  const { id } = useParams<{ id: string }>();

  const handleSubmit = async () => {
    const newUser = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      color: user?.color,
      avatar: user?.avatar,
    };
    const newBooking = {
      id: null,
      user: newUser,
      numberOfTickets: 1,
      userId: user?.id,
    };

    try {
      const response = await api.post(
        `${GLOBALS.API.BASE_URL}/bookings/`,
        newBooking
      );
      const allBookings = [...bookings, response.data];
      setBookings(allBookings as any);
      setBookedID(response.data.id);
      localStorage.setItem("booked", JSON.stringify(!bookedID));
      setModalIsOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/bookings/${id}`);
      const bookingsList = bookings.filter((booking) => booking.id !== id);
      setBookings(bookingsList as any);
      setBookedID(null);
      localStorage.removeItem("booked");
      setModalIsOpen(false);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }
  };

  // useEffect(() => {
  //   const bookedStoraged = JSON.parse(localStorage.getItem("booked"));
  //   bookedStoraged && setBookedID(bookedStoraged);
  // }, [bookedID]);

  return (
    <GlobalWrapper>
      <Portal>
        <Modal open={isModalOpen} onClose={() => setModalIsOpen(false)}>
          <h2>{bookedID ? "Annulation" : "Confirmation"} de la réservation</h2>
          <ConfirmButton
            onClick={bookedID ? () => handleDelete(bookedID) : handleSubmit}
          >
            Confirmer
          </ConfirmButton>
          <CancelButton onClick={() => setModalIsOpen(false)}>
            Annuler
          </CancelButton>
        </Modal>
      </Portal>
      <BookingWrapper>
        <Price detailPage>
          {bookedID ? "J'y vais! (1 Place réservée)" : price}
        </Price>
        <Button onClick={() => setModalIsOpen(true)} $bookedID={bookedID}>
          {bookedID ? "Modifier ma réservation" : "Réserver"}
        </Button>
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
