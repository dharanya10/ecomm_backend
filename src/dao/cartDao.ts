import CartModel from "../model/cartModel"

export class CartDao {
    private Cart = CartModel

    public addToCart(result, callback) {
        let temp = new CartModel(result);
        temp.save().then((result) => {
            callback(result, null);
        }).catch((error) => {
            callback(null, error)
        })
    }

    public getCart(callback) {
        this.Cart.find().then((result) => {
            let length: number = result.length
            let data: any = {}
            data.items = result
            let totalCost:number = 0;
            let totalAmount:number = 0;
            for (let i = 0; i < length; i++) {
                totalCost = totalCost + data.items[i].subtotal;
                totalAmount = totalAmount + data.items[i].discount_cost;
            }
            data.totalCost = totalCost;
            if (totalAmount > 150) {
                totalAmount = totalAmount - 20;
            }
            data.totalAmount = totalAmount;
            callback(data)
        }).catch((error) => {
            callback(null, error);
        })
    }

    public EmptyCart(result, callback) {
        this.Cart.deleteMany().then((result)=>{
            callback(result);
        }).catch((error) => {
            callback(error);
        })
    }

    public IncrQuantity(data, callback) {
        this.Cart.updateOne({ _id: data.uid }, data).then((result) => {
            callback(result);
        }).catch((error) => {
            callback(error);
        })

    }

}