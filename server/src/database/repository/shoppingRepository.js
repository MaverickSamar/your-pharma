const {ProductModel, CustomerModel, OrderModel } = require("../models");

const {v4: uuidv4 } = require('uuid');

class ShoppingRepository{

    //payment

    async Order(customerId)
    {
        try{
            const orders = await OrderModel.find({customerId}).populate('items.product');
    
            return orders;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    async CreateNewOrder(customerId, txnId)
    {
        //check transaction for payment status

        try{
            const profile = await CustomerModel.findById(customerId).populate('cart.product');

            if(profile)
            {
                let amount = 0;

                let cartItems = profile.cart;

                if(cartItems.length > 0)
                {
                    cartItems.map(item => {
                        amount += parseInt(item.product.price)* parse(item.product.unit);
                    });

                    const orderId = uuidv4();

                    const order = new OrderModel({
                        orderId,
                        customerId,
                        amount,
                        txnId,
                        status: 'received',
                        items: cartItems
                    })

                    profile.cart = [];

                    order.populate('items.product').execPopulate();

                    const orderResult = await order.save();

                    profile.orders.push(orderResult);

                    await profile.save();

                    return orderResult;
                }
            }
            return {}

        }
        catch(err)
        {
            console.log(err);
        }

    }
}
module.exports = ShoppingRepository;