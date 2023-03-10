const CustomerService = require("../services/customerService");

const UserAuth = require("./middlewares/auth");

module.exports = (app) => {
    
    const service = new CustomerService();

    app.get("/", (req, res, next) => {

        return res.status(200).json({"msg" : "Hello from 8000"});
    });

    app.post("/customer/signup", async(req, res, next) => {
        try{ 
            const {username, email, password} = req.body;

            const { data} = await service.SignUp({username, email, password});

            return res.status(200).json(data);
        }
        catch(error)
        {
            next(error);
        }
    });


    app.post("/customer/login", async(req, res, next) => {
        try{

            const {email, password } = req.body;

            const {data} = await service.SignIn({email, password});
            console.log(data);
            return res.status(200).json(data);
        }
        catch(error)
        {
            console.log(error);
            next(error);
        }
    });


    app.post("/customer/profile", UserAuth, async(req,res,next) => {
        try
        {
            const {_id} = req.user;

            const {street, pincode, city, country} = req.body;

            const { data } = await service.AddNewAddress(_id, {
                street,
                pincode,
                city,
                country,
            });

            return res.status(200).json(data);
        }
        catch(error)
        {
            console.log(error);
            throw error;
        }
    });

    app.get("/customer/profile", UserAuth, async(req,res,next) => {

        try{

        
            const {_id} = req.user;

            const { data } = await service.GetProfile({_id});

            return res.status(200).json(data);
        }
        catch(error){
            console.log(error);
            next(error);
        }
    });

    //wishlist


}

