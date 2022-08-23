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
const videoController = require("../compoments/video/controller");
const canhoController = require("../compoments/canho/controller");

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


});
router.get("/table/du-an/insert", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    res.render("admin_insert_du-an");


});
router.post("/insert_du-an", [authentication.checklogin], [upload.single('image')], async function (req, res, next) {
    // thêm mới sp vào db
    let { body, file } = req;
    let image = '';
    if (file) {
        image = `http://192.168.12.61:3000/images/${file.filename}`
    }
    body = { ...body, image }


    // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
    await productController.insert(body);

    res.redirect("/admin/table/du-an");
    //chuyển lại trang sản phẩm 
});
router.delete("/:id/delete", [authentication.checklogin], async function (req, res, next) {
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
        let image = `http://192.168.12.61:3000/images/${file.filename}`
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
    const data = await newController.getAllnew();

    res.render("admin_table_new", { new: data });
    // hiển thị(render)
    // if (data != null) {
    //   res.status(200).json({ status: 200, error: false, data: data })
    // } else {
    //   res.status(200).json({ status: 200, error: false, data: [] })
    // }

});
router.get("/table/news/insert", [authentication.checklogin], async function (req, res, next) {
    res.render("admin_insert_news");
});
router.post("/insert_news", [upload.single('image')], async function (req, res, next) {
    // thêm mới sp vào db
    const { body } = req


    // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
    await newController.insert(body);

    res.redirect("/admin/table/news");
    //chuyển lại trang sản phẩm 
});

router.delete("/news/:id/delete", async function (req, res, next) {
    // xóa 1 sản phẩm
    const { id } = req.params;
    console.log(id);
    await newController.deleteeee(id);

    res.json({ result: true });
    // trả về kết quả xóas

});
//video
router.get("/table/video", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const products = await videoController.getAll();

    res.render("admin_table_video", { products: products });
});
router.get("/table/video/insert", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    res.render("admin_insert_video");


});
router.post("/insert_video", [upload.single('image')], async function (req, res, next) {
    // thêm mới sp vào db
    const { body } = req


    // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
    await videoController.insert(body);

    res.redirect("/admin/table/video");
    //chuyển lại trang sản phẩm 
});
router.delete("/video/:id/delete", async function (req, res, next) {
    // xóa 1 sản phẩm
    const { id } = req.params;
    await videoController.deleteeee(id);

    res.json({ result: true });
    // trả về kết quả xóa

});

//căn hộ
router.get("/table/can-ho", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const products = await canhoController.getAll();

    res.render("admin_table_canho", { products: products });


});
router.get("/table/can-ho/insert", async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    res.render("admin_insert_canho");


});
router.post("/insert_canho", [upload.single('image')], async function (req, res, next) {
    // thêm mới sp vào db
    const { body } = req


    // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
    await canhoController.insert(body);

    res.redirect("/admin/table/can-ho");
    //chuyển lại trang sản phẩm 
});
router.delete("/can-ho/:id/delete", async function (req, res, next) {
    // xóa 1 sản phẩm
    const { id } = req.params;
    await canhoController.deleteeee(id);

    res.json({ result: true });
    // trả về kết quả xóa

});
router.get("/table/can-ho/:id/edit", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;

    // lấy thông tin chi tiết của sản phẩm
    const product = await canhoController.getProductById(id);
    // lấy danh sách các danh mục

    res.render("edit_tablecanho", { product: product });
    //hiển thị(render)
});
module.exports = router;
