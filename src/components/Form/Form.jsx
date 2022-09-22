import InputField from "../InputField";
import styled from './Form.module.scss'
import Button from "../Button";
import { useEffect, useRef } from "react";

function Form() {
  const inputREf = useRef()

  useEffect(() => {
    const input = (e) => {
      console.log(e.target.value)
      console.log('123')
    }
    if(inputREf.current) {
      inputREf.current.addEventListener('input', input)
    }
    return () => {
      inputREf.current.removeEventListener('input', input)
    }
  }, [])
  return (
    <form className={styled.form_text}>
      <InputField 
        label={ 'Input 1'}
        type={'text'}
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
       <input ref={inputREf}/>
      <Button
        onClick={(e) => {
          e.preventDefault()
          console.log(inputREf.current.value)
        }}
      > 
        Отправить 
      </Button>
    </form>
  )
}

export default Form