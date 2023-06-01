import { useState } from "react";
import "./App.css";

function App()
 {
  const [count,setCount]=useState(0);
  function decreasehandler()
  {
    setCount(count-1);
  }
  function increasehandler()
  {
     setCount(count+1);
  }
  function zerohandler()
  {
     setCount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
    <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
    <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
      <button onClick={decreasehandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> 
        -
      </button>
      <div className="font-bold gap-12 text-5xl">
        {count}
      </div>
      <button onClick={increasehandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
        +
      </button>
    </div>
    <button onClick={zerohandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">Reset</button>
    </div>
  );
}

export default App;
