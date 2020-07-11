const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config({ path: './config.env' })
require('./Database/db')
const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// routes
app.use('/api/v1/transactions', require('./routes/transactions'))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App listen on port : ${PORT}`))