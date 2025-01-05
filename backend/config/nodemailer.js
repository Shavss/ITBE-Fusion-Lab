const nodemailer = require('nodemailer');

// Create a transporter using Outlook's SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',   // Outlook SMTP server
  port: 587,                    // SMTP port (587 for STARTTLS)
  secure: false,                // Use STARTTLS encryption
  auth: {
    user: 'email@outlook.com',  // Replace with your Outlook email
    pass: 'password',           // Replace with your Outlook password
  },
  tls: {
    ciphers: 'TLSv1.2',           // Use the correct TLS version
  },
});

// Function to send the contact form email
const sendContactEmail = async (name, email, message) => {
  const mailOptions = {
    from: email,  // Sender's email (from the form submission)
    to: 'kacper.ryske@outlook.com',  // Replace with your Outlook email
    subject: 'New Contact Us Message',
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendContactEmail;
