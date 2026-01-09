export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    let reply = "";

    // نظام ردود ذكي بسيط
    if (message.includes("ناروتو")) {
      reply = "ناروتو هو شينوبي من قرية كونوها، وحلمه أن يصبح الهوكاجي! هل تريد معرفة المزيد عنه؟";
    } else if (message.includes("قصة")) {
      reply = "كان يا ما كان، هناك روبوت ذكي يدعى لايت مان يعيش في السحاب ويحب مساعدة الناس..";
    } else {
      reply = `أهلاً بك! لقد استلمت رسالتك: "${message}". أنا أتعلم الآن كيف أصنع قصصاً كاملة لك.`;
    }

    return res.status(200).json({ reply: reply });
  }
}
