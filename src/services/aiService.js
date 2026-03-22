export async function getFinanceReply(userMessage) {
const apiKey = import.meta.env.VITE_GROQ_API_KEY;

if (!apiKey) {
throw new Error("Missing Groq API key. Add VITE_GROQ_API_KEY in .env");
}

const systemPrompt = `
You are Finance Mentor AI, a friendly finance-focused chatbot.

Your role:
- Help users understand personal finance in simple language
- Explain budgeting, saving, emergency funds, debt, credit scores, SIPs, mutual funds, basic investing, and financial habits
- Be educational, practical, and beginner-friendly
- Keep answers concise but useful
- Use bullet points when helpful
- Avoid jargon unless you explain it simply

Rules:
- Do not pretend to be a licensed financial advisor
- Do not guarantee returns or recommend risky/speculative actions as certain wins
- Encourage users to do their own research before major financial decisions
- If a question depends on country-specific tax/legal rules, clearly mention that rules vary by country
- If the user asks something unsafe or clearly beyond your scope, respond carefully and suggest consulting a qualified professional
`;

const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
Authorization: `Bearer ${apiKey}`,
},
body: JSON.stringify({
model: "llama-3.1-8b-instant",
messages: [
{ role: "system", content: systemPrompt },
{ role: "user", content: userMessage },
],
temperature: 0.7,
max_tokens: 500,
}),
});

if (!response.ok) {
const errorText = await response.text();
throw new Error(errorText || "Failed to fetch AI response");
}

const data = await response.json();
return data.choices?.[0]?.message?.content || "Sorry, I could not generate a response.";
}