import React from 'react';

class Task_2_2 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const colors = new Map();
    colors.set('success', 'green');
    colors.set('info', 'blue');
    colors.set('warning', 'yellow');
    colors.set('error', 'red');

    let status = this.props.status;

    let bgColor = colors.get(status);

    
    return (
        <div>
            Создать компонент класс, который настраивает блок уведомлений (любой блок с текстом).
            В зависимости от типа, блок может быть 
            зеленым <span style = { {backgroundColor: bgColor}} >(сообщение об успехе чего-либо)</span>, 
            синим <span style = { {backgroundColor: bgColor}} >(информационный блок)</span>, 
            желтым <span style = { {backgroundColor: bgColor}} >(предупреждение)</span>, 
            красным <span style = { {backgroundColor: bgColor}} >(ошибка)</span>.

        
      </div>
    );
  }
}

export default Task_2_2;