/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const productController = require("../compoments/products/controller");
const videoController = require("../compoments/video/controller");



router.get("/:id/detail", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;
    console.log(id);
    // lấy thông tin chi tiết của sản phẩm
    const video = await videoController.getVideoByid(id);
    const data = await videoController.getVideos();


    res.render("video_deltai", { videos: video, data: data });
    //hiển thị(render)
});



module.exports = router;
