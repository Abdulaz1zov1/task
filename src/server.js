const express = require('express')
const app = express()
const cors = require('cors')

const connectDB = require('../src/database/db')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use(express.json({ limit: "5mb" }));


app.use('/api', require('../src/routes/userRoutes'))





app.listen(process.env.PORT || 3000, console.log('server is running on 3000 port'))