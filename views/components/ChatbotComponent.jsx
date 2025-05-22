import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '1',
    message: 'Hi, welcome to HopeAid! How can I assist you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'donate', label: 'How can I donate?', trigger: 'donate' },
      { value: 'volunteer', label: 'How can I volunteer?', trigger: 'volunteer' },
      { value: 'contact', label: 'How to contact HopeAid?', trigger: 'contact' },
    ],
  },
  {
    id: 'donate',
    message: 'You can donate online through our secure payment gateway on the Donations page.',
    end: true,
  },
  {
    id: 'volunteer',
    message: 'We’re happy you want to help! Visit our Volunteer page to sign up.',
    end: true,
  },
  {
    id: 'contact',
    message: 'You can reach us via email at contact@hopeaid.org or call us at (123) 456-7890.',
    end: true,
  },
];

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#068278',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#068278',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      <button
        onClick={() => setShowChat(prev => !prev)}
        aria-label={showChat ? 'Close chat' : 'Open chat'}
        style={{
          backgroundColor: '#068278',
          border: 'none',
          borderRadius: '50%',
          width: 56,
          height: 56,
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 0,
        }}
      >
        {showChat ? (
          // Close (X) icon SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Chat bubble SVG icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {showChat && (
        <div
          style={{
            marginTop: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            borderRadius: 8,
            width: 320,
            maxWidth: '100vw',
            backgroundColor: '#fff',
          }}
        >
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
