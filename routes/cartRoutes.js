// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const {
  addToCart,
  updateCartItem,
  removeCartItem
} = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addToCart);
router.put('/:productId', auth, updateCartItem);
router.delete('/:productId', auth, removeCartItem);

module.exports = router;
