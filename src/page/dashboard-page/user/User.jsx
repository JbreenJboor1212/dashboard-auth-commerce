import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../context/Context";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);
  const [run, setRun] = useState(0);

  const context = useContext(Data);
  const token = context.auth.token;

  /* اليوس ايفكت فقط مرة وبحدة بتحدث لما بجيب الداتا بعدها ما بشتغل مشان انا احدثو مشان يحدث السيت ستيت وبتالي يحدث الاستيت لازم نحط بالاراي تاعتو متغير الستات */
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/show", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  }, [run]);

  const deleteItem = async (id) => {
    try {
      /* ------------------- backend use delete not post ------------- */
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      /* ------------ when i click on delete button , it remove the item   --------------------- */
      if (res.status === 200) {
        setRun((prev) => prev + 1);
      }
    } catch {
      console.log("none");
    }
  };

  return (
    <div className="users">
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Users</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`${user.id}`}>
                  <i
                    className="bi bi-pencil-square"
                    style={{
                      color: "green",
                      fontSize: "24px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  ></i>
                </Link>
                <i
                  className="bi bi-trash3"
                  style={{
                    color: "red",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteItem(user.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
