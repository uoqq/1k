
const Product = ProductManagement()

function ProductManagement() {
  //add products variable here
  const products = [{id: 1, name: 'Laptop', category: 'Electronics', price: 999.99},
                   {id: 2, name: 'Computer', category: 'Electronics', price: 1342.50}]
  
  function getAllProducts() {
    return products
  }

  function addProduct(product) {
    return products.push(product)
  }

  function searchByName(name) {
    return products.filter((kuy) => kuy.name.toLowerCase().includes(name.toLowerCase()))//lab
  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter((pr) => minPrice <= pr.price <= maxPrice)
  }

  function removeAll() {
    return products.splice(0,products.length)
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()

console.log(Product.getAllProducts())
console.log(Product.addProduct())
