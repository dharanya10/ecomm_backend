import { CartDao } from "../dao/cartDao";

export class CartService{

    private Dao = new CartDao();

    public addToCart(req,callback){
        let data=req.body;
        this.Dao.addToCart(data,callback);
    }
    
    public getCart(req,callback){
        this.Dao.getCart(callback);
    }

    public EmptyCart(req,callback){
        let data=req.params.id;
        this.Dao.EmptyCart(data,callback);
    }
}