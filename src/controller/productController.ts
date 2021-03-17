import {Request,Response} from 'express';
import { ProductService } from '../service/productService';

let Service
export class ProductController{
    constructor(){
        Service=new ProductService()
    }

   
    public postProduct(req : Request,res: Response ){
        Service.postProduct(req, (response,error
        )=>{
            if(error){
            res.status(401);
            res.send(error.message)
            }
            else{
            res.status(200);
            res.send(response);
            }
        })

    }

    public getProduct(req : Request,res: Response ){
        Service.getProduct(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })
    }

    public updateProduct(req : Request,res: Response ){
        Service.updateProduct(req, (response,error
            )=>{
                if(error){
                res.status(401);
                res.send(error.message)
                }
                res.status(200);
                res.send(response);
            })

    }

    public deleteProduct(req : Request,res: Response ){
        Service.deleteProduct(req, (response,error
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
