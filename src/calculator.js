import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const onChange1 = (event) => {
    setNum1(event.target.value);
  };
  const onChange2 = (event) => {
    setNum2(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const printArray1 = [];
  for (let i = 0; i < num1; i++) {
    printArray1[i] = i + 1;
  }

  const printArray2 = [];
  for (let i = 0; i < num2; i++) {
    printArray2[i] = i + 1;
  }

  const printmultiple: string[] = [];

  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      //   const ret = i + " X " + j + " = " + i * j;

      printmultiple.push(`${i} X ${j} = ${i * j}`);
    }
  }
  console.log(printmultiple);

  //이중 for문(비추)

  return (
    <div>
      <h1>Calculator!</h1>
      <form onSubmit={onSubmit}>
        <input value={num1} onChange={onChange1} type="number" />
        <input value={num2} onChange={onChange2} type="number" />
        <button>Click Me!</button>
      </form>

      <div>
        {printmultiple.map((item, index) => (
            <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
