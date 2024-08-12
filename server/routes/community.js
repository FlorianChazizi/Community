
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authentication')
const { createCommunity, getAllCommunities, getCommunityByName, joinCommunity } = require('../controllers/community/communityController')

// require auth for all community routes
router.use(requireAuth);

router.post('/create', createCommunity);
router.get('/', getAllCommunities)
router.get('/:communityName', getCommunityByName )
router.post('/join/:communityName', joinCommunity)



module.exports = router;