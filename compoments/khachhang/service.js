var khachModal = require('./model')

exports.insert = async (khach) => {
    const p = new khachModal(khach);
    return await p.save();
}
exports.getAll = async () => {
    // return data;
    return khachModal.find({}, 'id email phone name').sort({ _id: -1 })
};