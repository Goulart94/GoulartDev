import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 5rem;
    border-bottom: solid 1px var(--gray-300);
    


.HeaderContent{
    max-width: 1120;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    

    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        margin-left: 5rem;
        width: 200px;
    }
    nav{
        position: relative;
        left:250px;
        height: 100%;

         a{
             display: inline-block;
             position: relative;
             height: 5rem;
             padding: 0 0.5rem;
             line-height: 5rem;
             color: ${p => p.theme.colors.text};

             transition: color 0.2s;

             & + a{
                 margin-left: 2rem;
             }

             &:hover{
                 color: var(--white);
             }
             &.active{
                color: var(--white);
                font-weight: 600;

             }
             
             &.active::after{
                 content: '';
                 height: 3px;
                 border-radius: 3px 3px 0 0;
                 background: var(--gray-100);
                 width: 100%;
                 position: absolute;
                 bottom: 1px;
                 left: 0;

             }
          }
     }
     .SwicthTheme{
         margin-right: 50px;

        
     }
 

}
`
