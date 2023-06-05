import { useContext, useEffect, useState } from "react";
import { Data } from "../../context/Context";
import axios from "axios";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [run, setRun] = useState(0);

  const context = useContext(Data);
  const token = context.auth.token;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/product/show", {
        headers: {
          Authorization: `Bearer ` + token,
          Accept: "application/json",
        },
      })
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, [run]);

  const deleteItem = async (id) => {
    try {
      let res = await axios.delete(
        `http://127.0.0.1:8000/api/product/delete/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
          },
        }
      );

      if (res.status === 200) {
        setRun((prev) => prev + 1);
      }
    } catch {
      console.log("none");
    }
  };

  return (
    <div className="product">
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`${product.id}`}>
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
                  onClick={() => deleteItem(product.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
