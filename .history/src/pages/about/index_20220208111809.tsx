import React from 'react';
import ContactUsButton from '../../components/ContactUsButton';
import style from'./about.module.scss'

export default function About() {
  return (
     
     <div className={style.textArea}>
       <main className={style.hero}> 
        
        <h1>Sobre</h1>

        <h2>Maycon Goulart</h2>

         <p>Sou Desenvolvedor web e estudante do curso de Engenharia da Computação, tenho conhecimentos em <span>React.js, Css, Html5, JavaScript, TypeScript e Node.js</span>.<br/>
         E posso ajudar você ou sua empresa a crescer através da internet, nesses tempos atuais quem não está online, não está sendo visto e nem lembrado pelos consumidores. Está na internet deixou de ser um atrativo e passou a ser essencial para qualquer empresa ou negócio, então não perca tempo e entre em contato. </p>

         <ContactUsButton></ContactUsButton>
         </main>
         <img src="../../imgs/Ilustra.png" alt="" />
     </div>
     );
}
