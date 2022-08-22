const videotService = require('../video/service');



const getVideos = async () => {
    try {
        let videos = await videotService.getVideo();
        videos = videos.map((item, index) => {
            item = {
                _id: item._id,
                image: item.image,
                tieude: item.tieude,
                linkvideo: item.linkvideo,
                index: index + 1
            }
            return item;
        })

        return videos;
    } catch (error) {
        return []
    }
}
const getAll = async () => {
    try {
        let videos = await videotService.getAllVideos();
        videos = videos.map((item, index) => {
            item = {
                _id: item._id,
                image: item.image,
                tieude: item.tieude,
                linkvideo: item.linkvideo,
                index: index + 1
            }
            return item;
        })

        return videos;
    } catch (error) {
        return []
    }
}
const getVideoByid = async (id) => {
    try {
        let video = await videotService.getVideoById(id);
        video = {
            _id: video._id,
            image: video.image,
            tieude: video.tieude,
            linkvideo: video.linkvideo,
        }
        return video;
    } catch (error) {
        return {};
    }

}


const insert = async (video) => {
    await videotService.insert(video);

}

const deleteeee = async (id) => {
    try {
        await videotService.deletee(id);

    } catch (error) {

    }
}
module.exports = { getVideos, deleteeee, insert, getVideoByid, getAll }
