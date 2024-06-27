
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

export default function Chat() {

    const [message, setMessage] = useState('');
    const sendMessage = () => {
        // Sending message to the server
        socket.emit('send_message', {message: 'hi'})
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessage(data);
        })
    })
    return (
        <div>
            <input type="text" name="" id="" />
            <button onClick={sendMessage}>Send</button>
            {message}
        </div>
    )
}