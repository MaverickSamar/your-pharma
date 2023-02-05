const { CustomerModel, AddressModel } = require('../models');


class CustomerRepository {

    async CreateCustomer({
        username, email, password, salt
    }){
        try{
            const customer = new CustomerModel({
                username,
                email,
                password,
                salt,
                address: []
            })
            const customerResult = await customer.save();
            return customerResult;
        }catch(err)
        {
            throw err;
        }
    }

    async CreateAddress({_id, street, pincode, city, country}){

        try{
            const profile = await CustomerModel.findById(_id);

            if(profile)
            {
                const newAddress = new AddressModel({
                    street,
                    pincode,
                    city,
                    country
                })

                await newAddress.save();
                profile.address.push(newAddress);
            }
            return await profile.save;
        }catch(err)
        {
            throw err;
        }
    }

    async FindCustomer({ email })
    {
        try{
            const existingCustomer = await CustomerModel.findOne({ email: email});
            return existingCustomer;

        }
        catch(err)
        {
            throw err;
        }
    }

    async FindCustomerById({ id }){
        try{
            const existingCustomer = await CustomerModel.findById(id)
            .populate('address')
            .populate('orders')
            .populate('cart.product');

            return existingCustomer;

        }catch(err)
        {
            console.log(err);
        }
    }

    async AddCartItem(customerId, product, qty, isRemove)
    {
        try
        {
            const profile = await CustomerModel.findById(customerId).populate('cart.product');

            if(profile)
            {
                const cartItem = {
                    product: product,
                    unit: qty,
                };

                let cartItems = profile.cart;

                if(cartItems.length > 0)
                {
                    let isExist = false;
                    cartItems.map(item => 
                        {
                        if(item.product._id.toString() === product._id.toString())
                        {
                            if(isRemove)
                            {
                                cartItems.splice(cartItems.indexOf(item), 1);
                            }
                            else
                            {
                                item.unit = qty;
                            }
                            isExist = true;
                        }
                    });
                    
                    if(!isExist){
                        cartItems.push(cartItem);
                    }
                }else{
                    cartItems.push(cartItem);
                }

                profile.cart = cartItems;
                const cartResults = await profile.save();

                return cartResults.cart;
            }
        }catch(err)
        {
            console.log(err);
        }
    }

    async AddOrderToProfile(customerId, order)
    {
        try{
            const profile = await CustomerModel.findById(customerId);

            if(profile)
            {
                if(profile.orders == undefined)
                {
                    profile.orders = []
                }

                profile.orders.push(order);

                profile.cart = [];

                const profileResult = await profile.save();

                return profileResult;
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }
}
module.exports = CustomerRepository;



