import React from 'react';
// import './Examples.css';

class Task_1_6 extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        
        return (
            <>
            <div> <a href={"#main"}>Главная</a></div> 
            <div> <a href={"#articles"}>Статьи</a></div> 
            <div> <a href={"#reviews"}>Отзывы</a></div> 
            <div> <a href={"#aboutUs"}>О нас</a></div> 
                        
            <div id="main">Главная</div>
            <div id="articles">Статьи</div>
            <div id="reviews">Отзывы</div>
            <div id="aboutUs">О нас</div>
            </>
        )
    }
  
}
  
export default Task_1_6;
