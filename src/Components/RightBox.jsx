import React, { useEffect, useState } from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
  bill,
  Tipes,
}) => {
  // const [price, setPrice] = useState(0);
  const [data, setdata] = useState(0);

  const tipamt = ((bill / 100) * Tipes).toFixed(2);
  console.log(tipamt);
  const totoalPrice = (Number(tipamt) + Number(bill)).toFixed(2);

  return (
    <div>
      {/* Add tip Amount and total here */}
      <div>
        <p className="tipAmount">
          Tip Amount <span>{tipamt === "Infinity" ? 0 : tipamt}</span>
        </p>
      </div>
      <div>
        <p className="TotalAmount">
          Total{" "}
          <span>
            {totoalPrice === "Infinity" ? 0 : Number(totoalPrice / people)}
          </span>
        </p>
      </div>
      {/* Add button to RESET */}
      <div className="resetbtn">
        <button className="Reset">RESET </button>
      </div>
    </div>
  );
};

export default RightBox;
