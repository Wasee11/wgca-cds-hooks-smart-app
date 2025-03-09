import './style.css';
import { setupChat } from './chatSetup.js';
import { setupPatientInfo } from './patient.js';

document.querySelector('#chat').innerHTML = `
  <div class="app-container">
    <!-- Patient Information (Left) -->
    <div class="patient-info">
      <h2 class="text-lg font-semibold text-white mb-2">Patient Information</h2>
      <div id="patientInfo" class="info-box">
        <div class="animate-pulse">
          <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>
    </div>

    <!-- Chat Container (Right) -->
    <div class="chat-wrapper">
      <header class="text-center mb-4">
        <h1 class="text-3xl font-bold text-white">Welcome!</h1>
        <p class="text-gray-300">To MediMind</p>
      </header>

      <!-- Chat Messages -->
      <div class="chat-container" id="chatContainer">
        <div class="bot-message message">
          👋 Hello! I'm your healthcare assistant. How can I help you today?
        </div>
      </div>

      <!-- Input Field & Button (Sticks to Bottom) -->
      <div class="input-container">
        <input 
          type="text" 
          id="userInput"
          class="chat-input"
          placeholder="Type your message here..."
        >
        <button 
          id="sendButton"
          class="send-button"
        >
          ➤
        </button>
      </div>
    </div>
  </div>
`;

// Initialize the chat system
setupChat(
  document.querySelector('#chatContainer'),
  document.querySelector('#userInput'),
  document.querySelector('#sendButton')
);

// Initialize patient information
setupPatientInfo(document.querySelector('#patientInfo'));
