import React from 'react';
import NotificationComponent from "./NotificationComponent.js";
import { data } from './data.json';

class Task_2_2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="common-notification">
              {data.map((item, index) => <NotificationComponent key={index} notifyType={item.notifyType} notificationText={item.notificationText} />)}
          </div>



      // <div>

      //   Текст текст текст еще текст и еще текст и снова текст
      //   <NotificationComponent notifyType="error" >и снова текст и опять </NotificationComponent>
      //   текст{" "}
      //   <NotificationComponent notifyType={data.notifyType} > {data.notificationText}</NotificationComponent>
      //   текст текст текст текст (уже устал писать слово текст) текст и снова
      //   текст и опять текст, неожиданно но текст и т.д.
      // </div>
    );
  }
}

export default Task_2_2;


