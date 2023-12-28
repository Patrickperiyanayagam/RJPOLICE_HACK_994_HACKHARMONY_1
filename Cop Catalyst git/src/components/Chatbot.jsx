//Chatbot.js
import React from 'react';
import ChatBot from "react-simple-chatbot";
import CustomOptions from './CustomOptions';
import { MyComponent } from './Star';
import Translator from './Translate';
export default function Chatbot(props) {
    const config = {
        floating: true,
        width: '500px',
      };
      const lang = props.lang;
  return (
    <div>
      <ChatBot
          recognitionEnable={true}
          recognitionLang= {lang}
          speechSynthesis={{ enable: true, lang: {lang} }}
          headerTitle="Friendly Bot"
          steps = {[
            {
                id: 'start',
                component: <CustomOptions lang={lang} options={[
                  {value: 1, label: 'Start Conversation',trigger: '0'}
                ]}/>,
                asMessage: true,
            },
            {
                id: '0',
                component: <Translator text = 'Welcome to the Police Feedback Portal. I am FeedCol here to help you..' targetLang = {lang}/>,
                asMessage: true,
                trigger: '1'
            },
            {
                id: '1',
                component: <Translator text = 'Please Enter your Name' targetLang = {lang}/>,
                asMessage: true,
                trigger: '2'
            },
            {
                id: '2',
                user: true,
                trigger: '3'
            },
            {
                id: '3',
                component: <Translator text = 'Enter Your Aadhar Number' targetLang = {lang}/>,
                asMessage: true,
                trigger: '4'
            },
            {
                id: '4',
                user: true,
                trigger: '5'
            },
            {
                id: '5',
                component: <Translator text = 'Enter the area where the incident occured' targetLang = {lang}/>,
                asMessage: true,
                trigger: '6'
            },
            {
                id:'6',
                user: true,
                trigger:'7'
            },
            {
                id:'7',
                component: <Translator text = 'How satisfied were you with your interaction with the police?' targetLang = {lang}/>,
                asMessage: true,
                trigger: '8'
            },
            {
                id:'8',
                user: true,
                trigger:'9'
            },
            {
                id:'9',
                component: <Translator text = 'Thank You!' targetLang = {lang}/>,
                asMessage: true,
                trigger:'10'
            },
            {
                id:'10',
                component: <Translator text = 'Did the police officers treat you respectfully?' targetLang = {lang}/>,
                asMessage: true,
                trigger:'11'
            },
            {
                id:'11',
                component:<CustomOptions lang={lang} options={[
                    {value: 'a', label: "Yes", trigger: '12'},
                    {value: 'b', label: "No", trigger: '12'}
                ]}
                />,
                asMessage: true
            },
            {
                id:'12',
                component: <Translator text = 'Did the police officers communicate clearly and effectively?' targetLang = {lang}/>,
                asMessage: true,
                trigger:'13'
            },
            {
                id:'13',
                component:<CustomOptions lang={lang} options={[
                    {value: 'c' , label: "Yes" ,trigger: '14'},
                    {value: 'd' , label: "No", trigger: '14'},
                ]}
                />,
                asMessage: true
            },
            {
                id:'14',
                component: <Translator text = 'Were the police officers professional in their conduct?' targetLang = {lang}/>,
                asMessage: true,
                trigger:'15'
            },
            {
                id:'15',
                component:<CustomOptions lang={lang} options={[
                    {value: 'c' , label: "Yes" ,trigger: '16'},
                    {value: 'd' , label: "No", trigger: '16'},
                ]}
                />,
                asMessage: true
            },
            {
                id:'16',
                component: <Translator text = 'How much would you rate the overall service provided by the police out of 5?' targetLang = {lang}/>,
                asMessage: true,
                trigger:'17'
            },
            {
                id:'17',
                component: <MyComponent/>,
                asMessage: true,
            },
            {
                id:'18',
                component: <Translator text = 'Thank you for your feedback !!!' targetLang = {lang}/>,
                asMessage: true,
                trigger:'ch'
            },
            {
                id: 'ch',
                component: <CustomOptions lang={lang} options={[
                  {value: 1, label: 'Provide Another Feedback',trigger: '1'},
                  {value: 2, label: 'Quit',trigger: 'end'}
                ]}/>,
                asMessage: true,
            },
            {
                id: 'end',
                component: <Translator text = 'Byee!!' targetLang = {lang}/>,
                asMessage: true,
                end: true
            }
            ]}
            {...config}
          />
    </div>
  )
}