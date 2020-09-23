const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    // user or users?
    ref: 'user',
  },
  word: {
    type: Map,
    of: String,
  },
});

module.exports = Word = mongoose.model('word', WordSchema);
