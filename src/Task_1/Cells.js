import React from 'react';
import './Task_1_8.css';

class Cells extends React.Component {
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
      return (
        <div id='chessboardCells'
             className = 'black'
             >

          
        </div>
   
      );
    }
  }
  
export default Cells;

