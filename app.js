const express = require('express')
const app = express()

//adding endpoints
app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/about', (req, res) => {
    res.send("<html><body>Hello <b>World</b></body></html>\n")
})


const port = 3000

app.listen(port, (req, res) => {
    console.log(`App listening on port: ${port}`)
})