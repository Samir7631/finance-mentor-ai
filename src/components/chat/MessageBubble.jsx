function MessageBubble({ sender, text, time }) {
const isUser = sender === "user";

return (
<div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
<div
className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:text-[15px] ${
isUser
? "bg-emerald-400 text-black"
: "border border-white/10 bg-white/10 text-white"
}`}
>
<p className="whitespace-pre-line">{text}</p>
<span
className={`mt-2 block text-[11px] ${
isUser ? "text-black/70" : "text-white/50"
}`}
>
{time}
</span>
</div>
</div>
);
}

export default MessageBubble;