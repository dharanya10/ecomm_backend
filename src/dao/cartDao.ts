import ItemModel from "../model/productModel";
import CartModel from "../model/cartModel"

export class CartDao{
    private Cart = CartModel

    public addToCart(data,callback){
        let temp=new CartModel(data);
        temp.save().then((result)=>{
            callback(result,null);
        }).catch((error)=>{
            callback(null,error)
        })
    }

    public getCart(callback){
        this.Cart.find().then((result)=>{
            callback(result,null);
        }).catch((error)=>{
            callback(null,error);
        })
    }

    public EmptyCart(data,callback){
        this.Cart.findByIdAndDelete(data).then((result)=>{
            callback(result);
        }).catch((error)=>{
            callback(error);
        })
    }
}