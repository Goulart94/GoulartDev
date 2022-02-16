import styled  from 'styled-components';

export const BackgroundContainer = styled.div`
    height: calc(100vh - 5rem);
    
      &::before{
        content: "";
        position: absolute;
        top: 5rem;
        bottom: 0px;
        height: 0px;
        left: 0px;
        width:100%;
        height:calc(100vh - 5rem);
        background-image:  url('../../public/imgs/background.jpg' ) ;
        background-size: cover;
        background-repeat: no-repeat;
        z-index:-1;
        opacity: 0.4;
       
       // animation: zoom 3s;
        

        
    }
   
   /* @keyframes zoom {
     
        0% {
          transform: scale(1.06 - 5rem);
          
        }
        100% {
          transform: scale(1 - 5rem);
          
        }
        
      }*/

}
.textArea{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;

}
.hero{
    max-width: 700px;
    >span{
       
        font-size: 1.5rem;
    }
    h1{
        
        font-size: 4.5rem;
        line-height: 4.5rem;
        font-weight: 900;
        margin-top: 0.5rem;
        
        span{
            color: var(--cyan-500);

        }
    
    
    }
    p{
      margin-left: 10px;
      font-size: 1.1rem;
      margin-top: 1rem;
      font-weight: 500;
    }
`     

