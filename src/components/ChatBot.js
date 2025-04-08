import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './ChatBot.css';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY || 'AIzaSyCOBDd6LAww-9kwBE05_Uzl2ArGb0tBNhs';
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || '🤖 Unable to generate response.';

      const botMessage = { text: botResponse, sender: 'bot', timestamp: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: `⚠️ Error: ${error.message}`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!isVisible) return null;

  return (
    <div className={`chatbot-container ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="chatbot-header">
        <h2>💬 SmartSaver ChatBot</h2>
        <div className="chatbot-controls">
          <button className="fullscreen-btn" onClick={() => setIsFullscreen(!isFullscreen)}>
            <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
          </button>
          <button className="close-btn" onClick={() => setIsVisible(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-text">{msg.text}</div>
            <div className="timestamp">{msg.timestamp}</div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="message-text">
              <FontAwesomeIcon icon={faSpinner} spin /> Thinking...
            </div>
          </div>
        )}
        <div ref={messageEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
        />
        <button className="send-btn" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
