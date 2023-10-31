import React, { useState } from "react";
import RightBox from "./RightBox";

const LeftBox = ({
  handleTip,
  handleBill,
  bill,
  people,
  Tipes,
  handlePeople,
}) => {
  const [input, setinput] = useState(0);
  const [person, setperson] = useState(1);
  const [value, settip] = useState(15);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      {/* Add input for bill */}
      <div>
        <div>
          <h1>Bill</h1>
          <div>
            <input
              type="number"
              className="bill_input"
              placeholder="pay the bill"
              onChange={(event) => setinput(event.target.value)}
              name="bill"
            />
          </div>
        </div>
        <div>
          <h4>Select Tip%</h4>
          <div className="btn-container">
            <button onClick={(evnet) => settip(5)}>5%</button>
            <button onClick={(evnet) => settip(10)}>10%</button>
            <button onClick={(evnet) => settip(15)}>15%</button>
            <button onClick={(evnet) => settip(20)}>20%</button>
            <button onClick={(evnet) => settip(50)}>50%</button>
            <input
              type="number"
              placeholder="Custom"
              onChange={(event) => settip(event.target.value)}
              className="custom"
            />
          </div>
        </div>
        {/* Add input for no.of peoples */}
        <div>
          <h1>Number of people</h1>
          <div className="">
            <input
              type="number"
              className="people"
              placeholder="default vlaue 1"
              value={person}
              onChange={(event) => setperson(event.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Add buttons for % of tip */}

      <div>
        <RightBox bill={input} people={person} Tipes={value} />
      </div>
    </div>
  );
};

export default LeftBox;
