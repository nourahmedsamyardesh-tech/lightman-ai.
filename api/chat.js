export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    
    // سيتم جلب المفتاح من إعدادات Vercel للأمان
    const key = process.env.KEY1; 
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: req.body.prompt }] }] })
        });
        const data = await response.json();
        res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
    } catch (err) {
        res.status(500).json({ reply: "فشل الاتصال بمحرك الذكاء الاصطناعي." });
    }
}
