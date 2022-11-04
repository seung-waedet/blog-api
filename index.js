const express = require('express')
const app = express()
const db = require('./db')
const passport = require('passport')
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blog.route')
const os = require('os')
const PORT = 8000

//CONNECT TO MONGOOSE
// db.connectToDb()

//Signup and login authentication middleware
require('./authentication/auth')

//To parse url encoded data
app.use(express.urlencoded( {extended: false} ))

//To parse data passed via body
app.use(express.json())

//BLOG ROUTE
// app.use('/api/blog', blogRoute)

//USER ROUTE
app.use('/api', userRoute)

app.get('/', (req, res) => {
    res.status(200).json({status: true, message: `Welcome to Annies Blog API`})
})

app.use('*', (req, res) => {
    res.status(404).json({status: false, message: `Route not found`})
})

//Error Middleware function
app.use(function(err, req, res, next) {

    res.status(err.status || 500);
    
    //send the first line of an error message 
    if (err instanceof Error) return res.json({error: err.message.split(os.EOL)[0]})

    res.json({ error: err.message });
})

// app.listen(PORT, () => {
//     console.log(`Server is running at PORT http://localhost:${PORT}`)
// })

module.exports = app