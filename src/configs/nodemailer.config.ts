import nodemailer from 'nodemailer';

// Configuração de transporte
const transporter = nodemailer.createTransport({

    host: "email-ssl.com.br",
    requireTLS: true,
    port: 587,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass:  process.env.SMTP_PASS,
    },
});

export default transporter;