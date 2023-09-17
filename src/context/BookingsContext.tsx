import { createContext, useState, useEffect, useMemo } from "react";
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

interface BookingsContextType {
  bookings: Bookings[];
  setBookings: (bookings: []) => void;
  bookingsFetchError: string | null;
  bookingsIsLoading: boolean;
  user: User;
  userFetchError: string | null;
  userIsLoading: boolean;
  isModalOpen: boolean;
  setModalIsOpen: (isModalOpen: boolean) => void;
}

const BookingsContext = createContext<BookingsContextType>(
  {} as BookingsContextType
);

export const BookingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [user, setUser] = useState<User>({} as User);
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
    setUser(userData as unknown as User);
  }, [userData]);

  const bookingContextValue = useMemo(
    () =>
      ({
        bookings,
        setBookings,
        bookingsFetchError,
        bookingsIsLoading,
        user,
        userFetchError,
        userIsLoading,
        isModalOpen,
        setModalIsOpen,
      } as BookingsContextType),
    [
      bookings,
      setBookings,
      bookingsFetchError,
      bookingsIsLoading,
      user,
      userFetchError,
      userIsLoading,
      isModalOpen,
      setModalIsOpen,
    ]
  );

  return (
    <BookingsContext.Provider value={bookingContextValue}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContext;
