import React from "react";

//Styling
import "../scss/ItemNotDone.scss";

//Images
import check from "../icons/icon_check.svg";
import trashcan from "../icons/icon_trashcan.svg";

const ItemNotDone = () => {
  const [notDone, setNotDone] = React.useState([]);

  React.useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todoNotDone"));
    setNotDone(data);
  }, [notDone]);

  return (
    <div id="wrapperItemNotDone">
      <p id="notDoneText">Not Finished</p>
      <div id="container">
        {notDone != null &&
          notDone != undefined &&
          notDone != "" &&
          notDone.map((n) => (
            <div className="wrapperNotDone">
              <p>{n}</p>
              <div id="actionWrapper">
                <div
                  id="complete"
                  onClick={() => {
                    console.log(n);
                    if (localStorage.getItem("todoDone")) {
                      //Add to finished
                      const done = JSON.parse(localStorage.getItem("todoDone"));
                      done.push(n);
                      localStorage.setItem("todoDone", JSON.stringify(done))
                      
                      //Remove from not finished
                      const notFinished = JSON.parse(localStorage.getItem("todoNotDone"));
                      const index = notFinished.indexOf(n);

                      if (index == -1) console.log('stfu its not possible')
                      notFinished.splice(index, 1)
                      localStorage.setItem("todoNotDone", JSON.stringify(notFinished))
                    } else {
                      localStorage.setItem("todoDone", JSON.stringify([n]))
                    }
                  }}
                >
                  <img src={check} alt="" />
                </div>
                <div
                  id="trash"
                  onClick={() => {
                    //Remove item from not finished
                    let index = notDone.indexOf(n);
                    const oldItems = JSON.parse(localStorage.getItem("todoNotDone"));

                    if (index == -1) console.log("stfu its not possible");
                    oldItems.splice(index, 1);
                    localStorage.setItem("todoNotDone",JSON.stringify(oldItems));
                  }}
                >
                  <img src={trashcan} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const ItemDone = () => {
  const [done, setDone] = React.useState([]);

  React.useEffect(() => {
    const doneData = JSON.parse(localStorage.getItem("todoDone"));
    setDone(doneData);
  }, [done]);

  return (
    <div id="wrapperItemNotDone">
      <p id="notDoneText">Finished</p>
      <div id="container">
        {done != null &&
          done != undefined &&
          done != "" &&
          done.map((d) => (
            <div className="wrapperNotDone">
              <p>{d}</p>
              <div id="actionWrapper">
                <div
                  id="trash"
                  onClick={() => {
                    //Remove from finished
                    const finished = JSON.parse(localStorage.getItem("todoDone"));
                    const index = finished.indexOf(d);

                    if (index == -1) console.log("stfu its not possible");
                    finished.splice(index, 1);
                    localStorage.setItem("todoDone",JSON.stringify(finished));
                  }}
                >
                  <img src={trashcan} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { ItemNotDone, ItemDone };
