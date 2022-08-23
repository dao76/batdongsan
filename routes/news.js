/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const productController = require("../compoments/products/controller");
const videoController = require("../compoments/video/controller");
const newsController = require("../compoments/news/controller");



router.get("/:id/detail", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;
    console.log(id);
    // lấy thông tin chi tiết của sản phẩm
    const video = await newsController.getNewsByid(id);
    const data = await newsController.getAllnew();

    res.render("tintuc_deltai", { videos: video, data: data });
    //hiển thị(render)
});



module.exports = router;
