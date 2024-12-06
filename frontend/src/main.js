import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

// Define the API Base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

// Fetch the API message
const fetchHelloMessage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/hello`);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching API message:", error);
    return "Error fetching API message";
  }
};

// Set up the page
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="api-message">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

// Fetch and display the API message
fetchHelloMessage().then((message) => {
  const messageElement = document.querySelector('#api-message');
  messageElement.textContent = message;
});

// Set up the counter
setupCounter(document.querySelector('#counter'));