import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import GLOBALS from "../utils/constants";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  color: string;
  avatar: { url: string };
}

interface Bookings {
  id: number;
  user: User;
  numberOfTickets: number;
  userId: number;
}

interface ContextType {
  bookings: Bookings[];
  setBookings: (bookings: []) => void;
  bookingsFetchError: string;
  bookingsIsLoading: boolean;
  user: User;
  userFetchError: string;
  userIsLoading: boolean;
  isModalOpen: boolean;
  setModalIsOpen: (isModalOpen: boolean) => void;
};

const BookingsContext = createContext<ContextType>({} as ContextType);

export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState([]);
  const [isModalOpen, setModalIsOpen] = useState(false);

  const {
    data: bookingsData,
    fetchError: bookingsFetchError,
    isLoading: bookingsIsLoading,
  } = useAxiosFetch(`${GLOBALS.API.BASE_URL}/bookings`);

  useEffect(() => {
    setBookings(bookingsData);
  }, [bookingsData]);

  const {
    data: userData,
    fetchError: userFetchError,
    isLoading: userIsLoading,
  } = useAxiosFetch(`${GLOBALS.API.BASE_URL}/user`);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <BookingsContext.Provider
      value={{
        bookings,
        setBookings,
        bookingsFetchError,
        bookingsIsLoading,
        user,
        userFetchError,
        userIsLoading,
        isModalOpen,
        setModalIsOpen,
      }}
    >
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContext;
