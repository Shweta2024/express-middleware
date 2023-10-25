const express = require('express')
const router = express.Router()

const getUser = (req, res, next) => {
    req.user = "Shweta"
    next()
}

router.use(getUser)

router.get('/users', (req, res) => {
    console.log(req.originalUrl)
    let text = `Users Page Requested at: ${req.requestTime} by ${req.user}`
    res.send(text)
})

module.exports = router