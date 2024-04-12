const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com", //Caso o SMTP seja do GMAIL
    port: 587,
    secure: false,
    auth: {
        user: "seuemail@gmail.com",
        pass: "suasenha",
    },
});

transport
    .sendMail({
        from: "nome <seuemail@gmail.com>",
        to: "<emaildestino@exemplo.com>",
        subject: "Enviando email com nodemailer",
        html: "oieeeeee meu <strong>amigo</strong>",
        text: "oieeeeee meu amigo",
    })
    .then((response) => console.log("EMAIL ENVIADO COM SUCESSO"))
    .catch((err) => console.log("ERRO AO ENVIAR O EMAIL: ", err));
