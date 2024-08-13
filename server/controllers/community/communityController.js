const Community = require('../../models/communityModel');

// Create a community
const createCommunity = async ( req, res ) => {
    const { c_name, c_description } = req.body;

    try {
      const community = new Community({
        c_name,
        c_description,
        c_creator_id: req.user._id,
        c_admins: [req.user._id],
        c_members: [req.user._id]
      });
  
      await community.save();
      res.status(201).json(community);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

const getAllCommunities = async ( req, res ) => {
  try {
    const communities = await Community.find()
    .populate('c_creator_id', 'username');
    res.status(200).json(communities);
    console.log('Communities displayed!')
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getCommunityByName = async (req, res) => {
  const { communityName } = req.params;
  const { page = 1, limit = 10 } = req.query; // Default to page 1, 10 items per page

  try {
    const communityNameFormatted = communityName.replace(/-/g, ' '); // Convert back to original name format
    const community = await Community.findOne({ c_name: new RegExp('^' + communityNameFormatted + '$', 'i') })
      .populate('c_creator_id', 'username')
      .populate({
        path: 'c_admins',
        select: 'username',
      })
      .populate({
        path: 'c_members',
        select: 'username',
        options: {
          skip: (page - 1) * limit,
          limit: parseInt(limit),
        }
      });

    if (!community) {
      return res.status(404).json({ error: 'Community not found' });
    }

    res.status(200).json(community);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Join a community
const joinCommunity = async (req, res) => {
  const { communityName } = req.params;
  const userId = req.user._id; // Assuming req.user contains the authenticated user's info

  try {
    const communityNameFormatted = communityName.replace(/-/g, ' '); // Convert back to original name format
    const community = await Community.findOne({ c_name: new RegExp('^' + communityNameFormatted + '$', 'i') });

    if (!community) {
      return res.status(404).json({ error: 'Community not found' });
    }

    // Check if the user is already a member
    if (community.c_members.includes(userId)) {
      return res.status(400).json({ error: 'You are already a member of this community' });
    }

    // Add user to the community's members
    community.c_members.push(userId);
    await community.save();

      // Populate the members and admins with user details if needed
      const updatedCommunity = await Community.findById(community._id)
      .populate('c_members', 'username')
      .populate('c_admins', 'username')
      .exec();

    res.status(200).json({ message: 'Joined community successfully', community: updatedCommunity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
    createCommunity,
    getAllCommunities,
    getCommunityByName,
    joinCommunity
}