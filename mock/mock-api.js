const mock = {
  'GET /get-data': (req, res) => {
    res.send({
      success: true
    });
  },
}

module.exports = mock;