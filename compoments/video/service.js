
const videomodel = require('./modal');
const getVideo = async () => {
    // return data;
    return videomodel.find({}, 'id image tieude linkvideo').limit(6).sort({ _id: -1 })
};
const getAllVideos = async () => {
    // return data;
    return videomodel.find({}, 'id image tieude linkvideo').sort({ _id: -1 })
};
const getVideoById = async (id) => {
    const video = await videomodel.findOne({ '_id': id })
    return video
}

const insert = async (video) => {
    const p = new videomodel(video);
    await p.save();

}

const deletee = async (id) => {
    await videomodel.findByIdAndDelete(id);
}

module.exports = { getVideo, deletee, insert, getAllVideos, getVideoById, }

