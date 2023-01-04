const { ProductModel } = require("../models");

//error handling from utility


class ProductRepository{

    async CreateProduct({ name, desc, type, unit, price, available, banner}){

        try{
            const product = new ProductModel({
                name: name,
                desc: desc,
                type: type,
                unit: unit,
                price: price,
                available: available,
                banner: banner
            });

            const productResult = await product.save();
            return productResult;
        }
        catch(err)
        {
            console.log(err);
            throw err;
        }
    }

    async Products(){
        try{
            return await  ProductModel.find();
        }
        catch(err)
        {
            console.log(err);
            throw err;
        }
    }


    async FindById(id){
        try{
            return await ProductModel.findById(id);
        }
        catch(err)
        {
            console.log(err);
            throw err;
        }
    }

    async FindByCategory(category)
    {
        try{
            const products = await ProductModel.find({type: category});
    
            return products;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    async FindSelectedProducts(selectedIds)
    {
        try{
            const products = await (await ProductModel.find().where('_id')).in(selectedIds.map(_id = _id)).exec();

            return products;
        }catch(err)
        {
            console.log(err);
        }
    }

}

module.exports = ProductRepository;