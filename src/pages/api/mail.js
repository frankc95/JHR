const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Company: ${body.company}\r\n
  Phone: ${body.phone}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "info@jhrecovery.co.uk",
    from: `${body.email}`,
    subject: "John Hartson Recovery Workshop",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail
    .send(data)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });

  res.status(200).json({ status: "Ok" });
};
