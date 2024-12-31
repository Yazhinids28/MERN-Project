const nodemailer = require('nodemailer');

// Create a transporter with Gmail and App Password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dsyazhini2810@gmail.com', // Your Gmail address
        pass: 'ntxi awqm rzze cbpn', // The generated App Password from Gmail
    },
});

// Function to send a test email
const sendTestEmail = async () => {
    try {
        let info = await transporter.sendMail({
            from: '"Aswathi" <aswathignanaguru3104@gmail.com>', // Sender address
            to: '21uit053@kamarajengg.edu.in', // Recipient's email
            subject: 'Test Email from Gmail', // Subject line
            text: 'This is a test email sent from Gmail using Nodemailer.', // Plain text body
            html: '<b>This is a test email sent from Gmail using Nodemailer.</b>' // HTML body
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Call the function to send the test email
sendTestEmail();

