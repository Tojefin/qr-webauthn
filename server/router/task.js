import db from "../index.js";
import express from "express";
var router = express.Router();

router.get('/', function(req, res) {
  res.send(db);
});

router.post('/', function(req, res) {
  db.push(req.body.text)
  res.json({created: req.body.text})
});

router.delete('/:id', function(req, res) {
  let del = db.splice(req.params.id, 1)
  res.json({deleted: del, id: req.params.id})
});

export default router;