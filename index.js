const express = require('express');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


app.listen(port, () => console.log(`Server Listening on port ${port}`));

const listrepositoriesRoutes = require('./routes/repositories.route');
const bookmarksRoutes = require('./routes/bookmarks.route');

app.use('/listallrepos', listrepositoriesRoutes);
app.use('/bookmarks', bookmarksRoutes);

