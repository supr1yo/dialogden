import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

export default function Chat() {

    const [receiveMsg, setReceiveMsg] = useState('');
    const [sendMsg, setSendMsg] = useState('');
    const sendMessage = () => {
        // Sending message to the server
        socket.emit('send_message', sendMsg);
    }

    const messageHandler = () => {
        socket.on('receive_message', (data) => {
            setReceiveMsg(data);
        })
    }


    useEffect(() => {
        messageHandler()
    }, []);

    
    return (
        <div>
            <input type="text" name="" id=""
                onChange={(event) => setSendMsg(event.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
            {receiveMsg}
        </div>
    )
}