import { Hero } from './../../../.history/src/pages/home.style_20220215214752';
import styled from "styled-components";

export const AreaText = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    bottom: 2rem;

`
export const ContainerText = styled.main`
    max-width: 700px;

     h1{
         font-size: 70px;
         color: ${p => p.theme.colors.cyan500};
         opacity: 0.8;
         span{
          font-size: 90px;
          color: ${p => p.theme.colors.yellow500}
         }
     }
     

    ul{
       margin-top: 20px;

        li{
        width: 100%;    
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: 600;
        opacity: 0.8;
        }
 
    }
    .icon{
        position: relative;
        top: 8px;
        font-size: 2rem;
        margin-right: 2rem;
        opacity: 0.8;
    }
    p{

        width:100%;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        border-bottom: solid 1px var(--gray-300);
        opacity: 0.8;
    }
    section{
        width: 100%;
        text-align: center;
        padding: 2rem;
        
    }
    .iconSection{
        position: relative;
        top: 2rem;
        font-size: 3rem;
        margin-right: 2rem;
        opacity: 0.8;
        
        &:hover{
            cursor: pointer;
            transform: scale(1.2);
            
        }

    }


   
`