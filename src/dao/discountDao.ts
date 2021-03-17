import ItemModel from "../model/productModel";
import DiscountModel from "../model/discountModel"

export class DiscountDao{
    private Dis = DiscountModel

    public addDiscount(data,callback){
        let temp=new DiscountModel(data);
        temp.save().then((result)=>{
            callback(result,null);
        }).catch((error)=>{
            callback(null,error)
        })
    }

    public getDiscount(callback){
        this.Dis.find().then((result)=>{
            callback(result,null);
        }).catch((error)=>{
            callback(null,error);
        })
    }

    public DeleteDiscount(data,callback){
        this.Dis.findByIdAndDelete(data).then((result)=>{
            callback(result);
        }).catch((error)=>{
            callback(error);
        })
    }

    public UpdateDiscount(data,callback){
        this.Dis.updateOne({_id:data.uid},data).then((result)=>{
            callback(result);
        }).catch((error)=>{
            callback(error);
        })
        
    }
    public getDiscountbyID(uid){
        return this.Dis.findOne({productId:uid}).then((result)=>{
             return result
          }).catch((error)=>{
              console.log(error)
      })
    }

}
