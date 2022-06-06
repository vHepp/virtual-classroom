import React, { useState, useEffect } from "react";

import Chair from "./Chair";
import "../Styles/Table.css";

const Table = ({ id, max, min }) => {
  const [choice, setchoice] = useState();
  const [count, setcount] = useState(4);
  const [chairs, setchairs] = useState([]);

  const handleState = (state) => {
    setchoice(state);
  };
  const increase = () => {
    if (count < 4) {
      setcount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  useEffect(() => {
    // this probably makes all chairs from scratch everytime a new one is added
    const temp = [];
    for (let i = 1; i <= count; i++) {
      temp.push(
        <Chair
          id={id + "_" + i}
          key={id + "_" + i}
          num={i}
          choice={choice}
          foo={handleState}
        />
      );
    }

    setchairs(temp);
  }, [count, id, choice]);

  /* const swapSelected = () => {
		if (selected === false) {
			setselected(true);
			colorElement('aquamarine');
		}
		else{
			setselected(false);
			colorElement('red');
		}
	}

	const colorElement = (newColor) => {
		let el = document.getElementById(id);
		el.style.backgroundColor =  newColor;
	} */

  return (
    <div>
      <div className="desc">
        <h1 style={{ fontSize: 20 }}>Table {id}</h1>
        <h3 style={{ fontSize: 15 }}>choice: {choice}, max: 4</h3>
      </div>

      <div>
        <h3 style={{ fontSize: 15 }}>count: {count}</h3>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <div className="chairs">
        {chairs.length &&
          chairs.map((element) => {
            return element;
          })}
      </div>

      {/* <div className='chairs'>
					<Chair id={id +'_1'} num={1} choice={choice} foo={handleState}/>
					<Chair id={id +'_2'} num={2} choice={choice} foo={handleState}/>
					<Chair id={id +'_3'} num={3} choice={choice} foo={handleState}/>
					<Chair id={id +'_4'} num={4} choice={choice} foo={handleState}/>
		</div> */}
    </div>
  );
};

export default Table;
