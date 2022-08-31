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

//probs looks like : send_email: function(email_to_address, email_body) {//code to mail the email to recipient};


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

// recs.forEach((object, index)=> {
//     return {ID: object.ID, NAME: object.NAME, EMAIL: object.EMAIL}
// })//not this, it returns undefined. use map.

// console.log(recs.map((object)=> {
//     return {ID: object.ID, NAME: object.NAME, EMAIL: object.EMAIL}
// }))
///



//parse_margin(pdf = {})

//pdf is a settings object that defines the styles for a PDF to be generated. All keys are optional. The full object reads as follows:

// let pdf = {
//     printBackground: true,
//     margin: {
//         top: "30px",
//         right: "0px",
//         bottom: "30px",
//         left: "0px"
//     }
// };

// let pdf2 = {
//     printBackground: false
// };

//The purpose of parse_margin is to return the margins from the input object.

//Using server-side Javascript, write the parse_margin function. All margins default to "0px" if not defined.

// function parse_margin(pdfObj) {
//     if (pdfObj == undefined) {
//         return ["0px", "0px", "0px", "0px"]
//     } else {
//     return [pdfObj.margin.top, pdfObj.margin.right, pdfObj.margin.bottom, pdfObj.margin.left]
//     }
// } 

// function parse_margin({ printBackground = false, margin = {top: "0px",right: "0px",bottom: "0px",left: "0px"}} = {pdfObj}) {
//     return [pdfObj.margin.top, pdfObj.margin.right, pdfObj.margin.bottom, pdfObj.margin.left]
// }

// console.log(parse_margin(pdf2))


// function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
//     console.log(size, coords, radius);
//     // do some chart drawing
//   }
  
//   drawChart({
//     coords: { x: 18, y: 30 },
//     radius: 30,
//   });

//const { b = 2 } = { b: undefined }; // b is 2

///

// You need to write a program that prints the numbers from 1 to 100 such that:

// If the number is a multiple of 3, you need to print "Fizz" instead of that number.
// If the number is a multiple of 5, you need to print "Buzz" instead of that number.
// If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.
// Try to think of a solution to solve this challenge with the help of loops and conditional statements before moving to the solution.

// for (let i=0;  i <= 101; i++) {
//     if (i % 15 == 0 ) { 
//         console.log(i, 'fizzbuzz')
//     }
//     else if (i%3 == 0){console.log(i, "fizz")}
//     else if (i%5==0) {console.log(i, "buzz")}
//     else console.log(i)
// }

//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

const nums1 = [5,6,7];
const nums2 = [8,9,10];

const mergedArr = nums1.concat(nums2);
const sortedArr = mergedArr.sort(function(a, b){return a - b});
//console.log(sortedArr[sortedArr.length / 2] )

//Validate the Sudoku Board
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

//1 check each row. if array only holds integers 1-9without numeric repetition return true
//2 check each column. create an array using board[i][j].if it only holds integers 1-9without numeric repetition return true
//3 check each 9x9 square. create array by taking chunks of three , of three consecutive arrays at a time.  if it only holds integers 1-9without numeric repetition return true

//The Set object lets you store unique values of any type, whether primitive values or object references.
//The size accessor property returns the number of (unique) elements in a Set object.


function containsDuplicates(arr) {
    const filteredArr = arr.filter(item => item !== ".")
    return !(new Set(filteredArr).size !== filteredArr.length);
}

//console.log(containsDuplicates(board[0]))


for (let i=0; i < board.length; i++) { //name need a to use a regex below 
    if(board[i].includes("1","2","3","4","5","6","7","8","9")  ) {
        console.log(i, 'no duplicates')
        
        
    }
}


