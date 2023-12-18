const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    edit: false
    
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("called")
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = parseInt(req.body.price);
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};



exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  
  
  if(!editMode){
    return  res.redirect('/')
  }
  const prodId=req.params.productId
  
  Product.findByPk(prodId,product=>{
    if(!product){
      return res.redirect('/');
    }
   //console.log(prodId)
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      edit: editMode,
      product: product
      
    });
    
  })
 
};

exports.postEditProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
  const updatedImageUrl=req.body.imageUrl;
  const updatedDesc=req.body.description;
  const updatedProduct= new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
    );
    console.log(updatedProduct)
    updatedProduct.save();
    res.redirect('/admin/products')


}
exports.postDelete=(req,res,next)=>{
  const productId = req.body.productId;
  Product.deleteById(productId)
  res.redirect('/');
  
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
