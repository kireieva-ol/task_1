import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task_1_3 from './Task_1/Task_1_3.js';
import Task_1_4 from './Task_1/Task_1_4.js';
import Task_1_5 from './Task_1/Task_1_5.js';
import Task_1_6 from './Task_1/Task_1_6.js';
import Task_1_7 from './Task_1/Task_1_7.js';
import Task_1_8 from './Task_1/Task_1_8.js';

import Task_2_1 from './Task_2/Task_2_1.js';
import Task_2_2 from './Task_2/Task_2_2.js';
import Task_2_3 from './Task_2/Task_2_3.js';
import Task_2_4 from './Task_2/Task_2_4.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Task_1_3 />
    <Task_1_4 />
    <Task_1_5 text="parentTitle"/>
    <Task_1_6 />
    <Task_1_7 />
    <Task_1_8 /> */}

    {/* <Task_2_1 textBold="текст жирным шрифтом"
              textItalic="текст курсивом"
              textUnderlined="текст подчеркнутый" />
    <Task_2_2 status="success" 
               />
    <Task_2_3 logThis={console.log('Вы нажали на кнопку')} /> */}
    <Task_2_4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

