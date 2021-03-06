const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isGuest: {
    type: Boolean,
    default: true
  },
  Date: {
    type: Date,
    default: Date.now
  },
  program: [{
    type: Schema.Types.ObjectId,
    ref: 'day'
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'orders'
  }]
});

module.exports = User = mongoose.model('users', UserSchema);