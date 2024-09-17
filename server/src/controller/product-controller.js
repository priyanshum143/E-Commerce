const productService = require("../service/productService");
const Products = require("../models/Products");

const createProduct = async(req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const deleteProduct = async(req, res) => {
    const productId = req.params.id;

    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const updateProduct = async(req, res) => {
    const productId = req.params.id;
    
    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const deleteAll = async() => {
    await Products.deleteMany({});
    console.log("deleted")
}

const findProductById = async(req, res) => {
    const productId = req.params.id;
    
    try {
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const getAllProducts = async(req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const createMultipleProducts = async(req, res) => {
    try {
        await productService.createMultipleProduct(req.body);
        return res.status(201).send("Products created successfully");
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    createMultipleProducts,
    findProductById,
    deleteAll
}