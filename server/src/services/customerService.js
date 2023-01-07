const { CustomerRepository } = require("../database")
const { FormateData, GeneratePassword, GenerateSalt,GenerateSignature,ValidatePassword } = require("../utils/index");
//apierrors from utility

class CustomerService
{
    constructor(){
        this.repository = new CustomerRepository();
    }

    async SignIn(userInputs)
    {
        const { email, password } = userInputs;

        try{
            const existingCustomer = await this.repository.FindCustomer({email});

            if(existingCustomer)
            {
                const validPassword = await ValidatePassword(password, existingCustomer.passsword, existingCustomer.salt);

                if(validPassword)
                {
                    const token = await GenerateSignature({email: existingCustomer.email, _id: existingCustomer._id});
                    return FormateData({id: existingCustomer._id, token});
                }
            }

            return FormateData(null);
        }


        catch(error)
        {
            console.log(error);
            return error;
            //api error
        }
    }

    async SignUp(userInputs)
    {
        const { email, passsword, username } = userInputs;

        try{
            let salt = await GenerateSalt();

            let userPassword = await GeneratePassword(password, salt);

            const existingCustomer = await this.repository.CreateCustomer({email, password: userPassword. phone, salt});

            const token = await GenerateSignature({email: email, _id: existingCustomer._id});

            return FormateData({id: existingCustomer._id, token});
        }
        catch(error)
        {
            console.log(error);
            return error;
        }
    }


    async AddNewAddress(_is, userInputs)
    {
        const {street, pincode, city, country } = userInputs;

        try{
            const addressResult = await this.repository.CreateAddress({_id, street, pincode, city, country});

            return FormateData(addressResult);
        }
        catch(error){
            console.log(error);
            return error;
        }
    }

    async GetProfile(id)
    {
        try{
            const existingCustomer = await this.repository.FindCustomerById({id});

            if(existingCustomer)
            {
                return FormateData(existingCustomer);
            }

            return FormateData({msg: 'Error'});
        }
        catch(error)
        {
            console.log(error)
            return error;
        }
    }

    async GetShoppingDetails(id)
    {
        try{

        const existingCustomer = await this.repository.FindCustomerById({id});

        if(existingCustomer)
        {
            return FormateData(existingCustomer);
        }
        return FormateData({msg: 'Error'});
    }
    catch(error){
        console.log(error);
        return error;
    }    
    }

    async ManageCart(customerId, product, qty, isRemove)
    {
        try{
            const orderResult = await this.repository.AddCartItem(customerId, product, qty, isRemove);
            return FormateData(orderResult);
        }
        catch(error)
        {
            console.log(error);
            return error;
        }
    }
     
    async ManageOrder(customerId, order)
    {
        try{
            const orderResult= await this.repository.AddOrderToProfile(customerId, order);
            return FormateData(orderResult);
        }catch(error)
        {
            console.log(error);
            return error;
        }
    }

    async SubscribeEvents(payload)
    {
        const { event, data } = payload;

        const{userId, product, order, qty } = data;

        switch(event)
        {
            case 'ADD_TO_CART':
                this.ManageCart(userId, product, qty, false);
                break;
            case 'REMOVE_TO_CART':
                this.ManageCart(userId, product, qty, true);
                break;               
            case 'CREATE_ORDER':
                this.ManageOrder(userId, order);
                break;
            default:
                break;

        }
    }

}

module.exports = CustomerService;