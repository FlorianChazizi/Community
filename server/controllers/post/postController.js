const Community = require('../../models/communityModel');
const Post = require('../../models/postModel');


const createPost = async (req, res) => {
    const { p_title, p_content, communityName } = req.body;
    const userId = req.user._id;
  
    try {
      // Convert the communityName back to its original format
      const communityNameFormatted = communityName.replace(/-/g, ' ');
  
  
      // Find the community by its name
      const community = await Community.findOne({ c_name: new RegExp('^' + communityNameFormatted + '$', 'i') });
  
  
      if (!community) {
        console.log('404 |-> community not found');
        return res.status(404).json({ error: 'Community not found' });
      }
  
      console.log('Found community:', community.c_name);
  
      // Check if the user is a member of the community
      if (!community.c_members.some(memberId => memberId.equals(userId))) {
        console.log('User is not a member of the community');
        return res.status(403).json({ error: 'You must be a member of this community to post' });
      }
  
      // Create a new post
      const post = new Post({
        p_user_id: userId,
        p_group_id: community._id,
        p_title,
        p_content,
      });
  
      await post.save();
      console.log('Post created:', post);
  
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating post:', error.message);
      res.status(400).json({ error: error.message });
    }
  };
  
  const getPostsByCommunity = async (req, res) => {
    const { communityName } = req.params;
  
    try {
      // Convert the community name from slug format back to its original format
      const communityNameFormatted = communityName.replace(/-/g, ' ');
  
      // Find the community by its name
      const community = await Community.findOne({
        c_name: new RegExp('^' + communityNameFormatted + '$', 'i')
      });
  
      if (!community) {
        console.log('404 -> community not found');
        return res.status(404).json({ error: 'Community not found' });
      }
  
      // Find posts by the community's ID and populate the user information
      const posts = await Post.find({ p_group_id: community._id })
        .populate('p_user_id', 'username'); // Populate only the username of the post creator
  
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  module.exports = { createPost, getPostsByCommunity };