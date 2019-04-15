import express from 'express';
import request from 'request';

export let app = express();

app.get('/', async (req, res) => {
    res.send("running");
});

app.get('/ledger/download', async (req, res) => {
  request.get({
    url: 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https://yadi.sk/d/fcZgyES73Jzj5T&sort=-created&limit=1',
    json: true
  }, function (err, response, data) {
    if (err || response.statusCode !== 200) {
      res.status(404).end();
    } else {
      res.redirect(data._embedded.items[0].file);
    }
  });
});
