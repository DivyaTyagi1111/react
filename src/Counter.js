import {useState} from 'react';

const divStyle = {
  display:"flex"
};
const h3Style = {
  padding:"2rem",
  fontSize:"2rem"
};

function Counter() {
  let [number, setNumber] = useState(0)
  return (
    <div style={divStyle}>
      <button style={h3Style} onClick = {()=>setNumber(num=>num+1)}>+</button>
      <h3 style={h3Style}>{number}</h3>
      <button style={h3Style} onClick = {()=>setNumber(num=>num-1)}>-</button>
    </div>
  );
}

export default Counter;
