import ChatBox from "../components/chat/ChatBox";

function Home() {
return (
<div className="min-h-screen bg-[#0b1020] text-white">
<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
<header className="mb-8 flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
Finance Mentor AI
</h1>
<p className="mt-1 text-sm text-white/70 sm:text-base">
A focused chatbot that simplifies personal finance for everyday users.
</p>
</div>

<div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
Built for clarity
</div>
</header>

<section className="grid flex-1 gap-6 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1">
<div className="max-w-xl">
<p className="mb-3 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
Topic-specific AI experience
</p>

<h2 className="text-4xl font-bold leading-tight sm:text-5xl">
Understand money better, one question at a time.
</h2>

<p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
Finance Mentor AI is designed to make personal finance feel less intimidating.
Ask about budgeting, credit scores, SIPs, emergency funds, and saving habits in
a conversational format built for clarity and speed.
</p>

<div className="mt-8 flex flex-wrap gap-3">
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
Credit Score Tips
</span>
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
SIP Basics
</span>
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
Budget Planning
</span>
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
Emergency Fund
</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<ChatBox />
</div>
</section>
</div>
</div>
);
}

export default Home;