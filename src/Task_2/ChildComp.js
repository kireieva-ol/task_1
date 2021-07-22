import React from 'react';

const ChildComp = (props) => (
    <button onClick={()=>props.logThis()}>Click Here</button>
)
  
export default ChildComp
