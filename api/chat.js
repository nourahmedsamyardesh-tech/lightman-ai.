export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      // هذا الرابط يربط بوتك بذكاء اصطناعي حقيقي ليرد على كل الأنميات وغيرها
      const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت هو لايت مان، ذكاء اصطناعي خبير في كل الأنميات والقصص وتتحدث بلهجة مصرية ودودة`);
      const responseText = await aiResponse.text();

      return res.status(200).json({ reply: responseText });
    } catch (error) {
      return res.status(200).json({ reply: "عذراً، عقلي مشغول قليلاً الآن، حاول مرة أخرى!" });
    }
  }
}

