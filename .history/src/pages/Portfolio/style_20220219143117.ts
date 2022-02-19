import { background } from './../../../.history/src/pages/home.style_20220215213818';
import styled from "styled-components";

export const Container = styled.div`

    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;

`

export const ConteinerCard = styled.div`

    height: 300px;
    width:350px;
    border-radius: 10px;
    background: ${props => props.theme.colors.gray100};
    margin: 0 auto;
    box-shadow: 5px 5px 5px 5px ${p => p.theme.colors.yellow500};
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
     


`