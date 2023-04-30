const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('dragon is running');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/news', (req, res) => {
  res.send(news);
});

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(sn => sn._id === id);
  res.send(selectedNews);
});

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  }
  else {
    const selectedNews = news.filter(sn => parseInt(sn.category_id) === id);
    res.send(selectedNews);
  }
})

app.listen(port, () => {
  console.log(`Dragon api running on port: ${port}`);
});
