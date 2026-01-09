export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    let reply = "";

    // منطق الردود بناءً على كلماتك
    if (message.includes("قصة") || message.includes("احكي")) {
      reply = "بالتأكيد! في قديم الزمان بقرية نينجا مخفية، ولد طفل يحمل قوة هائلة.. هل تريد قصة عن ناروتو؟";
    } else if (message.includes("ناروتو")) {
      reply = "ناروتو بطل عظيم! حلمه أن يصبح الهوكاجي ليحمي الجميع. هل تود معرفة أصدقائه؟";
    } else if (message.includes("سلام") || message.includes("أهلاً")) {
      reply = "وعليكم السلام! أنا لايت مان، صديقك الذكي. كيف أساعدك اليوم؟";
    } else {
      reply = "فهمت قصدك! أنا لايت مان، وسأقوم بتطوير ردودي قريباً لأفهمك بشكل أعمق.";
    }

    return res.status(200).json({ reply: reply });
  }
}
