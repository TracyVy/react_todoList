import React, { useRef } from "react";
import { useTodoContext } from "../utils/GlobalState.js";

const Form = () => {
  const inputRef = useRef();
  // eslint-disable-next-line
  const [_, dispatch] = useTodoContext();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);

    dispatch({ type: "add", name: inputRef.current.value });
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Enter a Todo</h1>
      <form className="form-group mt-3" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="form-control"
          placeholder="Enter a todo"
        />
        <button className="btn btn-primary mt-3" type="submit">
          Add a Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
