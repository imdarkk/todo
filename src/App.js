import React from 'react';
import "./assets/scss/App.scss";
import { ItemDone, ItemNotDone } from "./assets/components/CardToDo.component";
import InputToDo from "./assets/components/InputToDo.component";

function App() {
  const [notDone, setNotDone] = React.useState([]);
  const [done, setDone] = React.useState([]);

  return (
    <div className="App">
      <p id="appText">To-Do App by @marios.kyr</p>
      <div id="inputShowMain">
        <InputToDo setNotDone={setNotDone} />
      </div>
      <ItemNotDone
        done={done}
        setDone={setDone}
        notDone={notDone}
        setNotDone={setNotDone}
      />
      <ItemDone
        done={done}
        setDone={setDone}
        notDone={notDone}
        setNotDone={setNotDone}
      />
    </div>
  );
}

export default App;
