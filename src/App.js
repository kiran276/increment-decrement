import React from 'react'
import "./App.css"
import{incNumber,decNumber} from "./actions/index"
import { useSelector,useDispatch } from 'react-redux'
const App = () => {
  const myState = useSelector((state)=>state.ChangeTheNumber);
  const dispatch= useDispatch();
  return (
    <div className="main-div">
      

    <div className="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    <div className="quantity">
        <a className="quantity__minus" onClick={()=>dispatch({ type: 'DECREMENT' })} title="Decrement"><span>-</span></a>
        <input name="quantity" type="text" value={myState} className="quantity__input"  />
        <a className="quantity__plus"onClick={()=>dispatch({ type: 'INCREMENT' })} title="Increment" ><span>+</span></a>
      </div>
    </div>
    </div>
  )
}

export default App
