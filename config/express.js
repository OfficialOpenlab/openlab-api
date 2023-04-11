const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  //Setando variáveis da aplicação 
  app.set('port', process.env.PORT || config.get('server.port'));

  //MIDDLEWARES
  app.use(cors({
    origin: ['http://localhost:3000','']
  }))
  app.use(bodyParser.json());

  consign({ cwd: 'api' })
    .then('database')
    .then('controllers')
    .then('routes')
    .into(app)

  return app;
}