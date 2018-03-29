// Require mongoose
var mongoose = require("mongoose");
var db = require("../connection.js");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create an ArticleSchema with the Schema class
var ArticleSchema = new Schema({
    // title: a string
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    date: {
        type: Date,
        default: Date.now
    },
    // url: a string
    url: {
        type: String,
        trim: true,
        // required: "Link is Required"

    },
    savedArticle: Boolean,
});

// Make an Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;