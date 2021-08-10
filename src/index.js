// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Task_1_3 from './Task_1/Task_1_3.js';
// import Task_1_4 from './Task_1/Task_1_4.js';
// import Task_1_5 from './Task_1/Task_1_5.js';
// import Task_1_6 from './Task_1/task_1_6/index.js';
// import Task_1_7 from './Task_1/Task_1_7.js';
// import Task_1_8 from './Task_1/Task_1_8.js';

// import Task_2_1 from './Task_2/task_2_1/index.js';
// import Task_2_2 from './Task_2/task_2_2/index.js';
// import Task_2_3 from './Task_2/Task_2_3.js';
// import Task_2_4 from './Task_2/task_2_4/index.js';
// import Task_2_5 from './Task_2/task_2_5/index.js';

// import Task_3_1 from './Task_3/task_3_1/index.js';
// import Task_3_2 from './Task_3/task_3_2/index.js';
// import Task_3_3 from './Task_3/Task_3_3.js';
// import Task_3_4 from './Task_3/task_3_4/index.js';

// import App from './Task_8/containers/App';

// import reportWebVitals from './reportWebVitals';

// const fnc = () => console.log('Вы нажали на кнопку')

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Task_1_3 /> */}
//     {/* <Task_1_4 /> */}
//     {/* <Task_1_5 text="parentTitle"/> */}
//     {/* <Task_1_6 /> */}
//     {/* <Task_1_7 /> */}
//     {/* <Task_1_8 /> */}

//     {/* <Task_2_1 /> */}
//     {/* <Task_2_2 /> */}
//     {/* <Task_2_3 logThis={fnc} /> */}
//     {/* <Task_2_4 /> */}
//     {/* <Task_2_5 /> */}

//     {/* <Task_3_1 /> */}
//     {/* <Task_3_2 /> */}
//     {/* <Task_3_3 logThis={fnc} /> */}
//     <Task_3_4 />
   

//   </React.StrictMode>,

//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Task_8/store/configureStore";
import App from "./Task_8/containers/App";

import "./index.css";

ReactDOM.render(
  /**
   * Компонент <Provider store={store}></Provider>
   * позволяет получить данные из store
   */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

