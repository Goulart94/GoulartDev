import { Img } from './../../../.history/src/components/Header/style_20220215223059';
import { background } from './../../../.history/src/pages/home.style_20220215213818';

import styled from "styled-components";

export const Container = styled.div`

    max-width: 1320px;
    margin: 0 auto;

    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items:center;
    flex-wrap: wrap;
   
    

`

export const ConteinerCard = styled.div`
  

    
    width:350px;
    height: 250px;
    
    border-radius: 10px;
    background: ${props => props.theme.colors.gray100};
    margin: 10px 25px 10px 25px;
   
    box-shadow: 2px 2px 6px 6px rgba(235, 164, 23, 0.6);
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        
    }
    Img{
        width:100%;
        height:auto;
        
       
    }
     


`