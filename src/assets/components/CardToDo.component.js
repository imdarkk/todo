import React from "react";

//Styling
import "../scss/ItemNotDone.scss";

//Images
import check from "../icons/icon_check.svg";
import trashcan from "../icons/icon_trashcan.svg";

const ItemNotDone = (props) => {
  React.useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todoNotDone"));
    props.setNotDone(data);
  }, []);

  return (
    <div id="wrapperItemNotDone">
      {props.notDone != null &&
        props.notDone != undefined &&
        props.notDone != "" && <p id="notDoneText">Not Finished</p>}
      <div id="container">
        {props.notDone != null &&
          props.notDone != undefined &&
          props.notDone != "" &&
          props.notDone.map((n, key) => (
            <div key={key} className="wrapperNotDone">
              <p>{n}</p>
              <div id="actionWrapper">
                <div
                  id="complete"
                  onClick={() => {
                    if (localStorage.getItem("todoDone")) {
                      //Add to finished
                      const done = JSON.parse(localStorage.getItem("todoDone"));
                      done.push(n);
                      localStorage.setItem("todoDone", JSON.stringify(done));
                      props.setDone(
                        JSON.parse(localStorage.getItem("todoDone"))
                      );
                    } else {
                      localStorage.setItem("todoDone", JSON.stringify([n]));
                      props.setDone(
                        JSON.parse(localStorage.getItem("todoDone"))
                      );
                    }

                    //Remove Item
                    const notFinished = JSON.parse(
                      localStorage.getItem("todoNotDone")
                    );
                    const index = notFinished.indexOf(n);

                    if (index == -1) console.log("stfu its not possible");
                    notFinished.splice(index, 1);
                    localStorage.setItem(
                      "todoNotDone",
                      JSON.stringify(notFinished)
                    );
                    props.setNotDone(
                      JSON.parse(localStorage.getItem("todoNotDone"))
                    );
                  }}
                >
                  <img src={check} alt="" />
                </div>
                <div
                  id="trash"
                  onClick={() => {
                    //Remove item from not finished
                    let index = props.notDone.indexOf(n);
                    const oldItems = JSON.parse(
                      localStorage.getItem("todoNotDone")
                    );

                    if (index == -1) console.log("stfu its not possible");
                    oldItems.splice(index, 1);
                    localStorage.setItem(
                      "todoNotDone",
                      JSON.stringify(oldItems)
                    );
                    props.setNotDone(
                      JSON.parse(localStorage.getItem("todoNotDone"))
                    );
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

const ItemDone = (props) => {
  React.useEffect(() => {
    const doneData = JSON.parse(localStorage.getItem("todoDone"));
    props.setDone(doneData);
  }, []);

  return (
    <div id="wrapperItemNotDone">
      {props.done != null && props.done != undefined && props.done != "" && (
        <p id="notDoneText">Finished</p>
      )}
      <div id="container">
        {props.done != null &&
          props.done != undefined &&
          props.done != "" &&
          props.done.map((d, key) => (
            <div key={key} className="wrapperNotDone">
              <p>{d}</p>
              <div id="actionWrapper">
                <div
                  id="trash"
                  onClick={() => {
                    //Remove from finished
                    const finished = JSON.parse(
                      localStorage.getItem("todoDone")
                    );
                    const index = finished.indexOf(d);

                    if (index == -1) console.log("stfu its not possible");
                    finished.splice(index, 1);
                    localStorage.setItem("todoDone", JSON.stringify(finished));
                    props.setDone(JSON.parse(localStorage.getItem("todoDone")));
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
