import "./about.css";

const PaginationItem = ({ pages, setCurrent, current }) => {
  const generatePages = Array.from(Array(pages).keys());

  return (
    <div className="pagination">
      <div className="pagination-child">
        <button
          className="prev"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          <i className="bi bi-arrow-bar-left"></i>
        </button>
        <div>
          {generatePages.map((to) => (
            <button
              className={current === to ? "center active" : "center"}
              key={to}
              onClick={() => setCurrent(to)}
            >
              {to}
            </button>
          ))}
        </div>
        <button
          className="next"
          disabled={current === pages - 1}
          onClick={() => setCurrent(current + 1)}
        >
          <i className="bi bi-arrow-bar-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PaginationItem;
