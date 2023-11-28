import "dotenv/config";
import express, { Application } from "express";
import {connect} from 'mongoose'
import { flowerRouter } from "./modules/flowers/router/flower.router.js";
import { categoryRouter } from "./modules/category/router/category.router.js";
import {dbConnected} from './utils/db.connection.js'

async function starter(): Promise<void> {
    try {
        const app: Application = express();
        app.use(express.json());
        await dbConnected()
        await connect('mongodb://127.0.0.1:27017/test');
        console.log('db connection...');
        
        app.use(categoryRouter);
        app.use(flowerRouter)

        app.listen(process.env.APP_PORT, () => {
            console.log('Server is running on port: ' + process.env.APP_PORT);
        })
    } catch (err: any) {
        console.error(err);
        process.exit(-1);
    }
}

starter();