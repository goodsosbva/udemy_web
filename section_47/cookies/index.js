const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

// thisismysecret 이 문자열이 쿠키 파서가 쿠키에 사인할 때 쓰일 것
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    console.log(req.cookies)
    const {name = 'Noname'} = req.cookies;
    res.send(`hello! ${name} welcome to to my site`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'herry kane')
    res.send('ok send you a cookie!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true})
    res.send('oh signed your fruit cookie!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("port on 3000!!")
})