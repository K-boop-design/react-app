import React from "react";

const CustomEventComponent = () => {
  const handleInputChange = (e, type) => {
    console.log(e.target.value, type);
  };
  
  return (
    <div>
      Event Component
      <input
        type="text"
        onChange={(e) => {
          handleInputChange(e, "text");
        }}
      />
    </div>
  );
};

export default CustomEventComponent;
