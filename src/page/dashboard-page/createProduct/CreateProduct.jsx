import { useState } from "react";
import axios from "axios";
import "./CreateProduct.css";
import { useContext } from "react";
import { Data } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");

  const [accept, setAccept] = useState(false);

  const nav = useNavigate();

  const context = useContext(Data);

  const token = context.auth.token;

  const handleInput = async (e) => {
    e.preventDefault();

    setAccept(true);

    try {
      const fromData = new FormData();
      fromData.append("title", title);
      fromData.append("description", description);
      fromData.append("image", image);

      let res = await axios.post(
        'http://127.0.0.1:8000/api/product/create',

        fromData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      nav("/dashboard/products");
    } catch (err) {
      console.log(err);
      setAccept(true);
    }
  };

  return (
    <div className="create-user">
      <div className="card-create-user">
        <form className="form" onSubmit={handleInput}>
          <div className="input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <button type="submit">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
