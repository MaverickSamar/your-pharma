const ProductService = require("../services/productService");

const CustomerService = require("../services/customerService");


const UserAuth = require("../api/middlewares/auth");

module.exports = (app) => {
  const service = new ProductService();

  const customerService = new CustomerService();

  app.post("/product/create", async (req, res, next) => {
    try {
      const { name, desc, type, unit, price, available, banner } = req.body;

      //validation

      const { data } = await service.CreateProduct({
        name,
        desc,
        type,
        unit,
        price,
        available,
        banner,
      });

      return res.json(data);
    } catch (error) {
      next(error);
    }
  });

  app.post("/ids", async (req, res, next) => {
    try {
      const { ids } = req.body;
      const products = await service.GetSelectedProduct(ids);

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  });
  //WISHLIST
  //create GetProductById at ProductService and AddToWishlist at CustomerService
  app.put("/wishlist", UserAuth, async (req, res, next) => {
    const { _id } = req.user;
    try {
      const product = await service.GetProductById(req.body._id);

      const wishlist = await customerService.AddToWishlist(_id, product);

      return res.status(200).json(wishlist);
    } catch (error) {
      next(error);
    }
  });

  app.delete("/wishlist/:id", UserAuth, async (req, res, next) => {
    const { _id } = req.user;

    const productId = req.params.id;

    try {
      const product = await service.GetProductById(productId);

      const wishlist = await customerService.AddToWishlist(_id, productId);

      return res.status(200).json(wishlist);
    } catch (error) {
      next(error);
    }
  });

  app.put("/cart", UserAuth, async (req, res, next) => {
    const { _id, qty } = req.body;

    try {
      const product = await service.GetProductById(_id);

      const result = await customerService.ManageCart(
        req.user._id,
        product,
        qty,
        false
      );

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });

  app.delete("/cart/:id", UserAuth, async (req, res, next) => {
    const { _id } = req.user;

    try {
      const product = await service.GetProductById(req.params.id);

      const result = await customerService.ManageCart(_id, product, 0, true);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });

  app.get("/", async (req, res, next) => {
    try {
      const { data } = await service.GetProducts();

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });
};
