const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  p_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
  },
  p_group_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Community' // Reference to the Community model
  },
  p_title: {
    type: String,
    required: true,
  },
  p_content: {
    type: String,
    required: true,
  },
  p_created_at: {
    type: Date,
    default: Date.now,
  },
  p_updated_at: {
    type: Date,
    default: Date.now,
  },
  p_likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: 'User' // Reference to the User model (for liked users)
  },
});

module.exports = mongoose.model('Post', postSchema);