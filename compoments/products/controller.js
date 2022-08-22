const productService = require('../products/service');



const getProducts = async () => {
  try {
    let products = await productService.getProducts();
    products = products.map((item, index) => {
      item = {
        _id: item._id,
        tenduan: item.tenduan,
        mieuta: item.mieuta,
        anhduan: item.anhduan,
        tongdientich: item.tongdientich,
        tongvondautu: item.tongvondautu,
        matdoxaydung: item.matdoxaydung,
        quymo: item.quymo,
        tongsocanho: item._id,
        dientichcanho: item.dientichcanho,
        chudautu: item.chudautu,
        phattrienduan: item.phattrienduan,
        thicongxaydung: item.thicongxaydung,
        giamsatthicong: item.giamsatthicong,
        quanlyvanhanh: item.quanlyvanhanh,
        diadiemquyhoach: item.diadiemquyhoach,
        giaban: item.giaban,
        hotro: item.hotro,

        thongtinvitri: item.thongtinvitri,
        hinhanhvitri: item.hinhanhvitri,


        tieudetienich1: item.tieudetienich1,
        noidungtienich1: item.noidungtienich1,
        hinhanhtienich1: item.hinhanhtienich1,
        tieudetienich2: item.tieudetienich2,
        noidungtienich2: item.noidungtienich2,
        hinhanhtienich2: item.hinhanhtienich2,
        tieudetienich3: item.tieudetienich3,
        noidungtienich3: item.noidungtienich3,
        hinhanhtienich3: item.hinhanhtienich3,
        tieudetienich4: item.tieudetienich4,
        noidungtienich4: item.noidungtienich4,
        hinhanhtienich4: item.hinhanhtienich4,
        tieudetienich5: item.tieudetienich5,
        noidungtienich5: item.noidungtienich5,
        hinhanhtienich5: item.hinhanhtienich5,
        tieudetienich6: item.tieudetienich6,
        noidungtienich6: item.noidungtienich6,
        hinhanhtienich6: item.hinhanhtienich6,
        tieudetienich7: item.tieudetienich7,
        noidungtienich7: item.noidungtienich7,
        hinhanhtienich7: item.hinhanhtienich7,



        anhmatbang1: item.anhmatbang1,
        anhmatbang2: item.anhmatbang2,
        anhmatbang3: item.anhmatbang3,
        anhmatbang4: item.anhmatbang4,
        anhmatbang5: item.anhmatbang5,

        hinhanh1: item.hinhanh1,
        hinhanh2: item.hinhanh2,
        hinhanh3: item.hinhanh3,
        hinhanh4: item.hinhanh4,
        hinhanh5: item.hinhanh5,
        tieudephoicanh1: item.tieudephoicanh1,
        hinhanhphoicanh1: item.hinhanhphoicanh1,
        tieudephoicanh2: item.tieudephoicanh2,
        hinhanhphoicanh2: item.hinhanhphoicanh2,
        hinhanh6: item.hinhanh6,
        hinhanh7: item.hinhanh7,
        hinhanh8: item.hinhanh8,

        tieudebaogia: item.tieudebaogia,
        hinhanhbaogia1: item.hinhanhbaogia1,
        tieudequatang: item.tieudequatang,
        noidungquatang1: item.noidungquatang1,
        noidungquatang2: item.noidungquatang2,
        noidungquatang3: item.noidungquatang3,
        noidungquatang4: item.noidungquatang4,
        hinhanhbaogia2: item.hinhanhbaogia2,

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
        anhduan: item.anhduan,
        tongdientich: item.tongdientich,
        tongvondautu: item.tongvondautu,
        matdoxaydung: item.matdoxaydung,
        quymo: item.quymo,
        tongsocanho: item._id,
        dientichcanho: item.dientichcanho,
        chudautu: item.chudautu,
        phattrienduan: item.phattrienduan,
        thicongxaydung: item.thicongxaydung,
        giamsatthicong: item.giamsatthicong,
        quanlyvanhanh: item.quanlyvanhanh,
        diadiemquyhoach: item.diadiemquyhoach,
        giaban: item.giaban,
        hotro: item.hotro,

        thongtinvitri: item.thongtinvitri,
        hinhanhvitri: item.hinhanhvitri,


        tieudetienich1: item.tieudetienich1,
        noidungtienich1: item.noidungtienich1,
        hinhanhtienich1: item.hinhanhtienich1,
        tieudetienich2: item.tieudetienich2,
        noidungtienich2: item.noidungtienich2,
        hinhanhtienich2: item.hinhanhtienich2,
        tieudetienich3: item.tieudetienich3,
        noidungtienich3: item.noidungtienich3,
        hinhanhtienich3: item.hinhanhtienich3,
        tieudetienich4: item.tieudetienich4,
        noidungtienich4: item.noidungtienich4,
        hinhanhtienich4: item.hinhanhtienich4,
        tieudetienich5: item.tieudetienich5,
        noidungtienich5: item.noidungtienich5,
        hinhanhtienich5: item.hinhanhtienich5,
        tieudetienich6: item.tieudetienich6,
        noidungtienich6: item.noidungtienich6,
        hinhanhtienich6: item.hinhanhtienich6,
        tieudetienich7: item.tieudetienich7,
        noidungtienich7: item.noidungtienich7,
        hinhanhtienich7: item.hinhanhtienich7,



        anhmatbang1: item.anhmatbang1,
        anhmatbang2: item.anhmatbang2,
        anhmatbang3: item.anhmatbang3,
        anhmatbang4: item.anhmatbang4,
        anhmatbang5: item.anhmatbang5,

        hinhanh1: item.hinhanh1,
        hinhanh2: item.hinhanh2,
        hinhanh3: item.hinhanh3,
        hinhanh4: item.hinhanh4,
        hinhanh5: item.hinhanh5,
        tieudephoicanh1: item.tieudephoicanh1,
        hinhanhphoicanh1: item.hinhanhphoicanh1,
        tieudephoicanh2: item.tieudephoicanh2,
        hinhanhphoicanh2: item.hinhanhphoicanh2,
        hinhanh6: item.hinhanh6,
        hinhanh7: item.hinhanh7,
        hinhanh8: item.hinhanh8,

        tieudebaogia: item.tieudebaogia,
        hinhanhbaogia1: item.hinhanhbaogia1,
        tieudequatang: item.tieudequatang,
        noidungquatang1: item.noidungquatang1,
        noidungquatang2: item.noidungquatang2,
        noidungquatang3: item.noidungquatang3,
        noidungquatang4: item.noidungquatang4,
        hinhanhbaogia2: item.hinhanhbaogia2,
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
      anhduan: product.anhduan,
      tongdientich: product.tongdientich,
      tongvondautu: product.tongvondautu,
      matdoxaydung: product.matdoxaydung,
      quymo: product.quymo,
      tongsocanho: product._id,
      dientichcanho: product.dientichcanho,
      chudautu: product.chudautu,
      phattrienduan: product.phattrienduan,
      thicongxaydung: product.thicongxaydung,
      giamsatthicong: product.giamsatthicong,
      quanlyvanhanh: product.quanlyvanhanh,
      diadiemquyhoach: product.diadiemquyhoach,
      giaban: product.giaban,
      hotro: product.hotro,

      thongtinvitri: product.thongtinvitri,
      hinhanhvitri: product.hinhanhvitri,


      tieudetienich1: product.tieudetienich1,
      noidungtienich1: product.noidungtienich1,
      hinhanhtienich1: product.hinhanhtienich1,
      tieudetienich2: product.tieudetienich2,
      noidungtienich2: product.noidungtienich2,
      hinhanhtienich2: product.hinhanhtienich2,
      tieudetienich3: product.tieudetienich3,
      noidungtienich3: product.noidungtienich3,
      hinhanhtienich3: product.hinhanhtienich3,
      tieudetienich4: product.tieudetienich4,
      noidungtienich4: product.noidungtienich4,
      hinhanhtienich4: product.hinhanhtienich4,
      tieudetienich5: product.tieudetienich5,
      noidungtienich5: product.noidungtienich5,
      hinhanhtienich5: product.hinhanhtienich5,
      tieudetienich6: product.tieudetienich6,
      noidungtienich6: product.noidungtienich6,
      hinhanhtienich6: product.hinhanhtienich6,
      tieudetienich7: product.tieudetienich7,
      noidungtienich7: product.noidungtienich7,
      hinhanhtienich7: product.hinhanhtienich7,



      anhmatbang1: product.anhmatbang1,
      anhmatbang2: product.anhmatbang2,
      anhmatbang3: product.anhmatbang3,
      anhmatbang4: product.anhmatbang4,
      anhmatbang5: product.anhmatbang5,

      hinhanh1: product.hinhanh1,
      hinhanh2: product.hinhanh2,
      hinhanh3: product.hinhanh3,
      hinhanh4: product.hinhanh4,
      hinhanh5: product.hinhanh5,
      tieudephoicanh1: product.tieudephoicanh1,
      hinhanhphoicanh1: product.hinhanhphoicanh1,
      tieudephoicanh2: product.tieudephoicanh2,
      hinhanhphoicanh2: product.hinhanhphoicanh2,
      hinhanh6: product.hinhanh6,
      hinhanh7: product.hinhanh7,
      hinhanh8: product.hinhanh8,

      tieudebaogia: product.tieudebaogia,
      hinhanhbaogia1: product.hinhanhbaogia1,
      tieudequatang: product.tieudequatang,
      noidungquatang1: product.noidungquatang1,
      noidungquatang2: product.noidungquatang2,
      noidungquatang3: product.noidungquatang3,
      noidungquatang4: product.noidungquatang4,
      hinhanhbaogia2: product.hinhanhbaogia2,
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
