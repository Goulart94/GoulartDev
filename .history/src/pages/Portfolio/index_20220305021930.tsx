import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container, ConteinerCard } from '../../components/styles/stylePortfolio';
import {GoMarkGithub} from 'react-icons/go'

export default function Portfolio() {
  return (
    <>
     <Head>
         <title>Portfólio| GoulartDev</title>

       </Head>
     

      <Container>
          
          <ConteinerCard onClick={()=> window.open("https://github.com/Goulart94/Ig.news", '_blank')}>
          <img src="../../imgs/ig.news.png" alt='ig.news'/>
          <GoMarkGithub className='icon'/>
          </ConteinerCard>

          <ConteinerCard onClick={()=> window.open("https://github.com/Goulart94/code-seach", '_blank')}>
            <img src="../../imgs/code.png" alt='My code-postal'/>
            <GoMarkGithub className='icon'/>
          </ConteinerCard>
             
          <ConteinerCard onClick={()=> window.open("https://github.com/Goulart94/dt-money", '_blank')}>
            <img src="../../imgs/MG.money.png" alt='MG.money'/>
            <GoMarkGithub className='icon'/>
          </ConteinerCard>
          
          <ConteinerCard onClick={()=> window.open("https://github.com/Goulart94/", '_blank')}>
            <img src="../../imgs/github.png" alt='Git-profile'/>
            <GoMarkGithub className='icon'/>     
          </ConteinerCard>

      </Container>

      
    </>
  )
}
