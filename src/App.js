import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import LoginForm from './component/LoginForm'
import './App.css';

import ChatFeed from './component/ChatFeed'

const projectID = 'ff328927-e304-48ef-baed-c542bf8b280b';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App

