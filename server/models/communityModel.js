const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  c_name: { type: String, required: true },
  c_description: {type: String },
  c_created_at: { type: Date, default: Date.now },
  c_creator_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },  // Reference to the User model  
  c_admins: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },     // Reference to the User model
  c_members: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },   // Reference to the User model
  // Optional fields you might consider:
  c_privacy: { // Public, Private, or Hidden
    type: String,
    enum: ['public', 'private', 'hidden'],
  },
  c_image: { // Group profile image URL
    type: String,
  },
});

module.exports = mongoose.model('Community', communitySchema);
