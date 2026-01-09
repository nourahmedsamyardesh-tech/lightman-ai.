export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    return res.status(200).json({ 
      reply: `لقد استلمت رسالتك: "${message}". أنا أعمل الآن بنجاح!` 
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
