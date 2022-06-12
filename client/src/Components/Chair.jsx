import React, { useEffect, useState } from "react";
import "../Styles/Chair.css";

const Chair = ({ id, handleChoice, choice }) => {
  //const [selected, setselected] = useState(false);

  /*  const swapSelected = () => {
	if (selected === false) {
	  setselected(true);
	  colorElement("red");
	} else {
	  setselected(false);
	  colorElement("aquamarine");
	}
  }; */

  /* const swapSelected = () => {
	if (selected === false) {
	  setselected(true);
	  colorElement("aquamarine");
	} else {
	  setselected(false);
	  colorElement("red");
	}
  }; */

  useEffect(() => {
    const colorElement = (newColor) => {
      let el = document.getElementById(id);
      el.style.backgroundColor = newColor;
    };

    if (id === choice) {
      //setselected(true);
      colorElement("red");
    } else {
      //setselected(false);
      colorElement("aquamarine");
    }
  }, [id, choice]);

  return (
    <div>
      <button
        className="chair_button"
        id={id}
        onClick={() => {
          handleChoice(id);
        }}
      >
        {id}
      </button>
    </div>
  );
};

export default Chair;
