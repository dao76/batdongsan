const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const canhoSchema = new Schema({
    id: { type: ObjectId },
    tenduan: { type: String },  // tên dự án
    mieuta: { type: String },   // miêu tả dư án
    anhduan: { type: String },   // miêu tả dư án
    tongdientich: { type: String },
    tongvondautu: { type: String },
    matdoxaydung: { type: String },
    quymo: { type: String },
    tongsocanho: { type: String },
    dientichcanho: { type: String },
    chudautu: { type: String },
    phattrienduan: { type: String },
    thicongxaydung: { type: String },
    giamsatthicong: { type: String },
    quanlyvanhanh: { type: String },
    diadiemquyhoach: { type: String },
    giaban: { type: String },
    hotro: { type: String },


    thongtinvitri: { type: String },
    hinhanhvitri: { type: String },

    tieudetienich1: { type: String },
    noidungtienich1: { type: String },
    hinhanhtienich1: { type: String },
    tieudetienich2: { type: String },
    noidungtienich2: { type: String },
    hinhanhtienich2: { type: String },
    tieudetienich3: { type: String },
    noidungtienich3: { type: String },
    hinhanhtienich3: { type: String },
    tieudetienich4: { type: String },
    noidungtienich4: { type: String },
    hinhanhtienich4: { type: String },
    tieudetienich5: { type: String },
    noidungtienich5: { type: String },
    hinhanhtienich5: { type: String },
    tieudetienich6: { type: String },
    noidungtienich6: { type: String },
    hinhanhtienich6: { type: String },
    tieudetienich7: { type: String },
    noidungtienich7: { type: String },
    hinhanhtienich7: { type: String },



    anhmatbang1: { type: String },
    anhmatbang2: { type: String },
    anhmatbang3: { type: String },
    anhmatbang4: { type: String },
    anhmatbang5: { type: String },

    hinhanh1: { type: String },
    hinhanh2: { type: String },
    hinhanh3: { type: String },
    hinhanh4: { type: String },
    hinhanh5: { type: String },
    tieudephoicanh1: { type: String },
    hinhanhphoicanh1: { type: String },
    tieudephoicanh2: { type: String },
    hinhanhphoicanh2: { type: String },
    hinhanh6: { type: String },
    hinhanh7: { type: String },
    hinhanh8: { type: String },

    tieudebaogia: { type: String },
    hinhanhbaogia1: { type: String },
    tieudequatang: { type: String },
    noidungquatang1: { type: String },
    noidungquatang2: { type: String },
    noidungquatang3: { type: String },
    noidungquatang4: { type: String },
    hinhanhbaogia2: { type: String },


});

module.exports = mongoose.model('canho', canhoSchema);