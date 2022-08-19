const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express()

// middlewares
const modelMiddleware = require('./middlewares/model.js')
app.use(modelMiddleware({ databasePath: path.join(__dirname, 'database')}))
app.use(express.json())

// routes
const userRouter = require('./routes/auth.js')
app.use(userRouter)

app.listen(PORT, () => console.log('Backend server is ready at *5000'));

