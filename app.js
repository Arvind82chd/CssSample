const express = require('express')
//const { allowedNodeEnvironmentFlags } = require('process')
const app = express()

//set view engine to ejs:
app.set('view engine', 'ejs')

//adding endpoints
app.get('/', (req, res) => {
    const templateVars = {
        name: 'Balwant',
        age: 42,
        birthDate: '22nd June'
    }
    res.render('user-profile', templateVars)
    //    res.send('Hello')
})

app.get('/about', (req, res) => {
    res.send("<html><body>Hello <b>World</b></body></html>\n")
})


const port = 3000

app.listen(port, (req, res) => {
    console.log(`App listening on port: ${port}`)
})