const socketClient = io();

const productList = document.getElementById("productList");
const createForm = document.getElementById("createForm");

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(createForm);
    const jsonData = {};
    for(const [key, value] of formData.entries()){
        jsonData[key] = value
    };
    jsonData.price = parseInt(jsonData.price);
    console.log(jsonData);
    socketClient.emit("addProduct", jsonData);
    createForm.reset();
});

socketClient.on("productsArray", (dataProducts) => {
    console.log(dataProducts);
    let elementFront = "";
    dataProducts.forEach(product => {
    elementFront +=
    `<li>
    <p>Nombre: ${product.title}</p>
    <button onclick = "deleteProduct(${product.id})">Eliminar</button>
    </li>`
    });
    productList.innerHTML = elementFront;
});

const deleteProduct = (productId) => {
    console.log(productId);
};