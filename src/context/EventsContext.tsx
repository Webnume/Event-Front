import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import GLOBALS from "../utils/constants";

const EventsContext = createContext({});

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('active');
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    `${GLOBALS.API.BASE_URL}/events`
  );

  useEffect(() => {
    setEvents(data);
  }, [data]);

  useEffect(() => {
      const filteredResults = events.filter((event) =>
          ((event.state).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filteredResults.reverse());
  }, [events, search])

  return (
    <EventsContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        events,
        setEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
