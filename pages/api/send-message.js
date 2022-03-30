export default function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;
        console.log(req.body);
        res.status(200).json({ success: true });
    }
}