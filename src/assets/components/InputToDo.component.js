import React from "react";

//Styling
import "../scss/InputToDo.scss";

//Images
import add from "../icons/icon_add.svg";

const InputToDo = () => {
  const [data, setData] = React.useState("");

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div id="wrapperInput">
      <input
        type="text"
        value={data}
        onChange={handleOnChange}
        id="inputData"
        placeholder="Add a task"
        required
      />
      <div
        id="wrapperAdd"
        onClick={() => {
          if (localStorage.getItem("todoNotDone")) {
            let oldData = JSON.parse(localStorage.getItem("todoNotDone"));
            oldData.push(data);
            let parsed = JSON.stringify(oldData);
            localStorage.setItem("todoNotDone", parsed);
            setData("");
          } else {
            localStorage.setItem("todoNotDone", JSON.stringify([data]));
            setData("");
          }
        }}
      >
        <img src={add} alt="" />
      </div>
    </div>
  );
};

export default InputToDo;