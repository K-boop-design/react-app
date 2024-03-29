import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [state, setState] = useState("Hi");
  const [state2, setState2] = useState("David");
  useEffect(() => {
    console.log("From UseEffect - updated state");
    return () => {
      console.log("Component will unmount");
    };
  }, [state]);
  useEffect(() => {
    console.log("From UseEffect - updated state2");
  }, [state2]);
  return (
    <>
      <div
        onClick={() => {
          setState("Hello");
        }}
      >
        UseEffectComp - {state}
      </div>
      <div
        onClick={() => {
          setState2("John");
        }}
      >
        {state2}
        <p>-----------</p>
      </div>
    </>
  );
};

export default UseEffectComponent;