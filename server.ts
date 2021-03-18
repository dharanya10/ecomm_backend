import express = require('express');
import * as bodyparser from 'body-parser';
import cors = require('cors')
import mongoose = require('mongoose');
import { Route } from './src/router/router';
 
const PORT=3000;
export default class App {

    public app : express.Application = express();
    public router: Route = new Route();
    public mongourl : string = "mongodb://localhost:27018";

constructor(){
    this.inzilizesuse();
    this.mongosetup()
    this.router.Routes(this.app);
}
inzilizesuse(){
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({extented: false}))
    this.app.use(cors({ credentials: true,origins : true}))
}

mongosetup(){
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.mongourl,{ useNewUrlParser : true,useUnifiedTopology : true})
}
}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
})
