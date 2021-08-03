import React from 'react';
import "./Task_2_2_style.css";

function NotificationComponent(props) {
  const text = props.children;
  const notifyType = props.notifyType;

  return <span className={notifyType}>text</span>;
}

export default NotificationComponent;