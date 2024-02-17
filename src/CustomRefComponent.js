import React, { useRef } from "react";
import CustomClassComponent from "./CustomClassComponent";

const CustomRefComponent = () => {
  const paraRef = useRef();
  const clickHandler = () => {
    console.log(paraRef.current);
  };
  return (
    <div>
      Ref
      <p onClick={clickHandler}>reference element</p>
      <CustomClassComponent ref={paraRef} />
    </div>
  );
};

export default CustomRefComponent;
