module.exports = {
    databaseConnection : require('./connection'),
    CustomerRepository: require('./repository/customerRepository'),
    ProductRepository: require('./repository/productRepository'),
    ShoppingRepository: require('./repository/shoppingRepository')
}