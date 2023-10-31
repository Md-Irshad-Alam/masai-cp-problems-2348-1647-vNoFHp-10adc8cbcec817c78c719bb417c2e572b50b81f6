import React, { useState } from "react";
import RightBox from "./RightBox";

const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  const [input, setinput] = useState(0);
  const [person, setperson] = useState(1);

  handleBill = (value) => {
    setinput(value);
    bill = input;
  };

  handlePeople = (value) => {
    setperson(value);
    people = person;
  };

  return (
    <div>
      {/* Add input for bill */}
      <div>
        <h1>Bill</h1>
        <div>
          <input
            type="number"
            className="bill_input"
            placeholder="pay the bill"
            onChange={(event) => handleBill(event.target.value)}
            name="bill"
          />
        </div>
      </div>

      {/* Add buttons for % of tip */}
      <div>
        <h4>Select Tip%</h4>
        <div className="btn-container">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>20%</button>
          <button>50%</button>
          <input type="number" placeholder="Custom" className="custom" />
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
            onChange={(event) => handlePeople(event.target.value)}
          />
        </div>
      </div>
      <RightBox bill={input} people={person} />
    </div>
  );
};

export default LeftBox;
