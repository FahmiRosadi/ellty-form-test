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
    if (allChecked) {
      setCheckedPages([]);
    } else {
      setCheckedPages(pages);
    }
  };

  return (
    <div className="wrapper">
      <div className="card">

        {/* ALL PAGES */}
        <label className="row">
          <span>All pages</span>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={toggleAll}
          />
          <span className="checkmark"></span>
        </label>

        <div className="divider" />

        {/* LIST */}
        {pages.map((page) => (
          <label key={page} className="row">
            <span>{page}</span>
            <input
              type="checkbox"
              checked={checkedPages.includes(page)}
              onChange={() => togglePage(page)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      <div className="divider divider-bottom"></div>
        {/* BUTTON */}
        <button
          className={`btn ${checkedPages.length ? "active" : "disabled"}`}
          disabled={!checkedPages.length}
        >
          Done
        </button>

      </div>
    </div>
  );
}