import {Request,Response} from 'express';
import { CartService } from '../service/cartService';

let Service=new CartService()
export class CartController{

    public addToCart(req : Request,res: Response ){
        Service.addToCart(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }

    public getCart(req : Request,res: Response ){
        Service.getCart(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }

    public EmptyCart(req : Request,res: Response ){
        Service.EmptyCart(req, (response,error
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