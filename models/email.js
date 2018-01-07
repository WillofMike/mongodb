const mongoose = require('mongoose');
const model = 'email';

const schema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  body: String,
  labels: [String],
  isRead: {
    type: Boolean,
    default: false,
  },
  isStarred: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(model, schema);
