export default async function handler(req, res) {
  const rates = {
    conventional30: 6.45,
    conventional15: 5.75,
    fha30: 6.10,
    va30: 6.05
  };

  res.status(200).json(rates);
}
