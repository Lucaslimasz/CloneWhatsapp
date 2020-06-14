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
        Conversation, NumberAndMessage, Hours, ContainerConversation,
        InputText, MessageContact
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
                                    <i className="fas fa-ellipsis-v fa-2x"></i>
                                    <i className="fas fa-comment-alt fa-2x"></i>
                                </div>
                            </Information>
                            <ContactInformation>
                                <div> 
                                    <i className="fas fa-search "></i>
                                    <input type="text" placeholder="Procurar ou começar uma nova conversa" />
                                </div>
                            </ContactInformation>
                        

                            <ContainerConversation>

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
                                    <img src={image8} alt="img" />
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

                                <Conversation>
                                    <img src={image1} alt="img" />
                                    <NumberAndMessage>
                                        <a>+55 83 98905-0001</a>
                                        <p>Clonando o zapizapi</p>
                                    </NumberAndMessage>
                                    <Hours>14:53</Hours>

                                </Conversation>
                            </ContainerConversation>

                        </ContainerContact>
                        <ContainerMessage>
                            <Contact>
                                <img src={imgContact} alt="img" />
                                <p>+21 22 2211-2211</p>

                                <div>
                                    <i className="fas fa-search fa-2x "></i>
                                    <i className="fas fa-paperclip fa-2x"></i>
                                    <i className="fas fa-ellipsis-v fa-2x"></i>
                                </div>

                            </Contact>
                            
                            <MessageContact>
                                
                            </MessageContact>

                            <InputText>
                                <i className="far fa-laugh fa-2x"></i>
                                <input type="text" placeholder="Deixe uma mensagem" />
                                <i class="fas fa-microphone fa-2x"></i>
                            </InputText>
                        </ContainerMessage>
                    </Container>
                 </BackgroundGreen>
             </Wrapper>
        )
    }
}