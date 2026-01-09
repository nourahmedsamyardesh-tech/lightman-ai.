export default async function handler(req, res) {
  const { message } = req.body;
  try {
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=search&system=أنت لايت مان العبقري. إذا طلب المستخدم فيديو، ابحث عن رابط يوتيوب حقيقي واكتبه بعد VIDEO_URL: مباشرة. إذا طلب صورة، اكتب رابط الصورة بعد IMAGE_URL: مباشرة.`);
    const text = await aiResponse.text();

    let reply = text.replace(/[#*`_]/g, '');

    if (message.includes("صورة") || message.includes("ارسم")) {
      const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " anime style high quality")}`;
      reply = `IMAGE_URL:${imgUrl} \n جاري رسم صورتك..`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: "ثانية واحدة.." });
  }
}
