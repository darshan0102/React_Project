import React from "react";

const Wishlist = () => {
  return (
    <div>
      <h1 className="text-black ml-5 mt-7">My Wishlist</h1>
      <div className="mx-5 grid grid-cols-2">
        <p className=" text-black mt-3">Product name</p>
        <div className="mx-5 flex w-full">
          <p className=" text-black mt-3 w-1/4">Unit Price</p>
          <div>
          <p className=" text-black mt-3">Stock status</p>
          <hr/>
          </div>
        </div>
        <p>No products added to the wishlist</p>
      </div>
    </div>
  );
};

export default Wishlist;
