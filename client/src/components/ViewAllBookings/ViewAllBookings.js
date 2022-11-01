import "./ViewAllBookings.css";
import { useSelector } from "react-redux";
import { getAllBookings } from "../../api";

const ViewAllBookings = () => {
  const user = useSelector((state) => state.user);
  const bookings = getAllBookings();
  bookings.then((result) => {
    console.log(result)
  })
  console.log(bookings);

  return (
    <div className="view-all-bookings-container">
      <h1 className="heading">All Bookings</h1>
      <div className="bookings-container">
        {bookings.map((booking) => {
          return (
            <div className="booking-container">
              <h2 className="heading">Booking ID: {booking.bookingId}</h2>
              <h3 className="heading">Train ID: {booking.trainDetails}</h3>
              <h3 className="heading">User ID: {booking.userDetails}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewAllBookings;
