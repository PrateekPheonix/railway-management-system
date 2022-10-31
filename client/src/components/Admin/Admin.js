import { useSelector } from "react-redux";
import { useState } from "react";
import * as api from "../../api";
import "./Admin.css";
import Login from "../User/Login";

const Admin = (props) => {
  const user = useSelector((state) => state.user);
  const [deleteField, setDeleteField] = useState("");
  const [createFields, setCreateFields] = useState({
    number: "",
    name: "",
    destination: "",
    startPoint: "",
    startDate: "",
    reachDate: "",
    price: "",
  });

  const createSubmit = (e) => {
    e.preventDefault();
    api.createTrain(
      createFields.number,
      createFields.name,
      createFields.destination,
      createFields.startPoint,
      createFields.startDate,
      createFields.reachDate,
      createFields.price
    );
    setCreateFields({
      number: "",
      name: "",
      destination: "",
      startPoint: "",
      startDate: "",
      reachDate: "",
      price: "",
    });
    alert("Train created");
  };

  const deleteClick = (e) => {
    e.preventDefault();
    console.log(deleteField);
    api.deleteTrain(deleteField);
    setDeleteField("");
    alert("Train deleted");
  };

  if (user.is_admin) {
    return (
      <div className="admin-container">
        <h1 className="heading">Welcome Administrator</h1>
        <form className="create-train-form">
          <h2 className="heading"> Create Train</h2>
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, number: e.target.value })
            }
            value={createFields.number}
            placeholder="Train Number"
            type="number"
            required
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, name: e.target.value })
            }
            value={createFields.name}
            placeholder="Train Name"
            type="text"
            required
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, destination: e.target.value })
            }
            value={createFields.destination}
            placeholder="Destination"
            type="text"
            required
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, startPoint: e.target.value })
            }
            value={createFields.startPoint}
            placeholder="Start Point"
            type="text"
            required
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, startDate: e.target.value })
            }
            value={createFields.startDate}
            placeholder="Start Date"
            type="date"
            required
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, reachDate: e.target.value })
            }
            value={createFields.reachDate}
            placeholder="Reach Date"
            type="date"
            required
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, price: e.target.value })
            }
            value={createFields.price}
            placeholder="Price"
            type="text"
            required
          />
          <button onClick={createSubmit}>Create</button>
        </form>
        <form className="delete-train-form">
          <h2 className="heading">Delete Train</h2>
          <input
            value={deleteField}
            onChange={(e) => setDeleteField(e.target.value)}
            placeholder="Train Number"
            type="text"
            required
          />
          <button onClick={deleteClick}>Delete</button>
        </form>
      </div>
    );
  } else if (user.name) {
    return <h1> Administrators only</h1>;
  } else {
    return <Login />;
  }
};

export default Admin;