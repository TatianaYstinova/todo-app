import React from "react";
import { useState } from "react";

export const Search =({onSearch})=>{
    const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (onSearch) 
      onSearch(searchTerm); 
    }
  ;

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Поиск по номеру задачи или названию"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Поиск
      </button>
    </form>
  )
}