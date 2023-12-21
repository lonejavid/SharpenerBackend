const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  }

  ).catch(err=>console.log(err));
}
    






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

Product.findByPk(prodId).then(([product])=>{
  console.log(product)
    res.render('shop/prodect-details',{
     product:product[0],
     pageTitle:product.title,
     path: '/products'})
   

}).catch(err=>console.log(err))
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
