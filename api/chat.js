export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      // استخدام نموذج أسرع ومباشر للذكاء الاصطناعي
      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(message)}?model=openai&system=أنت هو لايت مان، ذكاء اصطناعي مصري عبقري، خبير في كل أنواع الأنمي والقصص. ردودك ذكية جداً، سريعة، ومختصرة ومفيدة. وتحدث بلهجة مصرية عامية ممتعة.`);
      const text = await response.text();

      return res.status(200).json({ reply: text });
    } catch (error) {
      return res.status(500).json({ reply: "ثانية واحدة.. عقلي بيجمع المعلومات!" });
    }
  }
}
