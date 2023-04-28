import React,{useEffect} from "react";
import logo from './logo.svg';
import './scss/global.scss';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "./Store/testSlice";

function App() {
  const myTemporaryData = useSelector((state) => state.testSlice);
  const dispatch= useDispatch();
  return (
    <div className="black">
      <div className='temporary'>
        <button onClick={()=>dispatch(increment())}>+</button>
        { }
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className='permanent'>
        <button>+</button>
        { myTemporaryData.value}
        <button>-</button>
      </div>
    </div>
  );
}

export default App;
