const nodemailer = require('nodemailer');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_SMTP_USERNAME,
                pass: process.env.GMAIL_SMTP_ACCESS_KEY
            }
        });
        let mailOptions = {
            from: `"Raven AC" <${email}>`,
            to: process.env.FORM_EMAIL_ADDRESS,
            replyTo: email,
            subject: 'New Website Inquiry',
            html: `
                <h1>New Inquiry from Raven Heating & Cooling</h1>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
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