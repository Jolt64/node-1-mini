const express = require('express');
const bodyParser = require('body-parser')
const bc = require('./controller/books_controller')

const app = express()

app.use(bodyParser.json())


app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)


const port = 4545
app.listen(port, () => console.log(`Hitting on ${port}`))