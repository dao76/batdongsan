const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const videoSchema = new Schema({
    id: { type: ObjectId },
    image: { type: String },
    tieude: { type: String },
    linkvideo: { type: String },


});

module.exports = mongoose.model('video', videoSchema);