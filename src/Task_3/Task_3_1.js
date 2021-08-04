import React from 'react';

export default function Task_3_1(props) {
    return (
      <div>
        <b>{props.textBold}</b>
        <i>{props.textItalic}</i>
        <u>{props.textUnderlined}</u>
      </div>
    );
  }
