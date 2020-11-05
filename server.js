const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
const Recipes = require('./recipe-model.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
  // get all species from the database
  Recipes.find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
});

server.get('/api/recipes/:id', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
    .then(recipes => {
      if (recipes) {
        res.json(recipes);
      } else {
        res.status(404).json({err: err.message, message: 'Could not find scheme with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
});

server.get('/api/recipes/:id/steps', (req, res) => {
  const { id } = req.params;

  Recipes.findSteps(id)
    .then(recipes => {
      if (recipes) {
        res.json(recipes);
      } else {
        res.status(404).json({err: err.message, message: 'Could not find scheme with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
});

server.get('/api/recipes/:id/ingredients', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(ingredients => {
      res.status(200).json(ingredients);
  })
  .catch(error => {
      res.status(500).json({err: error.message})
  })
});

module.exports = server;
