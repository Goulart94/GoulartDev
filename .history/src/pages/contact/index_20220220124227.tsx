import React from 'react'
import { AreaText, ContainerText } from './style';
import { RiMailSendLine } from "react-icons/ri";

export default function Contact() {
  return (
    <AreaText>
         <ContainerText>
           <h1> <span>#</span>Precisa dos meus serviços ?</h1>
           <ul>
             <li>
               <RiMailSendLine/> --- Email : Maycon_pbi@hotmail.com
             </li>
             <li>
               Telefone: 936353484
             </li>
           </ul>
         </ContainerText>
    
    </AreaText>
  )
}
