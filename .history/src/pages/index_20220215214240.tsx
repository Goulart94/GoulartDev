import Head from 'next/head';

import { BackgroundContainer, TextArea } from './home.style';


export default function Home() {
  return (
  <>
    <Head>
    <title>Home | GoulartDev</title>
    </Head>
    
    <BackgroundContainer>

      <TextArea >
        
        <section className='hero'>

           <span> 👋 Hey, welcome!</span>
           <h1>Maycon Goulart <span>Desenvolvedor web</span></h1>
           <p>Tudo o que o seu site precisa para ser encontrado. </p>
        </section>
     

      </TextArea>
        
       
    </BackgroundContainer>
  </>
  );
}
