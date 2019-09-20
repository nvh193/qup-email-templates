# qup-email-templates

## Installation

Using npm:
```shell
$ npm i qup-email-templates
```
In Node.js:
```js
var { renderTemplate } = require('qup-email-templates');

const params = {
  serverName: "NewCCAPI 85",
  hostName: "QUp31",a
  time: "2019-09-20T04:11:40.212Z",
  address: "192.168.2.131",
  version: "4.6.3602",
  tracerId: "94fd6721-ffe1-4d46-8f86-ae39fd16ba62",
  elkLink: "https://elk........",
  error: error,
  subject: "SERVER beta-aws:master port:1337 WARNING_TRUST_DOMAIN",
  component: 'NewCC',
  data: "" // JSON string
};

renderTemplate(params).then(function(template) {
  console.log(template)
  const mailOptions = {
    subject: template.subject,
    html: template.html
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("BUG send mail has error ", JSON.stringify({ info: error }));
    }
  });
});

```