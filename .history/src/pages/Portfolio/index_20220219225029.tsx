import Head from 'next/head'
import Link from 'next/link'
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
            <a href={"https://github.com/Goulart94/Ig.news"} >
             <img src="../../imgs/ig.news.png" alt='ig.news'/>
            </a>
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
