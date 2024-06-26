import  io  from 'socket.io-client';

const socket = io('http://localhost:8080');

export default function Chat() {

    const sendMessage = () => {
        // Sending message to the server
        socket.emit('send_message', {message: 'hi'})
    }
    return (
        <div>
            <input type="text" name="" id="" />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}