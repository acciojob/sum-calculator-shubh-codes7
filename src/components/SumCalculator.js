import React from "react";
import "./../styles/App.css";

const SumCalculator = () => {
  const [sum, setSum] = React.useState(0);

  function handleInput(input){
    setSum((prev) => Number(prev)+Number(input))
  }

//   useEffect(()=>{
//   }, [sum])

  return (
    <div>
      <input type="number" onChange={(e)=>handleInput(e.target.value)}/>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
