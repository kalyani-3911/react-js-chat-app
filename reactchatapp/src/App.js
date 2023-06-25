import React, { useState } from 'react';
import './App.css';

const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: Date.now(),
      user: randomUser,
      content: message,
      likes: 0,
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleLikeClick = (id) => {
    const updatedMessages = messages.map((msg) => {
      if (msg.id === id) {
        return {
          ...msg,
          likes: msg.likes + 1,
        };
      }
      return msg;
    });

    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <div className="Card">
        <div className="CardHeader">
          <h1>Chat</h1>
        </div>
        <div className="CardBody">
          <div className="Chat">
            {messages.map((msg) => (
              <div key={msg.id} className="Message">
                <span className="Username">{msg.user}:</span>
                <span className="Content">{msg.content}</span>
                <button className="LikeButton" onClick={() => handleLikeClick(msg.id)}>
                  Like ({msg.likes})
                </button>
              </div>
            ))}
          </div>
          <div className="Input">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
