const express = require('express')
//const { allowedNodeEnvironmentFlags } = require('process')
const app = express()

//set view engine to ejs:
app.set('view engine', 'ejs')

//adding endpoints:
//root
app.get('/', (req, res) => {
    res.render('pages/index')
    // const templateVars = {
    //     name: 'Balwant',
    //     age: 42,
    //     birthDate: '22nd June'
    // }
    // res.render('user-profile', templateVars)
    //    res.send('Hello')
})

//about
app.get('/about', (req, res) => {
    res.render('pages/about')
})

//Career
app.get('/career', (req, res) => {
    res.render('pages/career')
})

//Services
app.get('/service', (req, res) => {
    res.render('pages/service')
})



const port = 3000

app.listen(port, (req, res) => {
    console.log(`App listening on port: ${port}`)
})