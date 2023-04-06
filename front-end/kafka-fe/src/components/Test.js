import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Test = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io('wss://localhost:2108/dish/api/hola-canteen/');

    socket.on('bartendingOrder', (data) => {
        console.log("===== receive| "+data)
      setMessage(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const send = () => {
    const socket = io('v://localhost:2108/dish/api/hola-canteen/');
    socket.emit('message', 'Hello, WebSocket!');
    socket.disconnect();
  };

  return (
    <div>
      <p>Last message received: {message}</p>
      <button onClick={send}>Send message to WebSocket</button>
    </div>
  );
};

export default Test;