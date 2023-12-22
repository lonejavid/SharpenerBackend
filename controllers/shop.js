const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
 })
}).catch(err=>{console.log(err)
});
}
 
    






exports.getIndex = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/index', {
      prods: products,
      pageTitle:'shop',
      path:'/'
 })
}).catch(err=>{console.log(err)
});
}
  
 


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

Product.findByPk(prodId).then(product=>{
  
    res.render('shop/prodect-details',{
     product:product,
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
