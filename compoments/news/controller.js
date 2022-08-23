const newService = require('../news/service');



const getNews = async () => {
    try {
        let news = await newService.getnew();
        news = news.map((item, index) => {
            item = {
                _id: item._id,
                tennew: item.tennew,
                mieuta: item.mieuta,
                mieuta1: item.mieuta1,
                mieuta2: item.mieuta2,
                image: item.image,
                index: index + 1
            }
            return item;
        })

        return news;
    } catch (error) {
        return []
    }
}
const getAllnew = async () => {
    try {
        let news = await newService.getAllNews();
        news = news.map((item, index) => {
            item = {
                _id: item._id,
                tennew: item.tennew,
                mieuta: item.mieuta,
                mieuta1: item.mieuta1,
                mieuta2: item.mieuta2,
                image: item.image,
                index: index + 1
            }
            return item;
        })

        return news;
    } catch (error) {
        return []
    }
}
const getNewsByid = async (id) => {
    try {
        let news = await newService.getnewById(id);
        news = {
            _id: news._id,
            tennew: news.tennew,
            mieuta: news.mieuta,
            mieuta1: news.mieuta1,
            mieuta2: news.mieuta2,
            image: news.image,
        }
        return news;
    } catch (error) {
        return {};
    }

}


const insert = async (news) => {
    await newService.insert(news);

}

const deleteeee = async (id) => {
    try {
        await newService.deletee(id);

    } catch (error) {

    }
}
module.exports = { getNews, deleteeee, insert, getNewsByid, getAllnew }
