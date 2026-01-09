export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  
  const { message } = req.body;

  try {
    // استخدام نموذج Flux/OpenAI المتطور للدردشة السريعة
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=search&system=أنت هو لايت مان، مساعد ذكي جداً وخبير أنمي. ردودك بالعامية المصرية، سريعة، دقيقة، وممنوع تكتب رموز برمجية أو علامات غريبة. خليك دايماً ذكي ومختصر.`);
    
    const text = await response.text();
    
    // تنظيف النص من أي رموز غريبة (Markdown) عشان الرد يكون نضيف
    const cleanText = text.replace(/[#*`_]/g, '');

    return res.status(200).json({ reply: cleanText });
  } catch (error) {
    return res.status(200).json({ reply: "معلش يا صاحبي، دماغي هنجت ثانية، اسأل تاني!" });
  }
}
