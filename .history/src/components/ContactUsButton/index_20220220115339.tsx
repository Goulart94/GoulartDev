import React from 'react';
import style from './style.module.scss'


export default function ContactUsButton() {
  return (
      <button className={style.button} onClick={()=> window.location.href = "/contact"}>
          Entre em contato
      </button>
  
    );
}
