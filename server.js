const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const http = require("http");
const server = http.createServer(app);
var nodemailer = require('nodemailer');


app.use(express.json())
app.use('/', express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  })

server.listen(process.env.PORT || 3000);

app.get('/api/email', (req, res)=> {
    //res.send([send_email(rec.EMAIL, {first_name: rec.FIRST_NAME, last_name: rec.LAST_NAME, phone_number: rec.PHONE_NUMBER, mailing_address: `${rec.STREET} ${rec.CITY}, ${rec.STATE} ${rec.POSTAL_CODE} ${rec.COUNTRY}`})])
    //res.send([rec.EMAIL, {first_name: rec.FIRST_NAME, last_name: rec.LAST_NAME, phone_number: rec.PHONE_NUMBER, mailing_address: `${rec.STREET} ${rec.CITY}, ${rec.STATE} ${rec.POSTAL_CODE} ${rec.COUNTRY}`}])
    //console.log('hey')

        

    send_email(`${rec.EMAIL}`, 
                `<p>Hello ${rec.FIRST_NAME} ${rec.LAST_NAME},
                    Thanks for signing up for our mailing list!  
                    We're excited you've joined us in the journey towards great things.
                    We've got your contact info on file, and we'll be in touch with you at:
                    ${rec.PHONE_NUMBER}
                    ${rec.EMAIL}
                    ${rec.STREET} ${rec.CITY}, ${rec.STATE} ${rec.POSTAL_CODE} ${rec.COUNTRY}
                    Stay tuned for exciting offers coming your way via text, email, and postal mail.
                    If you'd like to get in touch with us, just visit www.ourwebsite.com or contact us at 1-800-123-0000.
                    To unsubscribe, visit www.ourwebsite.com/unsubscribe.
                    Have a great day!</p>`
            )

})  


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  });




///Question 1

// We are building html for an email to send to a customer. The method send_email() has the following function declaration:

// send_email(email_to_address, email_body)

//probs looks like : send_email(): send_email(email_to_address, email_body);


// The email_body needs to contain the following customer information: first name, last name, phone number, and mailing address. Use the following object to get the customer information:

let rec = {
    FIRST_NAME: 'John',
    LAST_NAME: 'Smith',
    EMAIL: 'john@example.com',
    PHONE_NUMBER: '888-777-6666',
    STREET: '1234 Ohio St.',
    CITY: 'Evansville',
    STATE: 'IN',
    POSTAL_CODE: '47701',
    COUNTRY: 'US'
};




// Using server-side Javascript, write code that would build the email HTML and use the aforementioned function to send an email to the customer.

// Assume the email text is static. In other words, there are no external (i.e., user facing) inputs.

// NOTE: The email text should be made-up and can be as short or long as you like. Use your best judgment in this situation.

//<script src=
// "https://smtpjs.com/v3/smtp.js">
// </script>

// <script type="text/javascript">
//   function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "sender@email_address.com",
//       Password: "Enter your password",
//       To: 'receiver@email_address.com',
//       From: "sender@email_address.com",
//       Subject: "Sending Email using javascript",
//       Body: "Well that was easy!!",
//     })
//       .then(function (message) {
//         alert("mail sent successfully")
//       });
//   }
// </script>

//2.

let recs = [
    {
        ID: 1,
        NAME: 'John',
        EMAIL: 'john@example.com',
        SSN: '123'
    }, {
        ID: 2,
        NAME: 'Sally',
        EMAIL: 'sally@example.com',
        SSN: '456'
    }, {
        ID: 3,
        NAME: 'Angie',
        EMAIL: 'angie@example.com',
        SSN: '789'
    }
];

// for (i=0; i++; i<recs.length) {
//     return {}
// }

recs.forEach((object, index)=> {
    //return {ID: object.ID, NAME: object.NAME, EMAIL: object.EMAIL}
    console.log({ID: object.ID, NAME: object.NAME, EMAIL: object.EMAIL})
})