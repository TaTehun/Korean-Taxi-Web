const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const cors = require("cors");
const sendGridTransport = require('nodemailer-sendgrid-transport');
const keys = require('../config/keys')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors());

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
    api_key:keys.sendGridKey
    }
    }))

app.post('/contact', (req, res) => {
    const { name, email, message, phone, date, time, departure, arrival, account,
    service, car } = req.body
    transporter.sendMail({
    to:'johntestdoe68@gmail.com',
    from:'johntestdoe68@gmail.com',
    subject:'테스트입니다',
    html: `<p>이름: ${name}</p>
           <p>이메일: ${email}</p>
           <p>전화번호: ${phone}</p>
           <p>날짜: ${date}</p>
           <p>시간: ${time}</p>
           <p>출발지: ${departure}</p>
           <p>도착지: ${arrival}</p>
           <p>인원수: ${account}</p>
           <p>서비스: ${service}</p>
           <p>차종류: ${car}</p>
           <p>요청사항: ${message}</p>`,
    }).then(resp => {res.json({resp})})
    .catch(err => {console.log(err)})
})

app.listen(PORT,()=>{
    console.log("server is running on", PORT)})
