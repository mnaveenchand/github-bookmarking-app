const express = require('express');
const cors = require('cors');
const axios = require('axios')
const fs = require('fs');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Listening on port ${port}`));