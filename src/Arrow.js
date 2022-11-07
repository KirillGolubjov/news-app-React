import { useState } from "react";

const TestComponent = (props) => {
  const [index, setIndex] = useState(0);
  // console.log("Test");

  function handleClickPlus(event) {
    console.log(event);
    event.target.innerHTML = "NEW MINUS INDEX";
    setIndex(index + 1);
  }
  function handleClickIndexMinus(event) {
    setIndex(index - 1);
  }

  return (
    <div>
      <h1>{props.message}</h1>
      {props.message}
      <b>{index}</b>
      <div>
        <button onClick={handleClickPlus}>PLUS index</button>
        <button onClick={handleClickIndexMinus}>MINUS index</button>
      </div>
    </div>
  );
};
TestComponent.defaultProps = {
  message: "Default Message",
};

const ArrowComponent = (props) => {
  const [count, setCount] = useState(0);
  const array = ["Razer ", "Vaxee ", "Zowie "];

  // console.log(`Arrow`);

  return (
    <div>
      <div>
        {props.message}
        <b>{count}</b>
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>PLUS count</button>
        <button onClick={() => setCount(count - 1)}>MINUS count</button>
      </div>
      <TestComponent count={count} setCount={setCount} />

      {array.map((a) => {
        return <div key={a}>{a}</div>;
      })}
    </div>
  );
};

export default ArrowComponent;
