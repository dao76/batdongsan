const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    tenduan: { type: String },  // tên dự án
    mieuta: { type: String },   // miêu tả dư án
    image: { type: String },   // hình ảnh nổi bật dự án
    gia: { type: String },
    tenthuongmai: { type: String },   // tên đầy đủ dự án
    thongtinvitri: { type: String },
    thongtinvitri1: { type: String },
    thongtinvitri2: { type: String },
    thongtinvitri3: { type: String },  // tên đầy đủ dự án
    vitri: { type: String },   // vị trí dự án
    sotang: { type: String },   // số tầng 
    quymo: { type: String },   // quy mô
    dientichtb: { type: String },   // quy mô
    tongcanho: { type: String },   // quy mô
    dientichcanho: { type: String },   // quy mô

    vondautu: { type: String },   // quy mô
    chudautu: { type: String },  // chủ đầu tư
    phattrienduan: { type: String },   // nhà phát triển dự án
    tuvangiamsat: { type: String },   // tư vấn giám sát
    nhathau: { type: String },   // nhà thầu
    hotrovon: { type: String },  // ngân hàng hổ trợ vốn
    tiendoxaydung: { type: String },  // tiến độ xây dự 
    noidunganhduan: { type: String },  // tiến độ xây dự 
    anhlienquan1: { type: String },
    anhlienquan2: { type: String },
    anhlienquan3: { type: String },
    anhlienquan4: { type: String },
    anhlienquan5: { type: String },
    anhlienquan6: { type: String },
    anhvitri1: { type: String },
    anhvitri2: { type: String },
    anhvitri3: { type: String },
    anhvitri4: { type: String },
    noidunganhphaply: { type: String },
    anhphaply1: { type: String },
    noidunganhphaply1: { type: String },
    anhphaply2: { type: String },
    noidunganhphaply2: { type: String },
    anhphaply3: { type: String },
    noidunganhphaply3: { type: String },
    anhphaply4: { type: String },
    noidunganhphaply4: { type: String },
    anhphaply5: { type: String },
    noidungcanho: { type: String },
    anhcanho1: { type: String },
    anhcanho2: { type: String },
    anhcanho3: { type: String },
    anhcanho4: { type: String },
    anhcanho5: { type: String },
    anhcanho6: { type: String },


});

module.exports = mongoose.model('product', productSchema);