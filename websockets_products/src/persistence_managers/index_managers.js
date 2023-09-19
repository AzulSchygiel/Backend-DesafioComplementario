import { ProductManager } from "./files/productsManager.js";
import { CartsManager } from "./files/cartsManager.js";

import { __dirname } from "../utils.js";
import path from "path";

export const productsService = new ProductManager(path.join(__dirname,"/persistence_managers/memory/products.json"));
export const CartsService = new CartsManager(path.join(__dirname,"/persistence_managers/memory/carts.json"));