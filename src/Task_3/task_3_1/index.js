import React from 'react';
import FontType from './FontType';

export default function Task_3_1(props) {
    return (
      <div>
         <p>
              <FontType type={'bold'}>Текст жирным шрифтом</FontType>
          </p>
          <p>
              <FontType type={'italic'}>Текст курсивом</FontType>
          </p>
          <p>
              <FontType type={'underlined'}>Текст подчеркнутый</FontType>
          </p>
      </div>
    );
  }
