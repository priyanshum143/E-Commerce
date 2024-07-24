const Products = require("../models/Products")
const Category = require("../models/Category");

async function createProduct(reqData) {
    let topLevel = await Category.fidnOne({name: reqData.topLevelCategory});
    if(!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1,
        });
    }

    let secondLevel = await Category.findOne({name: reqData.secondLevelCategory, parentCategory: topLevel._id});
    if(!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            level: 2,
            parentCategory: topLevel._id,
        });
    }

    let thirdLevel = await Category.findOne({name: reqData.thirdLevelCategory, parentCategory: secondLevel._id});
    if(!thirdLevel) {
        secondLevel = new Category({
            name: reqData.thirdLevelCategory,
            level: 3,
            parentCategory: seconddLevel._id,
        });
    }

    const product = new Product({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.sizes,
        quantity: reqData.quantity,
        category: thirdLevel._id,
    })

    return await product.save();
};

async function deleteProduct(productId) {
    const product = await Product.findProductById(productId);
    await Products.findByIdAndDelete(productId);
    return "Product deleted";
};

async function updateProduct(productId, reqData) {
    return await Products.findByIdAndUpdate(productId, reqData);
};

async function findProductById(productId) {
    const product = await Products.findById(id).populate("category").exec();
    if(!product) {
        throw new Error("product not found with the given id: ", productId);
    }

    return product;
};

async function getAllProducts(reqQuery) {
    let {category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNum, pageSize} = reqQuery;
    pageSize = pageSize || 10;

    let query = Products.find().populate("category");

    if(category) {
        const existCategory = await Category.findOne({name: category});
        if(existCategory) {
            query = query.where("category").equals(existCategory._id);
        } else {
            return {content:[], currentPage: 1, totalPage: 0};
        }
    }

    if(color) {
        const colorSet = new Set(color.split(",").map(color=>color.trim.toLowerCase()));
        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i"): null;
        query = query.where("color").regex(colorRegex)
    }

    if(sizes) {
        const sizesSet = new Set(sizes);
        query = query.where("sizes.name").in([...sizesSet]);
    }

    if(minPrice && maxPrice) {
        query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }

    if(minDiscount) {
        query = query.where("discountPresent").gte(minDiscount);
    }

    if(stock) {
        if(stock === "in_stock") {
            query = (await query.where("quantity")).gt(0);
        }else if(stock === "out_of_stock") {
            query = (await query.where("quantity")).lte(0);
        }
    }

    if(sort) {
        const sortDirection = (sort === "price_hight" ? -1 : 1);
        query = query.sort({discountedPrice: sortDirection});
    }

    const totalProducts = await Products.countDocuments(query);

    const skip = (pageNum - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);

    return {content: products, currentPage: pageNum, totalPages: totalPages};
};

async function createMultipleProduct(products) {
    for(let product of products) {
        await createProduct(product);
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct,
};