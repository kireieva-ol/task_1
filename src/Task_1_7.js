import React from 'react';

class Task_1_7 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        bgColor: ""
      }
    }

    render() {
        var color = "#44014C";
        function handleClick(e) {
            e.preventDefault();
            console.log('Посилання було натиснуте.');
            color = "#bbbbbb";
        }
        return (
            <div onClick = {handleClick}
                 style = { {
                            backgroundColor: color,
                            width: "100px",
                            height: "75px"
                        }} >  </div>
        );
    }

    // render() {
    //     this.color = "#44014C";
    //     console.log('render() > ');
    //     return React.createElement(
    //         "div",
    //         { style: {
    //             backgroundColor: this.color,
    //             width: "100px",
    //             height: "75px"
    //         } },
    //         `Placeholder`
    //       );
    // }
  
}
  
export default Task_1_7;