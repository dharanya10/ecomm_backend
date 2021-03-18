import * as mongoose from 'mongoose';
const Schema =mongoose.Schema;

export const ItemSchema = new Schema({
    name : {
       type: String,
       required:true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    media_url:{
        type:String
    }
})
const ItemModel=mongoose.model('Item',ItemSchema,'Item');
export default ItemModel;

