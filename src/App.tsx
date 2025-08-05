import React, { useState } from "react";

import "./App.css";
import Input from "./Input";

const App = () => {
  const [count, setCount] = useState<string | number | boolean>(""); //how to set the type of useState to string, number, or boolean

  const handle = (e: any) => {
    setCount(e.target.value);
  };
  return (
    <>
      <div>
        <h1>hello</h1>
        <Input count={count} setCount={setCount} handle={handle} />
      </div>
    </>
  );
};

export default App;
