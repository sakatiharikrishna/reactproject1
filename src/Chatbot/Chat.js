import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function Chat() {

    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our Website",
            trigger: "Ask Name",
        },
        {
            id: "Ask Name",
            message: "Please Enter Your name",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue}, Please select your issue",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                { value: "React", label: "React",trigger: "React"},
                { value: "Angular", label: "Angular",trigger: "Angular"},
        ],
        },
        {
            id: "React",
            message: "Thanks for telling your react issue",
            end:true
        },
        {
            id: "Angular",
            message: "Thanks for telling your angular issue",
            end:true
        },
    ];
  return (
    <>
    <h1>React</h1>
      <Segment style={{float:"right"}}>
          <ChatBot steps={steps} />
      </Segment>
    </>
  )
}

export default Chat
