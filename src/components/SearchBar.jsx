/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const SearchBar = ({ label, query, onChange, onSearch }) => (
  <form onSubmit={onSearch}>
    <label>{label}</label>
    <input
      required
      placeholder="Enter a game title to search"
      type="text"
      value={query}
      onChange={onChange}
    />
    <input type="submit" value="Search" />
  </form>
);

export default SearchBar;
