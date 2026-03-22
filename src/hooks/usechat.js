import { useState } from "react";
import { getFinanceReply } from "../services/aiService";

const formatTime = () =>
new Date().toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit",
});

const initialMessages = [
{
id: 1,
sender: "bot",
text: "Hi, I’m Finance Mentor AI. I can help you understand saving, budgeting, credit scores, and investing in simple language.",
time: formatTime(),
},
];

function useChat() {
const [messages, setMessages] = useState(initialMessages);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);

const sendMessage = async (customText) => {
const messageText =
typeof customText === "string" ? customText.trim() : input.trim();

if (!messageText || loading) return;

const userMessage = {
id: Date.now(),
sender: "user",
text: messageText,
time: formatTime(),
};

setMessages((prev) => [...prev, userMessage]);
setInput("");
setLoading(true);

try {
const reply = await getFinanceReply(messageText);

const botMessage = {
id: Date.now() + 1,
sender: "bot",
text: reply,
time: formatTime(),
};

setMessages((prev) => [...prev, botMessage]);
} catch (error) {
const errorMessage = {
id: Date.now() + 1,
sender: "bot",
text: "Something went wrong while fetching the AI response. Please check your API key or try again.",
time: formatTime(),
};

setMessages((prev) => [...prev, errorMessage]);
console.error("AI Error:", error);
} finally {
setLoading(false);
}
};

const clearChat = () => {
setMessages(initialMessages);
setInput("");
setLoading(false);
};

return {
messages,
input,
setInput,
loading,
sendMessage,
clearChat,
};
}

export default useChat;
