import React from 'react';
import './Task_1_8.css';
import Cells from './Cells.js';


class Task_1_8 extends React.Component {
    constructor(props) {
      super(props)
      // this.state = {
      //   name: 'React',
      // };
    }

    // const Cell = () => <>{}</>;

        
    // drawCells(){
    //   let mainField = document.getElementById('board');
    //   let block;
    //   let flag = true;
  
    //   for(let i = 0; i < 8; i++){
    //       for(let j = 0; j < 8; j++) {
    //           if(j == 0) flag = !flag;
  
    //           block = document.createElement('div');
  
    //           if(flag) block.className = 'black';
    //           else block.className = 'white';
  
    //           mainField.appendChild(block);
    //           flag = !flag;
    //       }
    //   }
    // }   
          
    render() {
        let result = '';
        for(let i = 0; i < 8; i++) {
          for(let j = 0; j < 8; j++) {
            let color = ((i+j) % 2 == 0) ? "black" : "white";
            console.log('i = ', i, ', j = ', j, ', color = ', color);

            let symbol = ((i+j) % 2 == 0) ? "·" : "■";
            result = result + symbol;
          }
          result = result + '\n';
         } 
        console.log(result);

      return (
          <div id='chessboard'>  
            {result}
          </div>
    
        );
    }
  }
  
export default Task_1_8;

