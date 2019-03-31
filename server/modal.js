const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/zhihu'
mongoose.connect(DB_URL)

const models = {
    user: {
			'user': { type: String, require: true },
			'pwd': { type: String, require: true },
			'type': { type: String, require: true },
			'avatar': { type: String },
			'desc': { type: String },
			'title': { type: String },
			'company': { type: String },
			'money': { type: String }
    },
    chat: {
			'chatid': { type: String, require: true },
			'from': { type: String, require: true },
			'to': { type: String, require: true },
			'content': { type: String, require: true, default: '' },
			'read': { type: Boolean, default: false },
			'create_time': { type: Number, default: new Date().getTime() }
		}
}
const zhihuSchema={
    question:{
        "author": {
            "avatar_url_template": String,
            "badge": [],
            "type": String,
            "name": String,
            "url": String,
            "gender": Number,
            "user_type": String,
            "is_advertiser": Boolean,
            "avatar_url": String,
            "is_org": Boolean,
            "headline": String,
            "url_token": String,
            "id": String
        },
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


