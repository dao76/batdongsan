const productService = require('../products/service');



const getProducts = async () => {
  try {
    let products = await productService.getProducts();
    products = products.map((item, index) => {
      item = {
        _id: item._id,
        tenduan: item.tenduan,
        mieuta: item.mieuta,
        image: item.image,
        gia: item.gia,
        tenthuongmai: item.tenthuongmai,
        thongtinvitri: item.thongtinvitri,
        thongtinvitri1: item.thongtinvitri1,
        thongtinvitri2: item.thongtinvitri2,
        thongtinvitri3: item.thongtinvitri3,
        vitri: item.vitri,
        sotang: item.sotang,
        quymo: item.quymo,
        dientichtb: item.dientichtb,
        chudautu: item.chudautu,
        phattrienduan: item.phattrienduan,

        tuvangiamsat: item.tuvangiamsat,
        nhathau: item.nhathau,
        hotrovon: item.hotrovon,
        tiendoxaydung: item.tiendoxaydung,
        noidunganhduan: item.noidunganhduan,
        anhlienquan1: item.anhlienquan1,

        anhlienquan2: item.anhlienquan2,
        anhlienquan3: item.anhlienquan3,
        anhlienquan4: item.anhlienquan4,
        anhlienquan5: item.anhlienquan5,
        anhlienquan6: item.anhlienquan6,
        anhvitri1: item.anhvitri1,
        anhvitri2: item.anhvitri2,
        anhvitri3: item.anhvitri3,
        anhvitri4: item.anhvitri4,
        noidunganhphaply: item.noidunganhphaply,
        anhphaply1: item.anhphaply1,
        noidunganhphaply1: item.noidunganhphaply1,
        anhphaply2: item.anhphaply2,
        noidunganhphaply2: item.noidunganhphaply2,
        anhphaply3: item.anhphaply3,
        noidunganhphaply3: item.noidunganhphaply3,
        anhphaply4: item.anhphaply4,
        noidunganhphaply4: item.noidunganhphaply4,
        anhphaply5: item.anhphaply5,
        noidungcanho: item.noidungcanho,
        anhcanho1: item.anhcanho1,
        anhcanho2: item.anhcanho2,
        anhcanho3: item.anhcanho3,
        anhcanho4: item.anhcanho4,
        anhcanho5: item.anhcanho5,
        anhcanho6: item.anhcanho6,

        index: index + 1
      }
      return item;
    })

    return products;
  } catch (error) {
    return []
  }
}
const getAll = async () => {
  try {
    let products = await productService.getAllProducts();
    products = products.map((item, index) => {
      item = {
        _id: item._id,
        tenduan: item.tenduan,
        mieuta: item.mieuta,
        image: item.image,
        gia: item.gia,

        tenthuongmai: item.tenthuongmai,
        thongtinvitri: item.thongtinvitri,
        thongtinvitri1: item.thongtinvitri1,
        thongtinvitri2: item.thongtinvitri2,
        thongtinvitri3: item.thongtinvitri3,

        vitri: item.vitri,
        sotang: item.sotang,
        quymo: item.quymo,
        dientichtb: item.dientichtb,
        vondautu: item.dientichtb,
        tongcanho: item.dientichtb,
        dientichcanho: item.dientichtb,
        chudautu: item.chudautu,
        phattrienduan: item.phattrienduan,

        tuvangiamsat: item.tuvangiamsat,
        nhathau: item.nhathau,
        hotrovon: item.hotrovon,
        tiendoxaydung: item.tiendoxaydung,
        noidunganhduan: item.noidunganhduan,
        anhlienquan1: item.anhlienquan1,

        anhlienquan2: item.anhlienquan2,
        anhlienquan3: item.anhlienquan3,
        anhlienquan4: item.anhlienquan4,
        anhlienquan5: item.anhlienquan5,
        anhlienquan6: item.anhlienquan6,
        anhvitri1: item.anhvitri1,
        anhvitri2: item.anhvitri2,
        anhvitri3: item.anhvitri3,
        anhvitri4: item.anhvitri4,
        noidunganhphaply: item.noidunganhphaply,
        anhphaply1: item.anhphaply1,
        noidunganhphaply1: item.noidunganhphaply1,
        anhphaply2: item.anhphaply2,
        noidunganhphaply2: item.noidunganhphaply2,
        anhphaply3: item.anhphaply3,
        noidunganhphaply3: item.noidunganhphaply3,
        anhphaply4: item.anhphaply4,
        noidunganhphaply4: item.noidunganhphaply4,
        anhphaply5: item.anhphaply5,
        noidungcanho: item.noidungcanho,
        anhcanho1: item.anhcanho1,
        anhcanho2: item.anhcanho2,
        anhcanho3: item.anhcanho3,
        anhcanho4: item.anhcanho4,
        anhcanho5: item.anhcanho5,
        anhcanho6: item.anhcanho6,
        index: index + 1
      }
      return item;
    })

    return products;
  } catch (error) {
    return []
  }
}
const getProductById = async (id) => {
  try {
    let product = await productService.getProductbyid(id);
    product = {
      _id: product._id,
      tenduan: product.tenduan,
      mieuta: product.mieuta,
      image: product.image,
      gia: product.gia,
      tenthuongmai: product.tenthuongmai,
      thongtinvitri: product.thongtinvitri,
      thongtinvitri1: product.thongtinvitri1,
      thongtinvitri2: product.thongtinvitri2,
      thongtinvitri3: product.thongtinvitri3,


      vitri: product.vitri,
      sotang: product.sotang,
      quymo: product.quymo,
      dientichtb: product.dientichtb,
      vondautu: product.vondautu,
      tongcanho: product.tongcanho,
      dientichcanho: product.dientichcanho,
      chudautu: product.chudautu,
      phattrienduan: product.phattrienduan,

      tuvangiamsat: product.tuvangiamsat,
      nhathau: product.nhathau,
      hotrovon: product.hotrovon,
      tiendoxaydung: product.tiendoxaydung,
      noidunganhduan: product.noidunganhduan,
      anhlienquan1: product.anhlienquan1,

      anhlienquan2: product.anhlienquan2,
      anhlienquan3: product.anhlienquan3,
      anhlienquan4: product.anhlienquan4,
      anhlienquan5: product.anhlienquan5,
      anhlienquan6: product.anhlienquan6,
      anhvitri1: product.anhvitri1,
      anhvitri2: product.anhvitri2,
      anhvitri3: product.anhvitri3,
      anhvitri4: product.anhvitri4,
      noidunganhphaply: product.noidunganhphaply,
      anhphaply1: product.anhphaply1,
      noidunganhphaply1: product.noidunganhphaply1,
      anhphaply2: product.anhphaply2,
      noidunganhphaply2: product.noidunganhphaply2,
      anhphaply3: product.anhphaply3,
      noidungcanho: product.noidungcanho,
      anhcanho1: product.anhcanho1,
      anhcanho2: product.anhcanho2,
      anhcanho3: product.anhcanho3,
      anhcanho4: product.anhcanho4,
      anhcanho5: product.anhcanho5,
      anhcanho6: product.anhcanho6,
    }
    return product;
  } catch (error) {
    return {};
  }

}


const insert = async (product) => {
  await productService.insert(product);

}
const update = async (id, product) => {
  try {
    await productService.update(id, product);

  } catch (error) {

  }
}
const deleteeee = async (id) => {
  try {
    await productService.deletee(id);

  } catch (error) {

  }
}
module.exports = { getProducts, update, deleteeee, insert, getProductById, getAll }
