import { useEffect, useRef } from "react";
import useChat from "../../hooks/usechat";
import InputBar from "./InputBar";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const suggestions = [
"How does SIP work?",
"How do I start budgeting?",
"How can I save tax legally?",
"What affects credit score?",
];

function ChatBox() {
const { messages, input, setInput, loading, sendMessage, clearChat } = useChat();
const messagesEndRef = useRef(null);

useEffect(() => {
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);

return (
<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
<div className="border-b border-white/10 px-5 py-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/20 text-lg">
💸
</div>
<div>
<h3 className="font-semibold">Finance Mentor AI</h3>
<p className="text-sm text-emerald-300">Online now</p>
</div>
</div>

<button
onClick={clearChat}
className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 transition hover:bg-white/10"
>
Clear chat
</button>
</div>
</div>

<div className="max-h-[420px] space-y-4 overflow-y-auto px-5 py-5">
{messages.map((message) => (
<MessageBubble
key={message.id}
sender={message.sender}
text={message.text}
time={message.time}
/>
))}

{loading && <TypingIndicator />}
<div ref={messagesEndRef} />
</div>

<div className="border-t border-white/10 px-5 py-4">
<p className="mb-3 text-xs uppercase tracking-wide text-white/50">
Try asking
</p>

<div className="mb-4 flex flex-wrap gap-2">
{suggestions.map((item) => (
<button
key={item}
onClick={() => sendMessage(item)}
className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
>
{item}
</button>
))}
</div>

<InputBar
input={input}
setInput={setInput}
onSend={sendMessage}
loading={loading}
/>
</div>
</div>
);
}

export default ChatBox;