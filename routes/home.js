const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.originalUrl)
    let text = 'Home Page' + ` Requested at: ${req.requestTime}`
    res.send(text)
})

module.exports = router