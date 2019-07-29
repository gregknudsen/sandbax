const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const yelpToken = require('./src/variables')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
const headers = {
  'Authorization': `Bearer ${yelpToken.yelpToken}`
}

const url = 'https://api.yelp.com/v3/businesses';
const searchUrl = 'https://api.yelp.com/v3/businesses/search';

app.get('/api/yelp/:id', (req, res) => {
  fetch(`${url}/${req.params.id}`, {
    headers
  })
  .then(res => res.json())
  .then(json => res.send(json))
  .catch(err => {
    res.status(422);
    res.send({
      error: "Error"
    });
  });
  // console.log('Request:', req.headers);
  // console.log('REPOSNSE', res)
  // res.send(message);
});

app.get('/api/yelp/:id/reviews', (req, res) => {
  console.log('Params ID: ', req.params.id);
  fetch(`${url}/${req.params.id}/reviews`, {
     headers
   })
   .then(res => res.json())
     .then(json => res.send(json))
     .catch(err => {
       res.status(422);
       res.send({
         error: "Error"
       });
     });
  //  console.log('Request:', req.headers);
   // console.log('REPOSNSE', res)
   // res.send(message);
});

app.get('/api/yelp/search', (req, res) => {
  console.log('HELLO??? ')
  let location = req.query.location;
  console.log('LOCATION: ', location)
  fetch(`${searchUrl}?${location}`, {
     headers
   })
   .then(res => res.json())
     .then(json => res.send(json))
     .catch(err => {
       res.status(422);
       res.send({
         error: "Error"
       });
     });
   console.log('Request:', req.headers);
  //  console.log('REPOSNSE', res)
  //  res.send(message);
});


app.listen(port, () => console.log(`Listening on port ${port}`))
