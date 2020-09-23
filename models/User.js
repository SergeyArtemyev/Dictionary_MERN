const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // РАЗОБРАТЬСЯ С АУТЕНТИФИКАЦИЕЙ И КАК ЗАПУШИТЬ СЛОВА В СЛОВАРЬ И ВСЮ АССОЦИАЦИЮ
  words: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'word',
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
