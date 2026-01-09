export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    // هذا رد تلقائي مؤقت للتأكد من أن النظام يعمل
    return res.status(200).json({ reply: `أهلاً بك! لقد استلمت رسالتك: "${message}". أنا Light Man وجاهز لمساعدتك.` });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
