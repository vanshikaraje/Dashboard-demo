'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './assistant.module.css'; // ✅ Correct relative path

const AssistantPage = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    const btn = document.getElementById("btn");
    const voice = document.getElementById("voice");

    const speak = (text) => {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-GB";
      window.speechSynthesis.speak(speech);
    };

    const takeCommand = (message) => {
      voice.style.display = "none";
      btn.style.display = "flex";

      let reply = "I didn't understand that.";
      if (message.includes("hello")) {
        reply = "Hello! What can I help you with?";
      } else if (message.includes("open google")) {
        reply = "Opening Google...";
        window.open("https://google.com", "_blank");
      } else if (message.includes("time")) {
        reply = "The time is " + new Date().toLocaleTimeString();
      } else {
        reply = "Searching Google for " + message;
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
      }

      setChatMessages(prev => [...prev, { sender: 'assistant', text: reply }]);
      speak(reply);
    };

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      contentRef.current.textContent = transcript;
      setChatMessages(prev => [...prev, { sender: 'user', text: transcript }]);
      takeCommand(transcript.toLowerCase());
    };

    btn.addEventListener("click", () => {
      recognition.start();
      voice.style.display = "block";
      btn.style.display = "none";
    });

    return () => {
      btn.removeEventListener("click", () => {});
    };
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const message = inputText.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: message }]);
    setInputText('');
    contentRef.current.textContent = message;
    const reply = "You said: " + message;
    setChatMessages(prev => [...prev, { sender: 'assistant', text: reply }]);
    const speech = new SpeechSynthesisUtterance(reply);
    speech.lang = "en-GB";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className={styles.assistantContainer}>
      <img src="/logo.jpg" alt="logo" className={styles.logo} />
      <h1>
        I’m <span className={styles.name}>Echo</span>, Colabzi's{' '}
        <span className={styles.va}>Help Desk</span>
      </h1>
      <img src="/voice.gif" alt="voice" id="voice" className={styles.voice} />
      <button id="btn" className={styles.btn}>
        <img src="/mic.svg" alt="mic" />
        <span id="content" ref={contentRef}>Click here to speak</span>
      </button>

      {/* Chat Section */}
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.chatBubble} ${msg.sender === 'user' ? styles.user : styles.assistant}`}
            >
              <strong>{msg.sender === 'user' ? 'You' : 'Colabzi'}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className={styles.inputRow}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className={styles.chatInput}
          />
          <button onClick={handleSend} className={styles.sendBtn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AssistantPage;
