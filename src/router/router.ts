
import { ProductController } from '../controller/productController';
import { CartController } from '../controller/cartController';
import { DiscountController } from '../controller/discountController';

export class Route{
    productController = new ProductController()
    cartController = new CartController()
    discountController = new DiscountController()

    Routes(app){
        app.route('/product').post(this.productController.postProduct);
        app.route('/product').get(this.productController.getProduct);
        app.route('/product/:id').put(this.productController.updateProduct);
        app.route('/product/:id').delete(this.productController.deleteProduct);

        app.route('/cart').post(this.cartController.addToCart);
        app.route('/cart').get(this.cartController.getCart);
        app.route('/cart/:id').delete(this.cartController.EmptyCart);
        app.route('/cart/:id').put(this.cartController.IncrQuantity);

        app.route('/discount').post(this.discountController.addDiscount);
        app.route('/discount').get(this.discountController.getDiscount);
        app.route('/discount/:id').put(this.discountController.UpdateDiscount);
        app.route('/discount/:id').delete(this.discountController.DeleteDiscount);

    }
}