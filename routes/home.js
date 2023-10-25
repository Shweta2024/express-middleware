const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.originalUrl)
    res.send('Home Page')
})

module.exports = router