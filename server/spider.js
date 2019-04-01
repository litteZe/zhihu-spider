const model = require('./model')
const Question = model.getModel('question')
const axios = require('axios')
async function spider() {
    for (let n = 0, isEnd = false; isEnd == false; n = n + 20) {
        console.log('进入循环', n)
        let res = await request(n);
        // console.log(res)
        // save(res)
        let { data, paging } = res.data;
        isEnd = paging.is_end;
        console.log(isEnd)
        for (let j = 0; j < data.length; j++) {
            const item = data[j];
            const questionInstance = new Question({ ...item });
            await questionInstance.save();
            console.log('插入成功')
        }
        
            await new Promise(rsv => {
                setTimeout(rsv, 2000)
            })
        }
}
    

function request(num) {

    return axios.get(`https://www.zhihu.com/api/v4/members/gao-ze-rong-69/following-questions?include=data%5B*%5D.created%2Canswer_count%2Cfollower_count%2Cauthor&offset=${num}&limit=20`)
        // .then((res) => {
        //     let { data, paging } = res.data;
        //     isEnd = paging.is_end;
        //     console.log(isEnd)
        //     data.forEach(item => {
        //         const questionInstance = new Question({ ...item });
        //         questionInstance.save(function (err, doc) {
        //             if (err) return console.error(err);
        //             console.log('插入成功')
        //         });
        //     });


        // })
        .catch((err) => { console.log(err.message) });
    // let tm1=Date.now() 

    // let tm2=Date.now()
    // console.log(tm2-tm1)
}

// for (let n = 0;n<60; n=n+20) {
//     console.log('进入循环',n)

//    request(n)
// }
spider()