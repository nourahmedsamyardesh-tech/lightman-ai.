export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;

  try {
    // محرك توربو سريع وذكي جداً
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت لايت مان العبقري، أذكى مساعد أنمي في العالم. ردودك مصرية عامية، سريعة جداً، ومختصرة. لو طلب فيديو يوتيوب، ابحث عن الرابط الحقيقي واكتبه بعد VIDEO_URL: ولو صورة حطها بعد IMAGE_URL:`);
    const responseText = await aiResponse.text();

    let reply = responseText.replace(/[#*`_]/g, '');

    // توليد الصور في خلفية الرد عشان ميكونش بطيء
    if (message.match(/(ارسم|صورة|صوره)/)) {
      const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(message + " anime 4k detailed")}`;
      reply = `IMAGE_URL:${imgUrl} \n ${reply}`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: "ثانية واحدة.. عقلي بيجمع المعلومة!" });
  }
}
