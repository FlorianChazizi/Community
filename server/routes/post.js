// In routes/post.js
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authentication');
const { createPost, getPostsByCommunity } = require('../controllers/post/postController');

// require auth for all post routes
router.use(requireAuth);

router.post('/create', createPost);
router.get('/community/:communityName', getPostsByCommunity);


module.exports = router;