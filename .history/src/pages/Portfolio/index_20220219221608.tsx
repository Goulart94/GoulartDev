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
          
          <ConteinerCard>
                  
                <img src="../../imgs/ig.news.png" alt='ig.news'/>
          </ConteinerCard>

          <ConteinerCard>
              
          </ConteinerCard>
          
          <ConteinerCard>

          </ConteinerCard>
          
          <ConteinerCard>

          </ConteinerCard>

      </Container>

      
    </>
  )
}
