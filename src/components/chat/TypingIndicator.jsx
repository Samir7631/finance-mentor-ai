function TypingIndicator() {
return (
<div className="flex justify-start">
<div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white">
<div className="flex items-center gap-1">
<span className="h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:-0.3s]"></span>
<span className="h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:-0.15s]"></span>
<span className="h-2 w-2 animate-bounce rounded-full bg-white/70"></span>
</div>
</div>
</div>
);
}

export default TypingIndicator;