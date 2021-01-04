require('dotenv-defaults').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const routes = express.Router().get(process.env.ROUTE, async (req, res) => {
  try {
    let data;
    if (process.env.REMOTE_DATA_PATH) {
      const response = await require('axios').get(process.env.REMOTE_DATA_PATH);
      data = response.data;
    } else {
      data = require(process.env.LOCAL_DATA_PATH);
    }

    setTimeout(() => res.json(data), process.env.DELAY * 1000);
  } catch(error) {
    console.log('Failed to return data');
    res.status(500).send({ error });
  }
});

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cors())
  .use('/', routes)
  .listen(process.env.PORT,
    () => console.log('Application running on port ' + process.env.PORT));
