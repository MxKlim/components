import src from '../../assets/image/1.jpg';
import styled from './LogoImg.module.scss';
import { useState, useRef, useEffect } from 'react';

function LogoImg() {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    if(!loading) {
      const style = window.getComputedStyle(imgRef.current, null);
      console.log('width:', style.width, 'height:', style.height)
    }
  }, [loading])
  
  function handlLoad() {
    setLoading((prev)=> !prev)
    console.log(' загружено ')
  }
  
  return (
    <div className={styled.container}>
      <img ref={imgRef} onLoad={handlLoad} className={`${styled.logo} ${loading ? '' : styled.active}` } src={src} alt="logo" />
      {loading && <span>Загрузка изображения...</span> }
    </div>
  )

  
}

export default LogoImg