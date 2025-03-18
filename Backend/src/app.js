const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send("hello world")
})

app.use('/ai', aiRoutes)


module.exports = app;