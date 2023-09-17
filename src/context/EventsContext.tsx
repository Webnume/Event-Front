import { createContext, useState, useEffect, useMemo } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import GLOBALS from "../utils/constants";

interface EventContextType {
  events: EventProps[];
  setEvents: (events: []) => void;
  search: string;
  setSearch: (search: string) => void;
  searchResults: EventProps[];
  fetchError: string | null;
  isLoading: boolean;
}

interface EventProps {
  id: number;
  title: string;
  description: string;
  state: string;
  price: string;
  tickets: number;
  startAt: string;
  endAt: string;
  image: { url: string };
  remainingTickets: number;
  numberOfParticipants: number;
}
const EventsContext = createContext<EventContextType>({} as EventContextType);

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [search, setSearch] = useState("active");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    `${GLOBALS.API.BASE_URL}/events`
  );

  useEffect(() => {
    setEvents(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = events.filter((event) =>
      event.state.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [events, search]);

  const eventsContextValue = useMemo(
    () => ({
      search,
      setSearch,
      searchResults,
      fetchError,
      isLoading,
      events,
      setEvents,
    }),
    [search, setSearch, searchResults, fetchError, isLoading, events, setEvents]
  );

  return (
    <EventsContext.Provider value={eventsContextValue}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
