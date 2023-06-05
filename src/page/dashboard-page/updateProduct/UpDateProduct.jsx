import { useState } from "react";
import axios from "axios";
import "./UpDateProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { Data } from "../../context/Context";

const UpDateProduct = () => {
  const [image, setImage] = useState("");
  const [accept, setAccept] = useState("");

  //update
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const nav = useNavigate();

  const context = useContext(Data);
  const token = context.auth.token;

  const { id } = useParams();

  useEffect(() => {
    let res = axios
      .get(`http://127.0.0.1:8000/api/product/showbyid/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
        },
      })
      .then((data) => {
        setTitle(data.data[0].title);

        setDescription(data.data[0].description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    setAccept(true);

    try {
      const formData = new FormData();

      formData.append("title", title);

      formData.append("description", description);

      formData.append("image", image);

      let res = await axios.post(
        `http://127.0.0.1:8000/api/product/update/${id}`
      );

      nav("/dashboard/products");
    } catch (err) {
      console.log(err);

      setAccept(false);
    }
  };

  return (
    <div className="user-update">
      <div className="card-update">
        <form className="form" onSubmit={submit}>
          <div className="input">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Title..." />
            {accept && title.length < 5 ? (
              <i className="bi bi-x icons false"></i>
            ) : (
              <i className="bi bi-check2-all icons true"></i>
            )}
          </div>

          <div className="input">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Description..."
              value={title}
              onChange={(e) => e.target.value}
            />
            {accept && description.length < 5 ? (
              <i className="bi bi-x icons false"></i>
            ) : (
              <i className="bi bi-check2-all icons true"></i>
            )}
          </div>

          <div className="input">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files.item(0))}
            />
          </div>
          <div className="input last">
            <button type="submit">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpDateProduct;
