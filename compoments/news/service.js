
const newmodel = require('./model');
const getnew = async () => {
    // return data;
    return newmodel.find({}, 'id tennew mieuta mieuta1 mieuta2 image').limit(6).sort({ _id: -1 })
};
const getAllNews = async () => {
    // return data;
    return newmodel.find({}, 'id tennew mieuta mieuta1 mieuta2 image').sort({ _id: -1 })
};
const getnewById = async (id) => {
    const news = await newmodel.findOne({ '_id': id })
    return news
}

const insert = async (news) => {
    const p = new newmodel(news);
    await p.save();

}

const deletee = async (id) => {
    await newmodel.findByIdAndDelete(id);
}

module.exports = { getnew, deletee, insert, getAllNews, getnewById }

