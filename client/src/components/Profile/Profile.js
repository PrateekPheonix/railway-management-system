import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../../actions/book";
import BookDetail from "./BookDetail";
import * as api from "../../api";
import "./Profile.css";
import { Link } from "react-router-dom";
import ChangePassword from "../ChangePassword/ChangePassword";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    const data = api.deleteBook(id);
    console.log(data);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, onDelete]);

  const filt_books = books.filter((book) => {
    return book.user.includes(user.id);
  });

  if (user.name) {
    return (
      <div className="profile-container">
        <div className="profile">
          <h2 id="profile-name">Hello, {user.name}</h2>
          <h2 className="user-info">Email : {user.email}</h2>
          <h2 className="user-info">Phone Number : {user.phone}</h2>
          <Link className="user-info" id="changePass" to="/changepassword">
            Change Password
          </Link>
        </div>
        <div className="books">
          <h2 id="trains-booked">Trains Booked </h2>
          {filt_books.map((book) => {
            return (
              <BookDetail key={book._id} book={book} onDelete={onDelete} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>Not Logged In</h1>;
  }
};

export default Profile;
