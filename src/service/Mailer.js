const sendgrid = require('sendgrid');
const keys = require('../../config/keys');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(keys.sendGridKey);

function Mailer() {
        sgMail
        .send(message)
        .then(() => {
            Form.resetFields();
            console.log('email sent!');

        })
        .catch((error) => {
            console.error('Error: ', error);
        })
    }

export default Mailer;
