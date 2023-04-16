const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')

MongoClient.connect('mongodb+srv://edwinchoiwdev:arM6JzEFe2tlKtra@cluster0.1c5qm06.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true
})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('crud-tutorial')
        const quotesCollection = db.collection('quotes')

        app.use(bodyParser.urlencoded({ extended: true }))
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
                .then(results => {
                    res.render('index.ejs', { quotes: results })
                })
                .catch(error => console.error(error))
            // The first parameter is the name of the file being rendered. It must be placed inside a "views" folder.
            // The second parameter is the data passed into the file.
        })
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                { name: 'TRON' },
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true
                }
            )
                .then(result => {
                    res.json('Success')
                })
                .catch(error => console.error(error))
        })
        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                { name: req.body.name },
            )
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('No quote to delete')
                    }
                    res.json(`Deleted CLU's quote`)
                })
                .catch(error => console.error(error))
        })
        app.listen(4242, function () {
            console.log('listening on 4242')
        })
    })
    .catch(error => console.error(error))
