const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    console.log(req.originalUrl)
    res.send('Users Page')
})

module.exports = router