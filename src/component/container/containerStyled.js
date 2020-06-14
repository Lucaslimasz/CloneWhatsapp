import styled from 'styled-components';

import imgBackground from '../../image/background.jpg';


// div geral 
export const Wrapper = styled.div`
    background: #ededed;
    width: 100%;
    height: 100vh;
    align-items: center;
`;

// div verde
export const BackgroundGreen = styled.div`
    background: #00bfa5;
    width: 100%;
    height: 20vh;
`;

// container do chat
export const Container = styled.div`
    background: white;
    width: 90%;
    height: 95vh;
    margin: auto;
    position: absolute;
    top: 2.5%;
    left: 5%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px  rgba( 0,0,0,.5);
    display: flex;
`;

// container do contato
export const ContainerContact = styled.div`
    width: 40%;
    height: 100%;
    background: white;
    border-radius: 10px 0 0 10px;
    
`;


// informação do contato
export const Information = styled.div`
    width: 100%;
    height: 90px;
    background: #ededed;
    border-left: .2px solid rgba( 159, 159, 159 ,.5);
    border-radius: 10px 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    /* imagem do contat */
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%; 
        margin-left: 5%;
    }
    div{
        width: 150px;
        i{
            margin-right: 30%;
            float: right;
            color: #727271;
            
        }
    }
    
`;

// container dos contatos
export const Contact = styled.div`
    width: 100%;
    height: 90px;
    background: #ededed;
    border-left: .2px solid rgba( 159, 159, 159 ,.4);
    border-radius: 0 10px 0 0;
    display: flex;
    align-items: center;

    img{
        width: 60px;
        height: 60px;
        border-radius: 50%; 
        margin: 0 2.5%;
    }

    p{
        font-size: 22px;
        font-weight: 400;
        width: 90%;
    }
    div{
            width: 40%;
        i{
            margin-right: 20%;
        }
    }

`;

// informação dos contatos
export const ContactInformation = styled.div`
    width: 100%;
    height: 70px;
    background: #f7f7f7;
    display: flex;
    
    div{
        width: 95%;
        height: 70%;
        background: white;
        margin: auto;
        border-radius: 50pc;
        
        i{  
          
          height: 100%;
          width: 15%;
          margin: auto;
          padding: 3.5% 5%;
          color: #b2b2b2;
            
        }

        input{
            border: none;
            font-size: 17px;
            height: 100%;
            width: 85%;
            float: right;
            
            border-radius: 0 50pc 50pc 0;
        
        }
    }
`;

// container da mensagem
export const ContainerMessage = styled.div`
    width: 60%;
    height: 100%;
    border-radius: 0 10px 10px 0px;
    background-image: url(${imgBackground});
`;

// conversas
export const Conversation = styled.button`
    width: 100%;
    height: 80px;
    display: flex;
    border: none;
    background: white;
    border-bottom: .2px solid rgba( 159, 159, 159 ,.4);
    align-items: center;
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%; 
        margin-left: 5%;
    }

    &:hover{
        background: #ededed;
    }
    
`;

export const MessageContact = styled.div`
    width: 100%;
    height: 575px;
`;

export const InputText = styled.div`
    width: 100%;
    background: #ededed;
    height: 70px;
    margin: auto;
    display:flex;
    align-items: center;
    justify-content: space-evenly;

    input{
        width: 80%;
        height: 80%;
        border: none;
        border-radius: 50pc;
        font-size: 22px;
        padding: 0 3%;
    }
    i{
        color: rgba( 0,0,0, .5);
    }
`;

// numero e mensagem
export const NumberAndMessage = styled.div`
    margin-left: 5%;
    
    a{
        
        font-size: 22px;
        font-weight: 500;
    }
    p{
        margin: 5px 0;
        font-size: 17px;

    }
`;

// tempo da mensagem
export const Hours = styled.div`
   width: 35%;
   display: flex;
   justify-content: flex-end;
   
`;

// container das conversas
export const ContainerConversation = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 570px;

    &::-webkit-scrollbar{
        width: 10px;
        padding: 100px 0;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background: rgba(0,0,0,.4);
    }
`;