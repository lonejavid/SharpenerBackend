
const Product=require('../models/product') 

exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      // : 'add Product',pageTitle
       path: '/admin/add-product',
     
    });
  }


  exports.postAddProduct=(req, res, next) => {
    //products.push({ title: req.body.title });
    const pro= new Product(req.body.title);
    

    pro.save();
    
    res.redirect('/');
  }
  //exports.products = products

 exports.getProducts= (req, res, next) => {
    Product.fetchAll(products=>{
        
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
    });

  }