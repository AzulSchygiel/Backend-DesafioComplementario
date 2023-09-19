import fs from "fs";
import { Router } from "express";
import { CartsService, productsService } from "../persistence_managers/index_managers";

const router = Router();

export {router as cartsRuta};

router.get("/", async(request, response) => {
    try {
    const cart = await CartsService.getCart();
    response.json({data:cart});
    } catch (error) {
        res.json({error:error.message});
    }
});

router.get("/:cid", async(request, response) => {
    try {
    const productsInCart = parseInt(request.params.cid);
    const cproduct = await CartsService.getCart(productsInCart);
    response.json({data:cproduct});
    } catch (error) {
    response.json({status:"error", message:error.message});
    }
});

router.post("/", async(request,response) => {
    try {
        const newCart = await CartsService.createCart();
        response.json({data:newCart});
    } catch (error) {
        response.json({error:error.message});
    }
});

router.post("/:cid/product/:pid", async(request,response) => {
    try {
        const cartId = parseInt(request.params.cid);
        const cproduct = await CartsService.getCart(cartId);
        response.json({data:cproduct});
        const productId = parseInt(request.params.pid);
        const product = await productsService.getProductsb(productId);
        response.json({data:product});
    } catch (error) {
        response.json({error:error.message});
    }
});