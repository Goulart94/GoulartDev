import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container, ConteinerCard } from './style';
import {GoMarkGithub} from 'react-icons/go'

export default function Portfolio() {
  return (
    <>
     <Head>
         <title>Portfólio| GoulartDev</title>

       </Head>
     

      <Container>
          
          <ConteinerCard >
            <img src="../../imgs/ig.news.png" alt='ig.news'/>
           
            <a href={"https://github.com/Goulart94/Ig.news"} target="_blank"><GoMarkGithub className='icon'/></a>
            
          </ConteinerCard>

          <ConteinerCard>
             <img src="../../imgs/code.png" alt='My code-postal'/>
             <a href={"https://github.com/Goulart94/code-seach"} target="_blank"><GoMarkGithub className='icon'/></a>
          </ConteinerCard>
             
          <ConteinerCard>
            <img src="../../imgs/MG.money.png" alt='MG.money'/>
            <a href={"https://github.com/Goulart94/dt-money"} target="_blank"><GoMarkGithub className='icon'/></a>  
          </ConteinerCard>
          
          <ConteinerCard onClick={()=> window.location.href="https://github.com/Goulart94/"}>
              
              <a><img src="../../imgs/github.png" alt='Git-profile'/></a><GoMarkGithub className='icon'/>
              
          </ConteinerCard>

      </Container>

      
    </>
  )
}
