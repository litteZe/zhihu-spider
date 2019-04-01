const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/zhihu'
mongoose.connect(DB_URL)

const zhihuSchema={
    question:{
        // "author": {
        //     "avatar_url_template": String,
        //     "badge": [],
        //     "type": String,
        //     "name": String,
        //     "url": String,
        //     "gender": Number,
        //     "user_type": String,
        //     "is_advertiser": Boolean,
        //     "avatar_url": String,
        //     "is_org": Boolean,
        //     "headline": String,
        //     "url_token": String,
        //     "id": String
        // },
        "author":mongoose.SchemaTypes.Mixed,
        "url": String,
        "created": Number,
        "answer_count": Number,
        "updated_time": Number,
        "question_type": String,
        "follower_count": Number,
        "title": String,
        "type": String,
        "id": Number
    }
}
for (let m in zhihuSchema) {
  mongoose.model(m, new mongoose.Schema(zhihuSchema[m]))
}

module.exports = {
	getModel: function (name) {
		return mongoose.model(name)
	}
}


