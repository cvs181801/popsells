const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const http = require("http");
const server = http.createServer(app);
var nodemailer = require('nodemailer');
const e = require('express');


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


const regex1 = /[1-9]/g;

function containsDuplicates(arr) {
    const filteredArr = arr.filter(item => item !== ".")
    return (new Set(filteredArr).size !== filteredArr.length);
}

let column1 =[];
let column2 =[];
let column3 =[];
let column4 =[];
let column5 =[];
let column6 =[];
let column7 =[];
let column8 =[];
let column9 =[];
let columnsArr =[];

for (let i=0; i < board.length; i++) { 

    column1.push(board[i][(board[i].length)-(board[i].length)])
    column2.push(board[i][(board[i].length)-(board[i].length-1)])
    column3.push(board[i][(board[i].length)-(board[i].length-2)])
    column4.push(board[i][(board[i].length)-(board[i].length-3)])
    column5.push(board[i][(board[i].length)-(board[i].length-4)])
    column6.push(board[i][(board[i].length)-(board[i].length-5)])
    column7.push(board[i][(board[i].length)-(board[i].length-6)])
    column8.push(board[i][(board[i].length)-(board[i].length-7)])
    column9.push(board[i][(board[i].length)-(board[i].length-8)])
    columnsArr = [column1, column2, column3, column4, column5, column6, column7, column8, column9]

    //1 check each row. if array only holds integers 1-9without numeric repetition return true
    if(board[i].join('').match(regex1) && !containsDuplicates(board[i])) {
        console.log(i, 'horizontal row validated, true!') 
    } 
    else {
        console.log(i, 'horizontal row is not valid, false')
    }    
}
//2 check each column. create an array using board[i][j].if it only holds integers 1-9without numeric repetition return true
for (let j=0; j < columnsArr.length; j++) {
    if(columnsArr[j].join('').match(regex1) && !containsDuplicates(columnsArr[j])) {
        console.log(j, 'column validated! true') 
    }
    else {
        console.log('column invalid, false')
    }
}

//3 check each 9x9 square. create array by taking chunks of three , of three consecutive arrays at a time.  if it only holds integers 1-9without numeric repetition return true
let cube1 = [];
let cube2 = [];
let cube3 = [];
let cube4 = [];
let cube5 = [];
let cube6 = [];
let cube7 = [];
let cube8 = [];
let cube9 = [];
const boardFirst3Rows = board.slice(0,3);
const boardMid3Rows = board.slice(3, 6);
const boardLast3Rows = board.slice(6, 9);

for (let i=0; i<boardFirst3Rows.length; i++) {
    cube1.push(boardFirst3Rows[i].slice(0, 3))
    cube2.push(boardFirst3Rows[i].slice(3,6))
    cube3.push(boardFirst3Rows[i].slice(6,9))
}

for (let i=0; i<boardMid3Rows.length; i++) {
    cube4.push(boardMid3Rows[i].slice(0, 3))
    cube5.push(boardMid3Rows[i].slice(3,6))
    cube6.push(boardMid3Rows[i].slice(6,9))
}

for (let i=0; i<boardLast3Rows.length; i++) {
    cube7.push(boardLast3Rows[i].slice(0, 3))
    cube8.push(boardLast3Rows[i].slice(3,6))
    cube9.push(boardLast3Rows[i].slice(6,9))
}

    cube1 = [].concat(cube1[0],cube1[1],cube1[2])
    cube2 = [].concat(cube2[0],cube2[1],cube2[2])
    cube3 = [].concat(cube3[0],cube3[1],cube3[2])
    cube4 = [].concat(cube4[0],cube4[1],cube4[2])
    cube5 = [].concat(cube5[0],cube5[1],cube5[2])
    cube6 = [].concat(cube6[0],cube6[1],cube6[2])
    cube7 = [].concat(cube7[0],cube7[1],cube7[2])
    cube8 = [].concat(cube8[0],cube8[1],cube8[2])
    cube9 = [].concat(cube9[0],cube9[1],cube9[2])
    const newCubeArr = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9]

for (let i=0; i<newCubeArr.length; i++) {
    if(newCubeArr[i].join('').match(regex1) && !containsDuplicates(newCubeArr[i])) {
        console.log (i, "cube validated! true!")
    } else {
        console.log (i, "cube invalid. false.")
    }
}
//merge arrays within each cube array then run the check
//// More readable form of concat()
//let combinedNums = [].concat(nums1, nums2, nums3);


// You are trying to choose a new hobby, and part of your decision is based on how much each hobby 
//would cost to get started. So, you've brainstormed a list of the things you would need to buy for each one, 
//and the cost of each item. But, they're all mixed together, and what you really need is the total cost added 
//up for each hobby. Write a function that accepts a nested array containing hobby name, item name, and item cost, 
//and returns an object containing the total cost for each hobby. Here's some sample input and output.

// Sample input:
const hobbyArray= [
    ["knitting", "needles", 10],
    ["lock picking", "picks", 25],
    ["knitting", "yarn", 30],
    ["DJing", "two turntables", 500],
    ["knitting", "sock pattern", 3],
    ["DJing", "a microphone", 35]
  ]
  
  const hobbyArray2 = [
      ["coding", "computer", 2056],
      ["silicone pouring", "silicone", 450],
      ["coding", "classes", 250],
      ["cooking", "ingredients", 50],
      ["cooking", "knives", 75],
      ["silicone pouring", "PPE", 27]
  ]
  
  // Sample output:
  // {
  //   "knitting": 43,
  //   "lock picking": 25,
  //   "DJing": 535,
  // }
  
  
  
  
  let newArr = [];
  let acc = 0;
  let obj = {};
  let newObj = {};
  
  function hobbyDecider(array) {
      const reducedArr = hobbyReducer(array);
      for(i=0; i <reducedArr.length; i++) {
          //console.log(acc)
          if(acc>0){
              obj[reducedArr[i]] = acc; 
          }
          acc = 0;
          for(j=0; j<array.length; j++){
              //console.log(array[j], array[j].indexOf(reducedArr[i]));
               if(array[j].indexOf(reducedArr[i]) >= 0) {          
                      acc += array[j][2]
                }
          }
          obj[reducedArr[i]] = acc; 
      } 
      //console.log(obj)
      return obj;
  }
  
  
  function hobbyReducer(array, index) {
     array.forEach(item=>newArr.push(item[0])) 
     return [...new Set(newArr)]
  }
  
  
  console.log(hobbyDecider(hobbyArray2))
  
      