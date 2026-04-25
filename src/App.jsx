import { useState } from "react";
import "./App.css";

const pages = [
  "Page 1",
  "Page 2",
  "Page 3",
  "Page 4",
  "Page 5",
  "Page 6",
];

export default function App() {
  const [checkedPages, setCheckedPages] = useState([]);

  const allChecked = checkedPages.length === pages.length;

  const togglePage = (page) => {
    setCheckedPages((prev) =>
      prev.includes(page)
        ? prev.filter((p) => p !== page)
        : [...prev, page]
    );
  };

  const toggleAll = () => {
    setCheckedPages(allChecked ? [] : pages);
  };

  return (
    <div className="wrapper">
      <div className="card">

        {/* CONTENT */}
        <div className="content">

          <label className="row">
            <span>All pages</span>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={toggleAll}
            />
            <span className="checkmark"></span>
          </label>

          <div className="divider"></div>

          {pages.map((page, index) => (
            <label
              key={page}
              className={`row ${index === 3 ? "space-after-page4" : ""}`}
            >
              <span>{page}</span>
              <input
                type="checkbox"
                checked={checkedPages.includes(page)}
                onChange={() => togglePage(page)}
              />
              <span className="checkmark"></span>
            </label>
          ))}

        </div>

        {/* FOOTER */}
        <div className="footer">
        <div className="footer-divider"></div>


          <button
            className={`btn ${checkedPages.length ? "active" : "disabled"}`}
            disabled={!checkedPages.length}
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}