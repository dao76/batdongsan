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
  return productmodel.find({}, 'id tenduan mieuta anhduan giaban tenthuongmai thongtinvitri thongtinvitri1 thongtinvitri2 thongtinvitri3 vitri sotang quymo dientichtb vondautu chudautu tongcanho dientichcanho phattrienduan tuvangiamsat nhathau hotrovon tiendoxaydung noidunganhduan anhlienquan1 anhlienquan2 anhlienquan3 anhlienquan4 anhlienquan5 anhlienquan6 anhvitri1 anhvitri2 anhvitri3 anhvitri4 noidunganhphaply anhphaply1 noidunganhphaply1 anhphaply2 noidunganhphaply2 anhphaply3 noidungphaply3 anhphaply4 noidungphaply4 anhphaply5 noidungcanho anhcanho1 anhcanho2 anhcanho3 anhcanho4 anhcanho5 anhcanho6 ').limit(6).sort({ _id: -1 })
};
const getAllProducts = async () => {
  // return data;
  return productmodel.find({}, 'id tenduan mieuta anhduan giaban tenthuongmai thongtinvitri thongtinvitri1 thongtinvitri2 thongtinvitri3 vitri sotang quymo dientichtb vondautu chudautu tongcanho dientichcanho phattrienduan tuvangiamsat nhathau hotrovon tiendoxaydung noidunganhduan anhlienquan1 anhlienquan2 anhlienquan3 anhlienquan4 anhlienquan5 anhlienquan6 anhvitri1 anhvitri2 anhvitri3 anhvitri4 noidunganhphaply anhphaply1 noidunganhphaply1 anhphaply2 noidunganhphaply2 anhphaply3 noidungphaply3 anhphaply4 noidungphaply4 anhphaply5 noidungcanho anhcanho1 anhcanho2 anhcanho3 anhcanho4 anhcanho5 anhcanho6 ').limit(6)
};
const getProductbyid = async (id) => {

  const product = await productmodel.findOne({ '_id': id })
  return product
}

const insert = async (product) => {
  const p = new productmodel(product);
  await p.save();

}



const deletee = async (id) => {
  await productmodel.findByIdAndDelete(id);

}


module.exports = { getAllProducts, deletee, insert, getProducts, getProductbyid, }

