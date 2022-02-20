import React from 'react'
import { AreaText, BoxMensange, ContainerText,  DadosContact,  Form, SubmitButton } from './style';
import { RiMailSendLine, RiPhoneFill } from "react-icons/ri";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";


export default function Contact() {
  return (
    <AreaText>
         <ContainerText>
           <h1> <span>#</span>Como posso ajudar você ou sua empresa ?</h1>
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
           <h1>Deixe sua mensagem</h1>

           <label>Nome:</label>
           <DadosContact type={"text"} name="nome" placeholder='Digite seu nome' />

           <label>Email:</label>
           <DadosContact type={"email"} name="email" placeholder='Digite seu email' />

           <label>Telefone:</label>
           <DadosContact type={"tel"} name="fone" placeholder='Digite seu telefone' />

           <label>Mensagen:</label>
           <BoxMensange type={"text"} placeholder="Digite sua mensagen"></BoxMensange>
           <div>
             <SubmitButton>Enviar</SubmitButton>
           </div>
           
           
          </Form>
       
    
    </AreaText>
  )
}
