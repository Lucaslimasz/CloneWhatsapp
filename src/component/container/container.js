import React from 'react';

import imgContact from '../../image/imageContact.jpg';
import image1 from '../../image/allContact/image1.jpg'
import image2 from '../../image/allContact/image2.jpg'
import image3 from '../../image/allContact/image3.jpg'
import image5 from '../../image/allContact/image5.jpg'
import image6 from '../../image/allContact/image6.jpg'
import image7 from '../../image/allContact/image7.jpg'
import image8 from '../../image/allContact/image4.jpg'



import { Wrapper, BackgroundGreen, Container, ContainerContact,
        ContainerMessage, Information, Contact, ContactInformation,
        Conversation, NumberAndMessage, Hours
    } from './containerStyled';

export default class container extends React.Component{
    render(){
        return(
             <Wrapper>
                 <BackgroundGreen>
                    <Container>
                        <ContainerContact>
                            <Information>
                                <img src={imgContact} alt="img" />
                                <div>
                                    <i class="fas fa-ellipsis-v fa-2x"></i>
                                    <i className="fas fa-comment-alt fa-2x"></i>
                                </div>
                            </Information>
                            <ContactInformation>
                                <div> 
                                    <i className="fas fa-search "></i>
                                    <input type="text" placeholder="Procurar ou começar uma nova conversa" />
                                </div>
                            </ContactInformation>

                            <Conversation>
                                <img src={image1} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>
                            <Conversation>
                                <img src={image2} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>
                            <Conversation>
                                <img src={image3} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>
                            <Conversation>
                                <img src={image5} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>
                            <Conversation>
                                <img src={image6} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>

                            <Conversation>
                                <img src={image7} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>
                            <Conversation>
                                <img src={image8} alt="img" />
                                <NumberAndMessage>
                                    <a>+55 83 98905-0001</a>
                                    <p>Clonando o zapizapi</p>
                                </NumberAndMessage>
                                <Hours>14:53</Hours>

                            </Conversation>

                        </ContainerContact>
                        <ContainerMessage>
                            <Contact>

                            </Contact>
                        </ContainerMessage>
                    </Container>
                 </BackgroundGreen>
             </Wrapper>
        )
    }
}