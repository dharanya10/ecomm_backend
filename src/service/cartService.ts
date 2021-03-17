import { CartDao } from "../dao/cartDao";
import { DiscountDao } from "../dao/discountDao";

export class CartService {

    private Dao = new CartDao();
    private DisDao = new DiscountDao()

    public async addToCart(req, callback) {
        let data = req.body;
        let disDetails: any = await this.DisDao.getDiscountbyID(data.productId)
        data.subtotal = Number(data.price) * Number(data.quantity);
        data.subtotal=Math.round(data.subtotal)
        if (disDetails === null) {
            data.discount_percentage = 0
            data.discount_quantity = 0
        }
        else {
            data.discount_percentage = disDetails.percentage
            data.discount_quantity = disDetails.quantity
        }
        if (data.discount_percentage > 0) {
            if (data.quantity % data.discount_quantity == 0) {
                data.discount_cost=Math.round(data.subtotal-(data.subtotal*data.discount_percentage/100))
            }
            else if (data.quantity / data.discount_quantity != 0) {
                let temp:number = (data.quantity - (data.quantity % data.discount_quantity))
                temp = temp * data.price;
                temp = temp - (temp * data.discount_percentage / 100);
                data.discount_cost = (data.quantity % data.discount_quantity) * data.price;
                data.discount_cost=Math.round(data.discount_cost+temp);
            }
        }
        else {
            data.discount_cost = data.subtotal
        }

        this.Dao.addToCart(data, callback);
    }

    public getCart(req, callback) {
        this.Dao.getCart(callback);
    }

    public EmptyCart(req, callback) {
        let data = req.params.id;
        this.Dao.EmptyCart(data, callback);
    }

    public IncrQuantity(req, callback) {

        let data = req.body;
        data.uid = req.params.id
        this.Dao.IncrQuantity(data, callback);

    }

}