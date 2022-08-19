const router = require('express').Router()
const controller = require('../controllers/auth.js')

router.post('/register', controller.REGISTER)
router.post('/login', controller.LOGIN)

module.exports = router