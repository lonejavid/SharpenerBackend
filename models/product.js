const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err,fileContent) => {
    if (fileContent=='') {
        cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if(this.id){
        const existingProductIndex=products.findIndex(prod=>prod.id===this.id);
        const  updatedProducts=[...products];
        updatedProducts[existingProductIndex]=this;
        fs.writeFile(p,JSON.stringify(updatedProducts),err=>{
          console.log(err);
        })
      
      }
      else{
        this.id=Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
         
        });

      }
    
    });
  }

  static deleteById(id) {
    getProductsFromFile((products) => {
      const updatedProducts = products.filter((product) => product.id !== id);
  
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Product with ID ${id} has been deleted.`);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static count=0

static findByPk(id, cb) {
  getProductsFromFile((products) => {
    const product = products.find((p) => p.id === id);
    if (!product) {
     return cb({ error: 'Product not ' });

    }
    cb(product);
  });
}
}
