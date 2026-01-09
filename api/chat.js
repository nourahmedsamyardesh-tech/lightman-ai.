export default async function handler(req, res) {
  const { message } = req.body;
  try {
    // استخدام موديل البحث المتطور ليكون بذكاء Gemini
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=search&system=أنت لايت مان العبقري. ابحث دائمًا عن روابط فيديوهات يوتيوب لو طلب المستخدم ملخص أو قصة أنمي. لو طلب صورة حط الرابط بعد IMAGE_URL: ولو فيديو يوتيوب حطه بعد VIDEO_URL:`);
    const responseText = await aiResponse.text();

    let reply = responseText.replace(/[#*`_]/g, '');

    // توليد الصور الذكية
    if (message.includes("صورة") || message.includes("ارسم")) {
      const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " cinematic anime style, 4k")}`;
      reply = `IMAGE_URL:${imgUrl} \n جاري رسم طلبك..`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: "ثانية واحدة يا بطل.." });
  }
}
