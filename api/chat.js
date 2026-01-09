export default async function handler(req, res) {
  const { message } = req.body;
  try {
    // استخدام نموذج أذكى يدعم البحث والتحليل العميق
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=search&system=أنت لايت مان، ذكاء اصطناعي عبقري، تفهم كل شيء بدقة مثل Gemini. ردودك مصرية عامية ذكية جداً. لو طلب صورة، حط الرابط بعد IMAGE_URL:`);
    const responseText = await aiResponse.text();

    let reply = responseText.replace(/[#*`_]/g, '');

    // ذكاء الصور المطور
    if (message.includes("صورة") || message.includes("ارسم")) {
      const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " ultra realistic, anime style, 4k")}`;
      reply = `IMAGE_URL:${imgUrl} \n تفضل هذه الصورة التي طلبتها!`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: "عذراً، أحتاج لثانية للتفكير.." });
  }
}
