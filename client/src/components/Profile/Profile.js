import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getBooks } from "../../actions/book";
import BookDetail from "./BookDetail";
import html2pdf from "html2pdf.js";
import * as api from "../../api";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const down = useRef();

  const onDelete = (id) => {
    const data = api.deleteBook(id);
    console.log(data);
  };

  const pdf = () => {
    const ticket = down.current;
    console.log(ticket);
    var opt = {
      margin: 1,
      filename: "ticket.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(ticket).set(opt).save();
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, onDelete]);

  const filt_books = books.filter((book) => {
    return book.user.includes(user.id);
  });

  if (user.name) {
    return (
      <div>
        <div className="profile-container">
          <div className="profile">
            <h2 id="profile-name">Hello, {user.name}</h2>
            <h2 className="user-info">Email : {user.email}</h2>
            <h2 className="user-info">Phone Number : {user.phone}</h2>
            <Link className="user-info" id="changePass" to="/changepassword">
              Change Password
            </Link>
          </div>
          <div ref={down} className="books">
            <h2 id="trains-booked">Trains Booked </h2>
              <button onClick={pdf} id="download">
                Print Ticket
              </button>
          
            {filt_books.map((book) => {
              return (
                <BookDetail key={book._id} book={book} onDelete={onDelete} />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Not Logged In</h1>;
  }
};

export default Profile;
