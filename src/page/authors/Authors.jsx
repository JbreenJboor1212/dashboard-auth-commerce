import { useState } from "react";
import Header from "../../components/header/Header";
import { authors } from "../../data/authors";
import "./Authors.css";

const Authors = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header />
      <div className="authors">
        <div className="authors-form">
          <input
            type="search"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="authors-author">
          {authors
            .filter((author) => author.name.toLowerCase().includes(search))
            .map((author) => (
              <div className="author" key={author.id}>
                <img src={author.image} alt={author.id} />
                <div className="author-name">
                  <p>{author.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Authors;
