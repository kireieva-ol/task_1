import React from 'react';
import './Task_1_8.css';
import Cells from './Cells.js';


class Task_1_8 extends React.Component {
    constructor(props) {
      super(props)
    }
          
    render() {
        let result = [];
        for(let i = 0; i < 8; i++) {
          for(let j = 0; j < 8; j++) {
            let color = ((i+j) % 2 == 0) ? "black" : "white";
          
            result.push(<Cells col={i} row={j} color={color}/>)
          }
          
         } 

      return (
          <div id='chessboard'>  
            {result}
          </div>
    
        );
    }
  }
  
export default Task_1_8;

