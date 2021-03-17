import ItemModel from "../model/productModel";
export class ProductDao{
    private Item = ItemModel;

    public postProduct(data,callback){
        let temp=new ItemModel(data);
        temp.save().then((result)=>{
            callback(result,null);
        }).catch((error)=>{
            callback(null,error)
        })
    }

    public getProduct(callback){
        this.Item.find().then((result)=>{
            callback(result,null);
        }).catch((error)=>{
            callback(null,error);
        })
    }

    public getProductbyID(uid,callback){
      return this.Item.findById(uid).then((result)=>{
           return result
        }).catch((error)=>{
            callback(error);
        })
    }

    public updateProduct(data,callback){
        this.Item.findOneAndUpdate({_id:data.uid},data,{ new: true }).then((result)=>{
            callback(result);
        }).catch((error)=>{
            callback(error);
        })
        
    }

    public deleteProduct(data,callback){
        this.Item.findByIdAndDelete(data).then((result)=>{
            callback(result);
        }).catch((error)=>{
            callback(error);
        })
    }

}