const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const homeRoute = require('./routes/home')
const usersRoute = require('./routes/users')

const myLogger = (req, res, next) => {
    console.log(`Logged`)
    next()
}

app.use(myLogger)

app.use(homeRoute)
app.use(usersRoute)


app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})