function InputBar({ input, setInput, onSend, loading }) {
const handleKeyDown = (e) => {
if (e.key === "Enter") {
e.preventDefault();
onSend();
}
};

return (
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#11182d] p-3">
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
onKeyDown={handleKeyDown}
placeholder="Ask anything about finance..."
className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
/>
<button
type="button"
onClick={() => onSend()}
disabled={loading}
className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
>
{loading ? "Thinking..." : "Send"}
</button>
</div>
);
}

export default InputBar;