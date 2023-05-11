import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import GLOBALS from "../utils/Globals";
import { useEffect, useState } from "react";
import Price from "./Price";

type BookingProps = {
  price: string;
};

function Booking({ price }: BookingProps) {
  const [booked, setBooked] = useState(false);
  const {
    response: responseUser,
    error: errorUser,
    loading: loadingUser,
  } = useAxios({
    method: "GET",
    url: "/user",
  });
  responseUser && console.log(responseUser);
  // console.log(
  //   responseUser?.id,
  //   responseUser?.firstName,
  //   responseUser?.lastName,
  //   responseUser?.color,
  //   responseUser?.avatar
  // );

  const userForBooking = () => ({
    user: {
      id: responseUser?.id,
      firstName: responseUser?.firstName,
      lastName: responseUser?.lastName,
      color: responseUser?.color,
      avatar: responseUser?.avatar,
    },
    numberOfTickets: 1,
    userId: responseUser?.id,
  });

  console.log(userForBooking());

  // const {
  //   response: responseBooking,
  //   error: errorBooking,
  //   loading: loadingBooking,
  // } = useAxios({
  //   method: "POST",
  //   url: "/bookings",
  //   data:  userForBooking ,
  // });

  // console.log(responseBooking);

  // const { response, error, loading } = useAxios({
  //   method: "GET",
  //   url: "/user",
  // });

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
    width: fill-available;
    height: 148px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
    padding: 1rem;
  `;

  const Button = styled.span`
    background-color: ${booked ? GLOBALS.COLORS.WHITE : GLOBALS.COLORS.LIME8};
    color: ${booked ? "red" : GLOBALS.COLORS.WHITE};
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
    border: ${booked ? "1px solid red" : "none"};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${booked ? GLOBALS.COLORS.LIME8 : "#314905"};
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
  `;

  const handleBooking = () => {
    setBooked(!booked);
    localStorage.setItem("booked", JSON.stringify(!booked));

    // console.log(responseBooking);
  };

  useEffect(() => {
    const bookedStoraged = JSON.parse(localStorage.getItem("booked"));
    bookedStoraged && setBooked(bookedStoraged);
  }, []);

  return (
    <GlobalWrapper>
      <BookingWrapper>
        <Price detailPage>
          {booked ? "J'y vais! (1 Place réservée)" : price}
        </Price>
        <Button onClick={handleBooking}>
          {booked ? "Modifier ma réservation" : "Réserver"}
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

// {
//   "id": 23,
//   "user": {
//       "id": 1,
//       "firstName": "Alan",
//       "lastName": "Turing",
//       "color": "#a8071a",
//       "avatar": {
//           "url": "https://i.pinimg.com/originals/21/79/df/2179df963390cab90c3306b956089ff4.jpg"
//       }
//   },
//   "numberOfTickets": 4,
//   "userId": 1
// },

// {
//   "avatar": {},
//   "birthCountry": "FR",
//   "color": "#5b8c00",
//   "dateOfBirth": "1993-11-01",
//   "email": "alan@leeto.co",
//   "firstName": "Macy",
//   "id": 9,
//   "lastName": "Maurel",
//   "nationality": "FR",
//   "organisation": {
//       "id": 1,
//       "name": "Leeto"
//   },
//   "placeOfBirth": "Paris"
// }

// {
//   "createdAt": "2021-05-27T12:35:18.700Z",
//   "daysBeforeClosing": 25,
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed consequat senectus condimentum blandit ut arcu. Sagittis risus varius tellus sed suspendisse. Sit accumsan sed pharetra tempus a, proin. Purus aliquet sagittis duis sit ipsum felis purus aenean. Lacinia in donec faucibus purus risus consectetur massa tincidunt lectus. Lacus nunc tristique ultricies sed facilisis. Eu eget in fermentum augue ipsum. Ut faucibus in in integer enim pharetra, cum. Faucibus aliquet suscipit et leo etiam consequat vulputate commodo, est. Amet arcu magna sit risus.",
//   "endAt": "2021-08-28T19:30:00.740Z",
//   "price": "0.0",
//   "id": 3,
//   "image": {
//       "id": 43,
//       "url": "https://img.passeportsante.net/1000x526/2021-05-03/i105659-yoga-th.jpg"
//   },
//   "maxTickets": 150,
//   "maxTicketsPerUser": 10,
//   "startAt": "2021-08-28T17:00:20.390Z",
//   "teamId": 1,
//   "title": "Cours de yoga",
//   "updatedAt": "2021-05-27T12:35:18.700Z",
//   "numberOfParticipants": 8,
//   "remainingTickets": 142,
//   "state": "active"
// },
