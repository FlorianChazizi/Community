const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  c_post_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post' // Reference to the Post model
  },
  c_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
  },
  c_content: {
    type: String,
    required: true,
  },
  c_created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
