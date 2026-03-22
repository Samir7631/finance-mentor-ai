# Finance Mentor AI

Finance Mentor AI is a topic-specific chatbot built to simplify personal finance concepts through a clean, conversational, and responsive interface. Instead of acting like a generic AI wrapper, it is focused on helping users understand budgeting, savings, SIPs, emergency funds, credit scores, and basic investing in simple language.

## Why I Built This

For this assignment, I wanted to build an AI product that feels purposeful rather than generic. Personal finance is an area where users often need clarity, trust, and simplicity. So I designed Finance Mentor AI as a focused chatbot experience that combines a polished frontend with AI-powered financial guidance for everyday users.

## Core Features

- Topic-specific chatbot experience focused on personal finance
- Clean, modern, and responsive user interface
- Guided prompt suggestions for faster interaction
- Real AI responses powered by Groq
- Loading state with typing indicator
- Message timestamps for a more natural chat feel
- Clear chat option for resetting the session
- Component-based architecture with reusable UI structure

## Frontend Thinking Behind the Product

This project was designed with usability in mind, not just functionality.

- The first screen immediately communicates what the chatbot does
- Suggested prompts reduce friction for first-time users
- The loading indicator improves the conversational feel
- Message styling clearly separates user and AI replies
- The layout is responsive and optimized for a focused chat experience
- The product tone and visual direction are aligned with the finance theme

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Groq API

## Project Structure

```bash
src/
├── components/
│ ├── chat/
│ │ ├── ChatBox.jsx
│ │ ├── InputBar.jsx
│ │ ├── MessageBubble.jsx
│ │ └── TypingIndicator.jsx
│ └── ui/
├── hooks/
│ └── useChat.js
├── pages/
│ └── Home.jsx
├── services/
│ └── aiService.js
├── utils/
└── assets/

LOCAL SET UP
clone the repository and install dependencies: npm install
create a .env file in the project root VITE-GROQ-API-KEY= your groq api key
start dev server : npm run dev
