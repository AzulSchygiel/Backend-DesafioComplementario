import { Router, request, response } from "express";
import { productsService } from "../persistence_managers/index_managers";

const router = Router();

export {router as productsRuta};

router.get("/",(request, response) => {
    response.json({message:"lista de productos"});
});

router.get("/:pid", async(request, response) => {
    try {
    const productId = parseInt(request.params.pid);
    const videojuego = await productsService.getProducts(productId);
    response.json({message:"Obteniendo producto...", data:videojuego});
    } catch (error) {
    response.json({status:"error", message:error.message});
    }
});

router.post("/", async(request, response) => {
    try {
        const createProduct = request.body;
    } catch (error) {
        response.json({status:"error", message:error.message});
    }
})