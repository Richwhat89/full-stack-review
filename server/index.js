require('dotenv').config();
const express = require('express');
const {json} = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const bcrypt = require('bcryptjs')

const app = express();

console.log(process.env);

app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`)
})