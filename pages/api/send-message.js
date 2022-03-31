const nodemailer = require('nodemailer');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ravenacwebmaster@gmail.com',
                pass: 'nyteyilntdxmbdyb'
            }
        });
        let mailOptions = {
            from: `"Raven AC" <comfort@ravenac.com>`,
            to: 'ravenacwebmaster@gmail.com',
            replyTo: email,
            subject: 'New Website Inquiry',
            html: `
                <h1>New Inquiry from Raven Heating & Cooling</h1>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr />
                <p><em>Hit 'Reply' to reply to this sender directly.</em></p>
            `
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ success: false, message: error });
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
                res.status(200).json({ success: true });
            });
    }
}