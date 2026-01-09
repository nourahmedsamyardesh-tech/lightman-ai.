export default async function handler(req, res) {
  const { message } = req.body;

  try {
    // لو المستخدم طلب صورة (أنمي)
    if (message.includes("صورة") || message.includes("ارسم")) {
      const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " anime style, high quality")}`;
      return res.status(200).json({ reply: `تفضل هذه الصورة التي طلبتها: ${imageUrl}` });
    }

    // الرد الذكي السريع
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت لايت مان، مساعد ذكي جداً خبير أنمي، ترد بصوت وصورة، وتتحدث مصرية عامية.`);
    let responseText = await aiResponse.text();

    return res.status(200).json({ reply: responseText.replace(/[#*`_]/g, '') });
  } catch (error) {
    return res.status(200).json({ reply: "عذراً، فيه مشكلة في الاتصال حالياً!" });
  }
}
