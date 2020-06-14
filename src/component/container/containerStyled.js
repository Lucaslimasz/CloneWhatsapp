import styled from 'styled-components';

import imgBackground from '../../image/background.jpg';

export const Wrapper = styled.div`
    background: #ededed;
    width: 100%;
    height: 100vh;
    align-items: center;
`;

export const BackgroundGreen = styled.div`
    background: #00bfa5;
    width: 100%;
    height: 20vh;
`;

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

export const ContainerContact = styled.div`
    width: 40%;
    height: 100%;
    background: white;
    border-radius: 10px 0 0 10px;
`;

export const Information = styled.div`
    width: 100%;
    height: 90px;
    background: #ededed;
    border-left: .2px solid rgba( 159, 159, 159 ,.5);
    border-radius: 10px 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

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

export const Contact = styled.div`
    width: 100%;
    height: 90px;
    background: #ededed;
    border-left: .2px solid rgba( 159, 159, 159 ,.4);
    border-radius: 0 10px 0 0;
`;

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

export const ContainerMessage = styled.div`
    width: 60%;
    height: 100%;
    border-radius: 0 10px 10px 0px;
    background-image: url(${imgBackground});
`;

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

export const Hours = styled.div`
   width: 35%;
   display: flex;
   justify-content: flex-end;
   
`;



