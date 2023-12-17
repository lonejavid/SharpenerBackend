const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};





exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};


exports.postCart=(req,res)=>{ 
  const prodId=req.body.productId;
  Product.findByPk(prodId,(product)=>{
    Cart.addProduct(prodId,product.price)

  })
  res.redirect('/cart')
}



exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getPro=(req,res)=>{
  const prodId=req.params.productId;

Product.findByPk(prodId,product=>{
 res.render('shop/prodect-details',{
  product:product,
  pageTitle:product.title,
  path: '/products'})
})
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
