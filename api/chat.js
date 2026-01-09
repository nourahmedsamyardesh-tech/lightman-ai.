export default async function handler(req, res) {
  const { message } = req.body;
  try {
    // محرك بحث وذكاء متطور جداً
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=search&system=أنت لايت مان، ذكاء اصطناعي عبقري ومصري دمك خفيف. لو المستخدم طلب ملخص أنمي أو قصة، لازم تبعت رابط فيديو يوتيوب حقيقي. لو طلب صورة، ابدأ ردك بكلمة IMAGE_URL: متبوعة بالرابط.`);
    const responseText = await aiResponse.text();

    let reply = responseText.replace(/[#*`_]/g, '');

    // توليد الصور لو طلب رسم
    if (message.includes("صورة") || message.includes("ارسم") || message.includes("صوره")) {
      const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " masterpiece, high quality anime style")}`;
      reply = `IMAGE_URL:${imgUrl} \n حاضر من عينيا، برسم لك أحلى صورة!`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: "دماغي هنجت ثانية، جرب تاني!" });
  }
}
