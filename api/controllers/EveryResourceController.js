module.exports = {
  destroy: function(req, res) {
    MatchRequest.destroy({}).exec(function() {
      res.end();
    });
  }
};