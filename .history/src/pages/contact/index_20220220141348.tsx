import React from 'react'
import { AreaText, ContainerText, Form } from './style';
import { RiMailSendLine, RiPhoneFill } from "react-icons/ri";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";


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
           <section>
             <BsWhatsapp  className='iconSection'
              onClick={()=> window.open( "https://wa.me/351936353484")}>
            </BsWhatsapp>
             <BsLinkedin className='iconSection'
              onClick={()=> window.open( "https://www.linkedin.com/in/maycon-goulart-329477230/")}> 
             </BsLinkedin>
             <BsGithub className='iconSection'
             onClick={()=> window.open( "https://github.com/Goulart94")}>
             </BsGithub>
           </section>
         </ContainerText>
         <Form>
           <input type="text" name="nome" placeholder='digite seu nome' />
           <input type="email" name="email" placeholder='Digite seu email' />
           <input type="fone" name="fone" placeholder='Digite seu Telefone' />
         </Form>
    
    </AreaText>
  )
}
