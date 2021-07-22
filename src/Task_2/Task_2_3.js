import React from 'react';
// import ChildComp from './ChildComp.js';

// export default function Task_2_3(props) {
//     handleClick() {
//         console.log('По кнопке кликнули');
//       }
//     // () => console.log('Вы нажали на кнопку')
//     return (
//       <button onClick={this.handleClick}>
//         КНОПКА
//       </button>
//     );
//   }


//   const Task_2_3 = ({}) => (
//     <button onClick={()=>console.log('Вы нажали на кнопку')}>КНОПКА</button>
//   )
  
//   export default Task_2_3

//   export default function Task_2_3(props) {
    
//     return (
//       <button onClick={() => console.log('Вы нажали на кнопку')}>
//         КНОПКА
//       </button>
//     );
//   }

//     return(
//       <ChildComp logThis={console.log('Вы нажали на кнопку')} />
//     )

// }

const Task_2_3 = (props) => (
    <button onClick={()=>props.logThis()}>Click Here</button>
)
  
export default Task_2_3
