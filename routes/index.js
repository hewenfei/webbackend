var express = require('express');
var router = express.Router();
var model=require('../db/model');
/* GET home page. */
router.get('/', function(req, res, next) {
//    model.find({})
//        .sort({ lastupdate : -1})
//        .then(movies => {
//        res.json(movies)
//})
//    .catch(err => {
//    res.json(err)
//})
    model.find({},function(err,data){
        if(err){
            return next(err)
    }
        else{
        res.json(data)
    }
    })
	
});
//添加电影
router.post('/',function(req,res,err){
    model.create({
        name:req.body.name,
        src:req.body.src||null,
        introduction:req.body.introduction||null,
		introvalue:req.body.introvalue||null
		},function(err,data){
			if(err){
				res.json(err)}
			else {
				res.json(data)
			}
    })
});
//删除电影
router.post('/delete',function(req,res,err){
	  model.remove({
        _id : req.body.id
        },function(err,data){
			if(err){
				res.json(err);
			}
			else{
				res.json(data)
			}
		})
       
});
//更新电影
router.post('/update',function(req,res,err){
	var oldValue={
		_id:req.body.id
		};
	var newValue={
		name:req.body.name,
		introduction:req.body.introduction,
		src:req.body.src,
		introvalue:Number(req.body.introvalue),
		lastupdate:Date.now()
	}
	model.update(oldValue,{$set:newValue},function(err,data){
		if(err){
			res.json(err)
		}else{
			res.json(data)
		}
	})
})

module.exports = router;
