const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const homeRoute = require('./routes/home')
const usersRoute = require('./routes/users')

// const myLogger = (req, res, next) => {
//     console.log(`Logged`)
//     next()
// }

// app.use(myLogger)

const requestTime = (req, res, next) => {
    const date = new Date()
    req.requestTime = date.getDate() + "/"
        + (date.getMonth() + 1) + "/"
        + date.getFullYear() + " "
        + date.getHours() + ":"
        + date.getMinutes() + ":"
        + date.getSeconds()
    next()
}

app.use(requestTime)

app.use(homeRoute)
app.use(usersRoute)


app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})