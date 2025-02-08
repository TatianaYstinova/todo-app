import "../../index.css";
import React from "react";
import { useState } from "react";

export const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Поиск по номеру задачи или названию"
        value={searchTerm}
        onChange={handleChange}
        className="search-input default-font"
      />
      <button type="submit" className="search-button default-font">
        Поиск
      </button>
    </form>
  );
};
