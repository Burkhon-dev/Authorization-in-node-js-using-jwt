const JWT = require('jsonwebtoken')
const SECRET_KEY = 'olma'

module.exports = {
    sign: (payload) => JWT.sign(payload, SECRET_KEY),
    verify: () => JWT.verify(token, SECRET_KEY)
}