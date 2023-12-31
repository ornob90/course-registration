import React from "react";

const Cart = ({ totalPrice, totalCredit, cart }) => {
  return (
    <div className="h-max pb-8 text-[#1c1b1b99] flex flex-col gap-3 w-full md:w-2/4 lg:w-[25%] bg-white rounded-lg p-3">
      <h3 className="text-[#2F80ED] font-bold text-lg">
        Credit Hour Remaining {20 - totalCredit}hr
      </h3>
      <hr />
      <h2 className="text-xl font-bold text-black">Course Name</h2>
      <ol className="pl-5 list-decimal ">
        {cart.map(({ course_name }, idx) => (
          <li key={idx}>{course_name}</li>
        ))}
      </ol>
      <hr />
      <p className="font-medium ">Total Credit Hour: {totalCredit}</p>
      <hr />
      <p className="font-medium">Total Price: {totalPrice} USD</p>
    </div>
  );
};

export default Cart;
