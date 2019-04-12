const model = require('./model')
const name=global.process.env.n;
const Questions = model.getModel(name);
const query  = global.process.env.q;

 
const reg =new RegExp(query + "","gi")
  Questions.find({title:reg},function (err, docs) {
    if (err) return console.error(err);
    console.log(name+"关注的问题数为:"+docs.length)
    docs.forEach(item => {
         console.log(item.title,'\n')
  })
  });
