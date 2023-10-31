import React, { useState } from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
  bill,
}) => {
  // const [price, setPrice] = useState(0);
  const [price, setprice] = useState(0);
  const tipamt = ((15 / bill) * 100).toFixed(3);

  const totalpr = (Number(bill) + Number(tipamt)).toFixed(4);

  return (
    <div>
      {/* Add tip Amount and total here */}
      <div>
        <p className="tipAmount">
          Tip Amount <span>{tipamt < 0 ? "0" : tipamt}</span>
        </p>
      </div>
      <div>
        <p className="TotalAmount">
          Total <span>{totalpr > 0 ? Number(totalpr) : 0}</span>
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
