import * as mongoose from 'mongoose';
const Schema =mongoose.Schema;

export const CartSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
    },
    name:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    }

})
const CartModel= mongoose.model('cart', CartSchema);
export  default CartModel;
