import { DiscountDao } from "../dao/discountDao";

export class DiscountService{

    private Dao = new DiscountDao();

    public addDiscount(req,callback){
        let data=req.body;
        this.Dao.addDiscount(data,callback);
    }
    
    public getDiscount(req,callback){
        this.Dao.getDiscount(callback);
    }

    public DeleteDiscount(req,callback){
        let data=req.params.id;
        this.Dao.DeleteDiscount(data,callback);
    }
    public UpdateDiscount(req,callback){
        
            let data=req.body;
            data.uid=req.params.id
            this.Dao.UpdateDiscount(data,callback);
        
    }
}
