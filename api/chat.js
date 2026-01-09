export default async function handler(req, res) {
  const { message } = req.body;
  try {
    // استخدام نموذج متقدم يدعم الذكاء المنطقي السريع
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت لايت مان العبقري. ذكاؤك خارق، تعرف كل الأنميات بالتفصيل. ردودك مصرية عامية ذكية جداً ومختصرة. إذا طلب صورة، أرسل رابط الصورة فقط بعد جملة IMAGE_URL:`);
    let text = await aiResponse.text();

    let reply = text.replace(/[#*`_]/g, '');
    if (message.includes("صورة") || message.includes("ارسم")) {
      const imgPath = `https://pollinations.ai/p/${encodeURIComponent(message + " cinematic anime style, 8k, detailed")}`;
      reply = `IMAGE_URL:${imgPath} \n جاري رسم صورتك يا بطل!`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: "دماغي مشغولة شوية، جرب تاني!" });
  }
}
