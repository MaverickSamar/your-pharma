const { ShoppingRepository} = require("../database");
const { FormateData } = require("../utils");

class ShoppingService{

    constructor(){
        this.repository = new ShoppingRepository();
    }

    async PlaceOrder(userInputs)
    {
        const { _id, txnNumber } = userInputs;

        //verify the txn number with payment logs

        try{

            const orderResult = await this.repository.CreateNewOrder(_id, txnNumber);
            return FormateData(orderResult);
        }
        catch(error)
        {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ShoppingService;