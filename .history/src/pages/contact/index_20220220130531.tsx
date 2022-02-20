import React from 'react'
import { AreaText, ContainerText } from './style';
import { RiMailSendLine, RiPhoneFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <AreaText>
         <ContainerText>
           <h1> <span>#</span>Precisa dos meus serviços ?</h1>
           <ul>
             <li>
               <RiMailSendLine className='icon'/> Email : Maycon_pbi@hotmail.com
             </li>
             <li>
               <RiPhoneFill className='icon'/>Telefone: 936353484
             </li>
           </ul>
           <p>ou</p>
           <span>

             <BsWhatsapp></BsWhatsapp>

           </span>
         </ContainerText>
    
    </AreaText>
  )
}
