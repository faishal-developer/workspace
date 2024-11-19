import React,{useEffect} from "react";

import './scss/global.scss';

import SProductImageSkeleton from "./Components/skeleton/SProductImageSkeleton.view";

function App() {
  
  return (
    <div className="black">
      {/* <div className='temporary'>
        <button onClick={()=>dispatch(increment())}>+</button>
        { }
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className='permanent'>
        <button>+</button>
        { myTemporaryData.value}
        <button>-</button>
      </div> */}
      <SProductImageSkeleton/>
    </div>
  );
}

export default App;
