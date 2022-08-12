/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const productController = require("../compoments/products/controller");
const newController = require("../compoments/news/controller");
const khachangController = require("../compoments/khachhang/controller");

const authentication = require("../ui/authentication")
const upload = require("../middle/upload");

router.get("/", [authentication.checklogin], async function (req, res, next) {
    res.render("admin");

});


//dự án
router.get("/table/du-an", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const products = await productController.getAll();

    res.render("admin_table_duan", { products: products });
    // hiển thị(render)
    // if (products != null) {
    //     res.status(200).json({ status: 200, error: false, data: products })
    // } else {
    //     res.status(200).json({ status: 200, error: false, data: [] })
    // }

});
router.get("/table/du-an/insert", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    res.render("admin_insert_du-an");


});
router.post("/insert_du-an", [upload.single('image')], async function (req, res, next) {
    // thêm mới sp vào db
    let { body, file } = req;
    let image = '';
    if (file) {
        image = `https://batdongsankimanh.herokuapp.com/images/${file.filename}`
    }
    body = { ...body, image }


    // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
    await productController.insert(body);

    res.redirect("/admin/table/du-an");
    //chuyển lại trang sản phẩm 
});
router.delete("/:id/delete", async function (req, res, next) {
    // xóa 1 sản phẩm
    const { id } = req.params;
    await productController.deleteeee(id);

    res.json({ result: true });
    // trả về kết quả xóa

});

router.post('/:id/edit', [upload.single('image')], async function (req, res, next) {
    // update 1 sản phẩm vào db
    // const { id } = req.params
    let { body, file, params } = req;
    console.log('body: ' + JSON.stringify(body))
    console.log('file: ' + JSON.stringify(file))
    delete body.image;
    if (file) {
        let image = `https://batdongsankimanh.herokuapp.com/images/${file.filename}`
        body = { ...body, image }
    }

    // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
    await productController.update(params.id, body);
    res.redirect('/admin/table/du-an')
});
router.get("/table/duan/:id/edit", [authentication.checklogin], async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;

    // lấy thông tin chi tiết của sản phẩm
    const product = await productController.getProductById(id);
    // lấy danh sách các danh mục

    res.render("edit_tableduan", { product: product });
    //hiển thị(render)
});

// khách hàng

router.get("/table/khach-hang", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const data = await khachangController.getAllkhach();

    res.render("admin_table_khach", { khachhang: data });
    // hiển thị(render)
    // if (data != null) {
    //   res.status(200).json({ status: 200, error: false, data: data })
    // } else {
    //   res.status(200).json({ status: 200, error: false, data: [] })
    // }

});
// bản tin 
router.get("/table/news", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const data = await newController.getAll();

    res.render("admin_table_new", { new: data });
    // hiển thị(render)
    // if (data != null) {
    //   res.status(200).json({ status: 200, error: false, data: data })
    // } else {
    //   res.status(200).json({ status: 200, error: false, data: [] })
    // }

});
module.exports = router;
