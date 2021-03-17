import * as mongoose from 'mongoose';
const Schema =mongoose.Schema;

export const DiscountSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
    },
    percentage:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    }

})
const DiscountModel= mongoose.model('Discount', DiscountSchema);
export  default DiscountModel;
