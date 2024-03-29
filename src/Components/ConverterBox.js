import React, {useState} from 'react';
import RuneOutputField from './RuneOutputField.js'
import './ConverterBox.css';



const Box = () => {

  const [valueState, setValueState] = useState(
    {
      inputValue : "futhark"
    }
  );

  const changedInputHandler = (event) => {
    setValueState({
      inputValue: event.target.value
  });
};



  return (
    <div className="converter-box">
      <h1>ᚠUTAᚱK CONVEᚱTEᚱ</h1>
      <input
        type="text"
        onChange={changedInputHandler}
        value={valueState.inputValue}
      ></input>

      <RuneOutputField textInput={valueState.inputValue} />
    </div>
  );
}

export default Box;
