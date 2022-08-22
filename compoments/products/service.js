/**
 * service tầng goa tiếp db
 * */

/**
 *  descriptionL lấy danh sách sản phẩm
 */
const { setMaxListeners } = require('./model');
const productmodel = require('./model');
const getProducts = async () => {
  // return data;
  return productmodel.find({}, 'id tenduan mieuta anhduan tongdientich tongvondautu matdoxaydung quymo tongsocanho dientichcanho chudautu phattrienduan thicongxaydung giamsatthicong quanlyvanhanh diadiemquyhoach giaban hotro thongtinvitri hinhanhvitri tieudetienich1 noidungtienich1 hinhanhtienich1 tieudetienich2 noidungtienich2 hinhanhtienich2 tieudetienich3 noidungtienich3 hinhanhtienich3 tieudetienich4 noidungtienich4 hinhanhtienich4 tieudetienich5 noidungtienich5 hinhanhtienich5 tieudetienich6 noidungtienich6 hinhanhtienich6 tieudetienich7 noidungtienich7 hinhanhtienich7 anhmatbang1 anhmatbang2 anhmatbang3 anhmatbang4 anhmatbang5 hinhanh1 hinhanh2 hinhanh3 hinhanh4 hinhanh5 tieudephoicanh1 hinhanhphoicanh1 tieudephoicanh2 hinhanhphoicanh2 hinhanh6 hinhanh7 hinhanh8 tieudebaogia hinhanhbaogia1 tieudequatang noidungquatang1 noidungquatang2 noidungquatang3 noidungquatang4 hinhanhbaogia2').limit(6).sort({ _id: -1 })
};
const getAllProducts = async () => {
  // return data;
  return productmodel.find({}, 'id tenduan mieuta anhduan tongdientich tongvondautu matdoxaydung quymo tongsocanho dientichcanho chudautu phattrienduan thicongxaydung giamsatthicong quanlyvanhanh diadiemquyhoach giaban hotro thongtinvitri hinhanhvitri tieudetienich1 noidungtienich1 hinhanhtienich1 tieudetienich2 noidungtienich2 hinhanhtienich2 tieudetienich3 noidungtienich3 hinhanhtienich3 tieudetienich4 noidungtienich4 hinhanhtienich4 tieudetienich5 noidungtienich5 hinhanhtienich5 tieudetienich6 noidungtienich6 hinhanhtienich6 tieudetienich7 noidungtienich7 hinhanhtienich7 anhmatbang1 anhmatbang2 anhmatbang3 anhmatbang4 anhmatbang5 hinhanh1 hinhanh2 hinhanh3 hinhanh4 hinhanh5 tieudephoicanh1 hinhanhphoicanh1 tieudephoicanh2 hinhanhphoicanh2 hinhanh6 hinhanh7 hinhanh8 tieudebaogia hinhanhbaogia1 tieudequatang noidungquatang1 noidungquatang2 noidungquatang3 noidungquatang4 hinhanhbaogia2').limit(6)
};
const getProductbyid = async (id) => {

  const product = await productmodel.findOne({ '_id': id })
  return product
}

const insert = async (product) => {
  const p = new productmodel(product);
  await p.save();

}
const update = async (_id, product) => {
  console.log('id: ' + _id)
  console.log('name: ' + product.name)
  // }) 
  await productmodel.updateOne(
    { _id: _id },
    {
      $set:
      {
        tenduan: product.tenduan,
        mieuta: product.mieuta,
        image: product.image,
        tenthuongmai: product.tenthuongmai,
        // thongtinvitri: product.thongtinvitri,
        // thongtinvitri1: product.thongtinvitri1,
        // thongtinvitri2: product.thongtinvitri2,
        // thongtinvitri3: product.thongtinvitri3,
        // vitri: product.vitri,
        // sotang: product.sotang,
        // quymo: product.quymo,
        // dientichtb: product.dientichtb,
        // tongcanho: product.tongcanho,

        // vondautu: product.vondautu,
        // chudautu: product.chudautu,
        // phattrienduan: product.phattrienduan,
        // tuvangiamsat: product.tuvangiamsat,
        // nhathau: product.nhathau,
        // hotrovon: product.hotrovon,
        // tiendoxaydung: product.tiendoxaydung,
        // noidunganhduan: product.noidunganhduan,
        // anhlienquan1: product.anhlienquan1,
        // anhlienquan2: product.anhlienquan2,
        // anhlienquan3: product.anhlienquan3,
        // anhlienquan4: product.anhlienquan4,
        // anhlienquan5: product.anhlienquan5,
        // anhlienquan6: product.anhlienquan6,
        // anhvitri1: product.anhvitri1,
        // anhvitri2: product.anhvitri2,
        // anhvitri3: product.anhvitri3,
        // anhvitri4: product.anhvitri4,
        // noidunganhphaply: product.noidunganhphaply,
        // anhphaply1: product.anhphaply1,
        // noidunganhphaply1: product.noidunganhphaply1,
        // anhphaply2: product.anhphaply2,
        // noidunganhphaply2: product.noidunganhphaply2,
        // anhphaply3: product.anhphaply3,
        // noidunganhphaply3: product.noidunganhphaply3,
        // anhphaply4: product.anhphaply4,
        // noidunganhphaply4: product.noidunganhphaply4,
        // anhphaply5: product.anhphaply5,
        // noidungcanho: product.noidungcanho,
        // anhcanho1: product.anhcanho1,
        // anhcanho2: product.anhcanho2,
        // anhcanho3: product.anhcanho3,
        // anhcanho4: product.anhcanho4,
        // anhcanho5: product.anhcanho5,
        // anhcanho6: product.anhcanho6
      }
    }
  )
}


const deletee = async (id) => {
  await productmodel.findByIdAndDelete(id);

}


module.exports = { getAllProducts, deletee, insert, getProducts, update, getProductbyid, }

