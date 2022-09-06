import express from "express";
var router = express.Router();

router.get('/', function(req, res) {
  res.send('get');
});

router.post('/', function(req, res) {
  res.send('create');
});

router.delete('/', function(req, res) {
  res.send('delete');
});

export default router;