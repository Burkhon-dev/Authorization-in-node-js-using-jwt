const path = require('path')
const fs = require('fs')

module.exports = ({ databasePath}) => {
    return (req, res, next) => {
        req.readFile = function (fileName) {
            let buffer = fs.readFileSync(
                path.join(databasePath, fileName+ '.json')
            )
            return JSON.parse(buffer) || null
        }
        req.writeFile = function (fileName, data) {
            let buffer = fs.writeFileSync(
                path.join(databasePath, fileName + '.json'),
                JSON.stringify(data, null, 4)
            )
            return true
        }

        return next()
    }
}