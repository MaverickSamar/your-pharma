const {ProductRepository } = require('../database');
const { FormateData } = require('../utils');
//apierrors

class ProductService{
    
    constructor(){
        this.repository = new ProductRepository();
    }

    async CreateProduct(productInputs)
    {
        try{
            const productResult = await this.repository.CreateProduct(productInputs);
            return FormateData(productResult);
        }
        catch(error)
        {
            console.log(error);
            return error;

        }
    }

    async GetProducts()
    {
        try{

            const products = await this.repository.Products()

            let categories = {};

            products.map(({type}) => {
                categories[type] = type;
            });

            return FormateData({products, categories: Object.keys(categories)});
        }catch(error)
        {
            console.log(error);
            return error;
        }
    }

    async GetProductDescription(productId){
        try{
            const product = await this.repository.FindById(productId);
            return FormateData(product);
        }
        catch(error)
        {
            console.log(error);
            return error;
        }
    }

    async GetSelectedProduct(selectedIds)
    {
        try{
            const products = this.repository.FindSelectedProducts(selectedIds);
            return FormateData(products);
        }
        catch(error)
        {
            console.log(error);
            return error;
        }
    }

    async GetProductByCategory(category)
    {
        try{
            const products = await this.repository.FindByCategory(category);
            return FormateData(products);
        }
        catch(error)
        {
            console.log(error);
            return error;
        }
    }

}

module.exports = ProductService;