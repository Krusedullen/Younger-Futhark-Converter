import React, {useState} from 'react';
import RuneOutputField from './RuneOutputField.js'
import './ConverterBox.css';

//denne metoden fungererr ikke skikkelig ennå.


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
      <h1>just checking if this can be pushed</h1>
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
