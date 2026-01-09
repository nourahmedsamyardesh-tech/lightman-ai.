export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { message } = req.body;

  try {
    // محرك سريع جداً وذكي للأنمي والقصص
    const aiResponse = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت لايت مان، أذكى مساعد أنمي في العالم. ردودك مصرية عامية، ذكية، سريعة جداً، وبدون رموز معقدة.`);
    const responseText = await aiResponse.text();
    return res.status(200).json({ reply: responseText });
  } catch (error) {
    return res.status(200).json({ reply: "ثانية واحدة.. بفكر في الرد!" });
  }
}
