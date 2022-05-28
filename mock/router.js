const express = require('express');
let router = express.Router();
router.get('/get-data', function (req, res) {
  res.send({
    success: true
  });
});

module.exports = router;