import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

function Chat() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log("It's running");
    socket.on('welcome', data => console.log(data));

    return () => socket.disconnect(true);
  }, []);

  return (
    <div>
      <h1>This is a socket test! Yay, be happy....</h1>
    </div>
  );
}

export default Chat;


