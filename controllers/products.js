const Product = require("../models/product")

const getAllProducts = async (req, res) => {
    
    const {company} = req.query;
    const {name} = req.query
    const {sort} = req.query
    const {select} = req.query
    const queryObject = {};

    if (company){
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = {$regex:name, $options:"i"};
    }

    let apiData = Product.find(queryObject)

    if (sort) {
        let sortFix = sort.split(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    
    const myData = await apiData.select("name company");;
    
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).select("name company");
    console.log(
        "~ file: product.js ~ line 10 ~ getAllProductsTesting ~ req.query",
        req.query
    );
    res.status(200).json({myData});
};

module.exports = {getAllProducts, getAllProductsTesting}