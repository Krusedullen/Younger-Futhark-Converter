import React from 'react';
import toRuneConverter from './toRuneConverter.js';

const output = (props) => {


  const inputString = props.textInput;

  return <output className='output-field'>{toRuneConverter(inputString)}</output>;
}

export default output;
