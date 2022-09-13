import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'John'},
        { id: 2, name: 'Avril'},
        { id: 3, name: 'Paul'},
        { id: 4, name: 'Paul2'},
        { id: 5, name: 'Paul3'},
    ])
})

app.listen(3333)