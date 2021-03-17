import {Request,Response} from 'express';
import { DiscountService } from '../service/discountService';

let Service=new DiscountService()
export class DiscountController{

    public addDiscount(req : Request,res: Response ){
        Service.addDiscount(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }

    public getDiscount(req : Request,res: Response ){
        Service.getDiscount(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }

    public DeleteDiscount(req : Request,res: Response ){
        Service.DeleteDiscount(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }

    public UpdateDiscount(req : Request,res: Response ){
        Service.UpdateDiscount(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }
}
