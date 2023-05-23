import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getAllEvents = () => {
  try {
    return api.get("/events");
  }
  catch (error) {
    console.log(error);
  }
};
//   return api.get("/events");
// };

const getEventById = (id: number) => {
  return api.get(`/events/${id}`);
};

const getUser = () => {
  return api.get("/user");
};

const getBookings = () => {
  return api.get("/bookings");
};

const createBooking = (id = null, data: any) => {
  return api.post(`/bookings/${id}`, { data });
};

const deleteBooking = (id: number) => {
  return api.delete(`/bookings/${id}`);
};

export {
  getAllEvents,
  getEventById,
  getUser,
  getBookings,
  createBooking,
  deleteBooking,
};
