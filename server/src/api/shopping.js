const ShoppingService = require('../services/shoppingService');

const CustomerService = require('../services/customerService');

const UserAuth = require('./middlewares/auth');

module.exports = (app) => {
    const service = new ShoppingService();
    const customerService = new CustomerService();

    app.post('/shopping/order', UserAuth, async(req, res, next) => {
        const {_id} = req.user;
        const { txnNumber } = req.body;

        try{
            const {data} = await service.PlaceOrder(_id, txnNumber);

            return res.status(200).json(data);
        }
        catch(error)
        {
            next(error);
        }
    });

    app.get('shopping/orders', UserAuth, async(req,res,next) => {
        const {_id} = req.user;

        try{
            const {data} = await customerService.GetShoppingDetails(_id);

            return res.status(200).json(data);
        }
        catch(error)
        {
            next(error);
        }
    });

    app.get('shopping/cart', UserAuth, async(req,res,next) => {
        const {_id} = req.user;

        try{
            const { data } = await customerService.GetShoppingDetails(_id);

            return res.status(200).json(data.cart);
        }
        catch(error)
        {
            next(error);
        }
    })













}