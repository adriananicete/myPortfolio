const responses = {
  name:
  'My name is Adrian Pablo Anicete, 29 years old.',
  about:
    '👋 This is Adrian Anicete from Bulacan, Philippines. He’s a Full-Stack Web Developer who loves building modern, user-friendly websites. He’s always learning new things, experimenting with frontend and backend development, and improving his skills along the way.',
  pricing:
    'His rates start at $500 for basic websites and $1,500+ for full-stack applications, depending on the scope and complexity of the project.',
  price:
    'My rates start at $500 for basic websites and $1,500+ for full-stack applications. Would you like a detailed quote based on your specific project requirements?',
  availability:
    'I’m currently available and ready to start working on projects. I can adapt to flexible schedules and am open to both full-time and remote opportunities 😊.',
  available:
    "He is currently accepting new projects! 😊 My typical turnaround is 2-4 weeks depending on complexity. What's your timeline for the project?",
  portfolio:
    "You can check my latest projects in the Projects section above. I specialize in React, Node.js, and full-stack applications. Any specific type of project you'd like to see?",
  projects:
    "You can check my latest projects in the Projects section above. I specialize in React, Node.js, and full-stack applications. Any specific type of project you'd like to see?",
  contact:
    "You can reach me in my phone number: 0908-240-9309 or through the contact form on my website. I typically respond within 24 hours! What's the best way to reach you?",
  email:
    "You can reach me at anicete.ian14@gmail.com or through the contact form on my website. I typically respond within 24 hours! What's the best way to reach you?",
  services:
    'I offer full-stack web development, including frontend (React, Vue), backend (Node.js, Express), databases (MongoDB, MySQL), and deployment. What type of project do you have in mind?',
  skills:
    'Adrian specializes in frontend development with HTML, CSS, JavaScript, and React, and backend development using Node.js and Express. He’s also familiar with databases like MySQL and MongoDB, version control with Git & GitHub.',
  hello:
    "Hello! Nice to meet you! 👋 I'm here to help answer any questions about Adrian's services, availability, or portfolio. What would you like to know?",
  hi: "Hi there! 👋 I'm ianDev. How can I help you today?",
  help: "I can help you with information about Adrian's services, pricing, availability, portfolio, or contact details. Just ask me anything!",
  default:
    'Thanks for your message! For specific inquiries, please feel free to contact Adrian directly through the contact form or email. Is there anything else I can help you with regarding his services?',
  thank: 'Youre always welcome! 😊',
  wife: 'My wife is Roselyn Soriano-Anicete and she is so beautiful 🥰.',
  birthday: 'I was born on April 14, 1996.',
  civil: 'I’m happily married.',
  married: 'Yes, I’m happily married 😊.',
  strength:
    'Im a fast learner, enjoys experimenting and debugging, communicates technical concepts clearly, and works well in collaborative team environments 😊.',
  goal: 'My career goal is to grow as a Full-Stack Web Developer, building modern, efficient, and user-friendly web applications. I aim to continuously improve my skills in both frontend and backend development, contribute to meaningful projects, and work on scalable solutions that make a real impact in the tech industry 😊.',
  remote:
    'I am available for remote work and can also adapt to flexible schedules. I’m comfortable collaborating with teams online and using tools that make remote projects efficient and seamless 😊.',
  experience:
    'I’m a career shifter currently transitioning into Full-Stack Web Development. While I don’t have formal work experience in development yet, I’ve been building projects, learning modern technologies, and gaining practical skills in both frontend and backend development. I’m eager to apply what I’ve learned in real-world projects and grow as a developer 😊.',
  start:
    'I’m available to start immediately and can adapt to flexible schedules, whether it’s full-time, part-time, or remote work 😊.',
  hobbies:
    'My hobbies include playing basketball 🏀, playing chess ♟️, playing online games 🎮, and playing the electric guitar 🎸. I also enjoy reading and exploring new ideas.',
    programm:
    'I know JavaScript as my main programming language 😊, and I use HTML, CSS, React, Node.js, and MongoDB for building web applications.',
    framework:
    'Yes, I’m familiar with React for frontend development, Node.js with Express for backend development, and I’m continuously learning other modern frameworks and tools to expand my skills 😊.',
    salary:
    'My asking salary is ranging at 30,000 to 35,000 pesos only 😊.'
};

// Get DOM elements
const openChatBtn = document.getElementById('openChatBtn');
const closeChatBtn = document.getElementById('closeChatBtn');
const chatWidget = document.getElementById('chatWidget');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const quickSuggestions = document.getElementById('quickSuggestions');

// Open chat widget
openChatBtn.addEventListener('click', (e) => {
  e.preventDefault();
  chatWidget.classList.add('show');
  chatInput.focus();
});

// Close chat widget
closeChatBtn.addEventListener('click', () => {
  chatWidget.classList.remove('show');
});

// Send message on button click
sendBtn.addEventListener('click', () => {
  sendMessage();
});

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Main send message function
function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Display user message
  displayMessage(message, 'user');
  chatInput.value = '';

  // Show typing indicator
  showTypingIndicator();

  // Simulate API delay and get bot response
  setTimeout(() => {
    hideTypingIndicator();
    const botResponse = getBotResponse(message);
    displayMessage(botResponse, 'bot');
    hideQuickSuggestions();
  }, 1500);
}

// Quick message function
function sendQuickMessage(keyword) {
  const message = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  displayMessage(message, 'user');

  showTypingIndicator();
  setTimeout(() => {
    hideTypingIndicator();
    const botResponse =
      responses[keyword.toLowerCase()] || responses['default'];
    displayMessage(botResponse, 'bot');
    hideQuickSuggestions();
  }, 1000);
}

// Display message in chat
function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML =
    '<div class="typing-dots"><span></span><span></span><span></span></div>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// // Hide quick suggestions after first message
function hideQuickSuggestions() {
  quickSuggestions.style.display = 'none';
}

// Get bot response based on user message
function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();

  // Check for keywords in the message
  for (const keyword in responses) {
    if (message.includes(keyword)) {
      return responses[keyword];
    }
  }

  return responses['default'];
}

// Close chat when clicking outside
document.addEventListener('click', (e) => {
  if (!chatWidget.contains(e.target) && !openChatBtn.contains(e.target)) {
    // Optional: Auto-close when clicking outside
    // chatWidget.classList.remove('show');
  }
});

// Prevent chat from closing when clicking inside
chatWidget.addEventListener('click', (e) => {
  e.stopPropagation();
});
