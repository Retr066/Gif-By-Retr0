import React, { useState } from "react";
import PropTypes from "prop-types";
export default function AddCategory({ setGitf }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "" && input.length > 2) {
      setGitf((gif) => [input, ...gif]);
      CleanedInput();
    } else setError("El texto tiene que tener mas de 2 caracteres");
  };

  const CleanedInput = () => {
    setInput("");
    setError("");
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeInput}
          value={input}
          placeholder="buscar..."
        />
        <span style={{ color: "red" }}>{error && error}</span>
      </form>
    </>
  );
}

AddCategory.propTypes = {
  setGitf: PropTypes.func.isRequired,
};
