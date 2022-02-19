
import styled from "styled-components";

export const Container = styled.div`

    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    flex-wrap: wrap;
   
    

`

export const ConteinerCard = styled.div`
    position: relative;
    top: 4rem;

    
    width:350px;
    height: 250px;
    
    border-radius: 10px;
    background: ${props => props.theme.colors.gray100};
    margin-right: 20px;
    margin-left: 20px;
    box-shadow: 2px 2px 6px 6px rgba(235, 164, 23, 0.6);
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        
    }
     


`