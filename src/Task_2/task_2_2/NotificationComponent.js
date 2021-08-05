import React from 'react';
import { data } from './data.json';
import "./style.css";

function NotificationComponent(props) {
 

  // const text = props.children;
  // const notifyType = props.data.notifyType;

  return <span className={props.notifyType}>{props.notificationText}</span>;
}

export default NotificationComponent;