import { Schema,model } from 'mongoose';

const URL = new Schema({
	name : {type : String,required : false},
	url : {type : String,required : false},
})
const urlModel = model("urls",URL);
export default urlModel; 