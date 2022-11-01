import "./ViewAllBookings.css";
import { useEffect, useState } from "react";
import { getAllBookings } from "../../api";

//display all bookings made by all users

const ViewAllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getAllBookings();
      setBookings(data);
    };
    fetchBookings();
  }, [bookings]);

  return (
    <div className="view-all-bookings">
      <h1 className="heading">All Bookings</h1>
      <div className="bookings-container">
        {bookings.map((booking) => (
          <div className="booking-item">
            <h3>Booking ID: {booking.bookingId}</h3>
            <h3>User Name: {booking.userDetails[0].name}</h3>
            <h3>User Email: {booking.userDetails[0].email}</h3>
            <h3>User Phone: {booking.userDetails[0].phone}</h3>
            <h3>Train Number: {booking.trainDetails[0].trainId}</h3>
            <h3>Train Name: {booking.trainDetails[0].name}</h3>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllBookings;
