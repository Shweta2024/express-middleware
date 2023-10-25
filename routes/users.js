const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    console.log(req.originalUrl)
    let text = 'Users Page' + ` Requested at : ${req.requestTime}`
    res.send(text)
})

module.exports = router