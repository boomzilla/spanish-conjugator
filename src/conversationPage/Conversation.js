import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import RandomButton from '../components/home/Options/RandomButton';
import OptionsButton from '../components/home/Options/OptionsButton';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Open Sans',
  headerBgColor: 'blue',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: 'blue',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const Conversation = () => {
    return ( 
        <div>
            <div style={{marginLeft: '30px'}}>
                <ThemeProvider theme={theme}>
                    <ChatBot
                        speechSynthesis={{ enable: true, lang: 'es' }}
                        steps={[
                            {
                                id: '1',
                                message: 'Hola! ¿Cómo estás?',
                                trigger: '2',
                            },
                            {
                                id: '2',
                                user: true,
                                trigger: '3',
                            },
                            {
                                id: '3',
                                message: '¿Cómo te llamas?',
                                trigger: '4',
                            },
                            {
                                id: '4',
                                user: true,
                                trigger: '5',
                            },
                            {
                                id: '5',
                                message: '¿De dónde eres?',
                                trigger: '6',
                            },
                            {
                                id: '6',
                                user: true,
                                trigger: '7',
                            },
                            {
                                id: '7',
                                message: '¿En qué trabajas?',
                                trigger: '8'
                            },
                            {
                                id: '8',
                                user: true,
                                trigger: '9',
                            },
                            {
                                id: '9',
                                message: '¿Cuánto tiempo llevas aquí?',
                                trigger: '10',
                            },
                            {
                                id: '10',
                                user: true,
                                trigger: '11',
                            },
                            {
                                id: '11',
                                message: '¿Dónde vives?',
                                trigger: '12',
                            },
                            {
                                id: '12',
                                user: true,
                                trigger: '13',
                            },
                            {
                                id: '13',
                                message: '¿Te gusta la comida colombiana?',
                                trigger: '14',
                            },
                            {
                                id: '14',
                                user: true,
                                trigger: '15',
                            },
                            // {
                            //     id: '15',
                            //     message: '',
                            //     trigger: '',
                            // },
                            // {
                            //     id: '',
                            //     user: true,
                            //     trigger: '',
                            // },
                            {
                                id: '15',
                                user: true,
                                trigger: '16',
                            },
                            {
                                id: '16',
                                message: '¿Qué música prefieres?',
                                trigger: '17',
                            },
                            {
                                id: '17',
                                user: true,
                                trigger: '18',
                            },
                            {
                                id: '18',
                                message: '¿Qué deportes te gusta ver?',
                                trigger: '19',
                            },
                            {
                                id: '19',
                                user: true,
                                trigger: '20',
                            },
                            {
                                id: '20',
                                message: 'Yo soy muy interesante! Hasta luego!',
                                end: true,
                            },
                            
                        ]}
                    />
                </ThemeProvider> 
            </div>
            <RandomButton />
            <OptionsButton />
        </div>
    );
}
 
export default Conversation;