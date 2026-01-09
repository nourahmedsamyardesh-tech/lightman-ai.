export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { message, image } = req.body;

  try {
    // استخدام أذكى موديل متاح للردود المنطقية العميقة (Deep Knowledge)
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت لايت مان، ذكاء اصطناعي بمستوى Gemini و DeepSeek. أنت خبير في كل شيء، وتتحدث بلهجة مصرية عامية ذكية جداً. لو المستخدم سألك عن أنمي، هات روابط فيديوهات يوتيوب حقيقية بعد VIDEO_URL: ولو طلب صورة حط الرابط بعد IMAGE_URL:`);
    
    const responseText = await aiResponse.text();
    let finalReply = responseText.replace(/[#*`_]/g, '');

    // ذكاء توليد الصور (Image Generation Engine)
    if (message.includes("ارسم") || message.includes("صورة")) {
      const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " ultra realistic, 8k, cinematic anime")}`;
      finalReply = `IMAGE_URL:${imgUrl} \n ${finalReply}`;
    }

    return res.status(200).json({ reply: finalReply });
  } catch (error) {
    return res.status(500).json({ reply: "عقلي يحتاج لثانية للتفكير في هذا السؤال العميق!" });
  }
}
