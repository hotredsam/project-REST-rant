const router = require('express').Router()

router.get('', (req, res) => {
    res.send('GET /places and here is some more text')
})

module.exports = router
