
import { ProductController } from '../controller/productController';
import { CartController } from '../controller/cartController';

export class Route{
    productController = new ProductController()
    cartController = new CartController()
    Routes(app){
        app.route('/').post(this.productController.postProduct);
        app.route('/').get(this.productController.getProduct);
        app.route('/:id').put(this.productController.updateProduct);
        app.route('/:id').delete(this.productController.deleteProduct);

        app.route('/cart').post(this.cartController.addToCart);
        app.route('/cart').get(this.cartController.getCart);
        app.route('/cart/:id').delete(this.cartController.EmptyCart);
    }
}