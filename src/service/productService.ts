import { ProductDao } from "../dao/productDao";

export class ProductService{
    private Dao = new ProductDao();

    public postProduct(req,callback){
        let data=req.body;
        this.Dao.postProduct(data,callback);
    }

    public getProduct(req,callback){
        this.Dao.getProduct(callback);
    }

    public updateProduct(req,callback){
        let data=req.body;
        data.uid=req.params.id
        this.Dao.updateProduct(data,callback);
    }

    public deleteProduct(req,callback){
        let data=req.params.id;
        this.Dao.deleteProduct(data,callback);
    }

}