const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/zhihu'
mongoose.connect(DB_URL)

const zhihuSchema={
    question:{

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
    },
    vczh:{
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


