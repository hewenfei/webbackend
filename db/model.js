/**
 * Created by Administrator on 2017/7/3.
 */
var mongoose=require('mongoose');
var  Schema=mongoose.Schema;

var  movie=new Schema({
    name:{type:String,required:true},
    src:String,
    introduction:String,
	introvalue:Number,
    lastupdate:{type:Date,default:Date.now}
});
module.exports=mongoose.model('movie',movie);