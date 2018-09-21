'use strict';

require('dotenv').config();

const express = require('express')
const next = require('next')

process.on('uncaughtException', function(err) {
  console.log('Uncaught Exception: ' + err)
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

// Default when run with `npm start` is 'production' and default port is '80'
// `npm run dev` defaults mode to 'development' & port to '3000'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT = process.env.PORT || 8080

// Secret used to encrypt session data stored on the server
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'change-me'

const app = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
})

const handle = app.getRequestHandler()
let server

const { join } = require('path')

app.prepare()
.then(db => {
  server = express();

  server.get('/posts/:year/:slug', (req, res) => {
    const { slug } = req.params;
    const passedQuery = Object.assign({}, req.query, { slug });
    return app.render(req, res, '/posts', passedQuery);
  })

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  // Set vary header (good practice)
  // Note: This overrides any existing 'Vary' header but is okay in this app
  server.use(function (req, res, next) {
    res.setHeader('Vary', 'Accept-Encoding')
    next()
  })

  server.listen(process.env.PORT, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:' + process.env.PORT + ' [' + process.env.NODE_ENV + ']')
    
    const ngrok = require('ngrok')
    ngrok.connect({
      subdomain: 'dd-next-dev',
      port: process.env.PORT
    })
    .then(url => console.log("Ngrok listening on ", url))
  })
})
.catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})
