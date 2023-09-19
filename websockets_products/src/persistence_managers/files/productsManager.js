import fs from "fs";
import { resolve } from "path";

export class ProductsManager {
    constructor(path) {
        this.pathFile = path;
    }

obligatory(title, description, price, thumbnail, code, stock, category, limit) {
        if (!title || !description || !price || !thumbnail || !code || !stock || !category || !limit) {
            return console.log("¡Todos los datos son OBLIGATORIOS!")
        }
    }

validateProducts(title, description, price, thumbnail, code, stock, category, limit) {
        if (!title || !title.trim()) {
            return new Error("El producto debe tener título.")
        }
        if (!description || !description.trim()) {
            return new Error("El producto debe tener descripción.")
        }
        if (!isNaN(price) || price.toString().includes("$ ")) {
            return new Error("El precio tiene que ser solo numérico.")
        }
        if (!thumbnail || !thumbnail.trim()) {
            return new Error("El producto debe tener imagén.")
        }
        if (!isNaN(code) || code.toString()) {
            return new Error("El código tiene que ser solo numérico.")
        }
        if (!isNaN(stock) || stock.toString()) {
            return new Error("El stock tiene que ser solo numérico.")
        }
        if (!category || !category.trim()) {
            return new Error("El producto debe tener categoría.")
        }
        if (!limit || !limit.trim()) {
            return new Error("Los productos deben tener límite de búsqueda.")
        }
    }

    async createProduct() {
        try {
            if (this.fileExist()) {
                const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
                const videojuegos = JSON.parse(contenido);
                const newProduct = {
                id: newId,
                title,
                description,
                code,
                price,
                status: true,
                stock,
                category,
                thumbnail,
                limit
                };
                videojuegos.push(newProduct);
                await fs.promises.writeFile(this.pathFile,JSON.stringify(videojuegos, null, '\t'));
                return newProduct;
            } else {
                throw new Error("¡Error! No se pudo crear el carrito.")
            }
        } catch (error) {
            throw error
        }
}

async addProduct(product) {
            for (const p of productManager.products) {
                if (p.id === product.id) {
                    return productManager.updateProduct(product, p.id)
                }
            }

const newProduct = {
        id,
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbnail,
        limit
    }
    this.products.push(newProduct)
    console.log("Se agregó: ", newProduct)
    }

unicoCode(id) {
        for (let i = 0; i < globalThis.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i]
            }
        }
        return null
    }

async updateProduct(id, name) {
        const product = this.findProductById(id)
        if (product === null) {
            throw new Error(`Producto buscado: ${id} not found`)
        }
        product.name = name
        this.products.find(p => p.id === product.id).name = name
    }

fileExist() {
        return fs.existsSync(this.pathFile)
    }

async getProducts(productId) {
    try {
        if (this.fileExist()) {
            const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
            const videojuegos = JSON.parse(contenido);
            const product = videojuegos.find(p => p.id === productId);
            if (!product) {
                throw new Error("El producto no existe.");
            }
            return videojuegos;
        } else {
            throw new Error("¡Error! No se pudo obtener el producto.");
        }
    } catch (error) {
        throw error;
    }
}

async getProductById(id) {
    for (const p of this.products)
        if (p.id === id) {
            return {
                ...p
            }
        } else {
            return null
        }
}

async deleteProduct(id) {
    const product = this.findProductById(id)
    if (product === null) {
        throw new Error(`Producto buscado: ${id} not found`)
    }
    this.products.splice(this.products.indexOf(product), 1)
}
}
