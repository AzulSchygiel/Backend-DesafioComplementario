import { Router } from "express";
import { productsService } from "../persistence_managers/index_managers.js";

const router = Router();

router.get("/",  async(request, response) => {
    const products = await productsService.getProducts();
    response.render("home",{products});
})
router.get("/realtimeproducts",  (request, response) => {
    response.render("realTime");
})

export { router as viewsRuta }