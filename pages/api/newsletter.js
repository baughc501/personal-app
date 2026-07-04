export default async function handler(req, res) {
  const { email } = req.body;

  console.log("New subscriber:", email);

  res.status(200).json({ success: true });
}
