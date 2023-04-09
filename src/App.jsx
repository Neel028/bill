import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(0);
  let [state3, setState3] = useState(0);
  function i1() {
    setState1(state1 + 1)
  };
  function i2() {
    setState2(state2 + 1)
  };
  function i3() {
    setState3(state3 + 1)
  };
  function i11() {
    if (state1 < 1) {
      setState1(0)
    }
    else {
      setState1(state1 - 1)
    }
  };
  function i12() {
    if (state2 < 1) {
      setState2(0)
    }
    else {
      setState2(state2 - 1)
    }
  };
  function i13(){
    if (state3 < 1) {
      setState3(0)
    }
    else {
      setState3(state3 - 1)
    }
  };
  return (
    <div>
      <table>
        <tr>
          <td>Iteam</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Amount</td>
        </tr>
        <tr>

          <td className='color'>
            <img src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Gol-Gappe.jpg?v=1620826548" alt="" />
            <br /> Pani Puri</td>
          <td className='color'>2 $</td>
          <td className='color'> <button onClick={i11}>--</button>
            {state1}<button onClick={i1}>+</button></td>
          <td className='color'>{state1 * 2} $</td>
        </tr>
        <tr>
          <td className='color'>
            <img src="https://wallpaperaccess.com/full/6218819.jpg" alt="" />
            <br /> Ragda Puri</td>
          <td className='color'>3 $</td>
          <td className='color'> <button onClick={i12}>--</button>
            {state2}<button onClick={i2}>+</button></td>
          <td className='color'>{state2 * 3} $</td>
        </tr>
        <tr>
          <td className='color'>
            <img src="https://www.masala.tv/wp-content/uploads/2020/05/bhel-puri-548.jpg" alt="" />
            <br /> Bhel Puri</td>
          <td className='color'>4 $</td>
          <td className='color'> <button onClick={i13}>--</button>
            {state3}<button onClick={i3}>+</button></td>
          <td className='color'>{state3 * 4} $</td>
        </tr>
        <tr>
          <td colSpan='4' className='custom'>Total = {state1 * 2 + state2*3 +state3*4} $</td>
        </tr>

      </table>

    </div>
  );
}

export default App;
