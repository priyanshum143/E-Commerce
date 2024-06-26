const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },

    parentCategory: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Category",
    },

    level: {
        type: Number,
        required: true,
    },
});

const CategorySchema = mongoose.model("Category", Category);
module.exports = CategorySchema;