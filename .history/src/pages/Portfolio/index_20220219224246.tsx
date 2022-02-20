import Head from 'next/head'
import React from 'react'
import { Container, ConteinerCard } from './style'

export default function Portfolio() {
  return (
    <>
     <Head>
         <title>Portfólio| GoulartDev</title>

       </Head>
     

      <Container>
          
          <ConteinerCard >
            <link rel="stylesheet" href="https://github.com/Goulart94/Ig.news" />
             <img src="../../imgs/ig.news.png" alt='ig.news'/>
            
          </ConteinerCard>

          <ConteinerCard>
             <img src="../../imgs/code.png" alt='My code-postal'/>
          </ConteinerCard>
             
          <ConteinerCard>
            <img src="../../imgs/MG.money.png" alt='MG.money'/>  
          </ConteinerCard>
          
          <ConteinerCard>
              <img src="../../imgs/github.png" alt='Git-profile'/>
              
          </ConteinerCard>

      </Container>

      
    </>
  )
}
