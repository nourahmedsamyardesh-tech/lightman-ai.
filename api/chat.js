export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    let reply = "";

    // نظام ردود ذكي بسيط للأشياء اللي طلبتها
    if (message.includes("قصة") || message.includes("احكي")) {
      reply = "كان يا ما كان، في عالم الأنمي الأسطوري، بطل يسعى لتحقيق حلمه بأن يكون الأقوى.. هل تريد قصة عن ناروتو أم لوفي؟";
    } else if (message.includes("ناروتو")) {
      reply = "ناروتو أوزوماكي هو النينجا الذي غير عالم الشينوبي بإصراره! هل تريد معرفة مهاراته؟";
    } else if (message.includes("أهلاً") || message.includes("سلام")) {
      reply = "أهلاً بك يا بطل! أنا لايت مان، جاهز أحكي لك قصص أو أجاوب على أسئلتك.";
    } else {
      reply = "وصلت رسالتك! أنا لايت مان وأتعلم الآن كيف أكون أذكى لأجيبك بشكل أفضل.";
    }

    return res.status(200).json({ reply: reply });
  }
}
