import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("Hannibal");
  const [showData, setShowData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function searchApi(searchString) {
      try {
        const result = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${searchString}`
        );
        setShowData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    searchApi(submitValue);
  }, [submitValue]);

  function renderShows() {
    return showData.map((s, i) => (
      <li
        className="show-link"
        key={i}
        onClick={() => {
          navigate(`/search/${s.show.name}`);
        }}
      >
        {s.show.name}
      </li>
    ));
  }

  function handleInput(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitValue(inputValue);
    setInputValue("");
  }

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleInput}
          value={inputValue}
        ></input>
        <button type="submit">Sumbit</button>
      </form>
      <ol>{renderShows()}</ol>
    </>
  );
};

export default SearchPage;
