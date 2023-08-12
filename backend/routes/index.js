const express = require('express');
const router = express.Router();

const authMiddleware = require('./middlewares/auth')

const authRouter = require('./auth');
const usersRouter = require('./users');
const productsRouter = require('./products');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ success : 'node shop api'});
});

/* GET home page. */
router.get('/user', authMiddleware , (req, res, next) => {
  res.json({ status : 'success' , user : { ...req.user ,   permissions : [
    // 'add_new_product',
    'manage_products',
    'manage_users',
    'edit_product',
    'delete_product'
  ]} });
});

router.use('/auth' , authRouter);
router.use('/users' , usersRouter);
router.use('/products' , authMiddleware , productsRouter);

module.exports = router;
