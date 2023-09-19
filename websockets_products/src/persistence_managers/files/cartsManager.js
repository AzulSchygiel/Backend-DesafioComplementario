import { productsService } from "../index_managers";

export class CartsManager {

    constructor(path) {
        this.pathFile = path;
    };
    fileExist() {
        return fs.existsSync(this.pathFile)
    }
    async getCart(productId) {
        try {
            if (this.fileExist()) {
                const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
                const carrito = JSON.parse(contenido);
                const product = carrito.find(p => p.id === productId);
                if (!product) {
                    throw new Error("El producto no existe.");
                }
                return carrito;
            } else {
                throw new Error("¡Error! No se pudo obtener el producto.");
            }
        } catch (error) {
            throw error;
        }
    };

    async createCart() {
        try {
            if (this.fileExist()) {
                const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
                const carrito = JSON.parse(contenido);
                const newCart = {
                    id: 1,
                    products: []
                };
                carrito.push(newCart);
                await fs.promises.writeFile(this.pathFile, JSON.stringify(carts, null, '\t'));
                return newCart;
            } else {
                throw new Error("¡Error! No se pudo obtener el carrito.")
            }
        } catch (error) {
            throw error
        }
    };

    async addProductInCart(cartId, productId) {
        try {
            if (this.fileExist()) {
                const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
                const productsInCart = JSON.parse(contenido);
                const cart = {
                    id: productId,
                    products: [],
                    quantity: 1
                }
                let quantity = 1;
                for (let i = 1; i < cartId.length; i++);
                cart.push(quantity);
                await fs.promises.writeFile(this.pathFile, JSON.stringify(carts, null, '\t'));
                return quantity;
            } else {
                throw new Error("¡Error! No se pudo obtener el carrito.")
            }
        } catch (error) {
            throw error
        }
    };

}

