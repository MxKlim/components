import styled from './InputField.module.scss';
import {useState} from 'react';

function InputField({label, type, onChange}) {
  const [value, setValue] = useState();
  function handleChange(e) {
    setValue(e.target.value);
    onChange(e, e.target.value);
    // some code
  }
  return (
    <label className={styled.label_text}>
      {label}
      <input
        className={styled.input_text}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}

export default InputField