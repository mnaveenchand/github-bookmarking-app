const express = require('express');
const timeout = require('express-timeout-handler');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


let options = {
    timeout: 3000,
    onTimeout: function(req, res) {
      res.status(503).send('Service unavailable. Please retry.');
    },
    onDelayedResponse: function(req, method, args, requestTime) {
      console.log(`Attempted to call ${method} after timeout`);
    },
    disable: ['write', 'setHeaders', 'send', 'json', 'end']
  };
   
app.use(timeout.handler(options));


app.listen(port, () => console.log(`Server Listening on port ${port}`));

const listrepositoriesRoutes = require('./routes/repositories.route');
const bookmarksRoutes = require('./routes/bookmarks.route');

app.use('/listallrepos', listrepositoriesRoutes);
app.use('/bookmarks', bookmarksRoutes);

