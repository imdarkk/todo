import "./assets/scss/App.scss";
import { ItemDone, ItemNotDone } from "./assets/components/CardToDo.component";
import InputToDo from "./assets/components/InputToDo.component";

function App() {
  return (
    <div className="App">
      <p id="appText">To-Do App by @marios.kyr</p>
      <div id="inputShowMain">
        <InputToDo />
      </div>
      <ItemNotDone />
      <ItemDone />
    </div>
  );
}

export default App;
