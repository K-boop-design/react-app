import React from "react";

const CustomKeysComponent = () => {
  const items = [
    {
      productName: "Shoes",
      price: 555,
    },
    {
      productName: "Shirts",
      price: 444,
    },
    {
      productName: "Pants",
      price: 333,
    },
  ];
  
  return (
    <>
      <h3>Product List</h3>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "solid 1px black",
              marginTop: "5px",
              width: "100px",
            }}
          >
            <h4>{item.productName}</h4>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomKeysComponent;
