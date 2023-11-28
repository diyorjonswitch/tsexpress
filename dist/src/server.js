var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "dotenv/config";
import express from "express";
import { connect } from 'mongoose';
import { flowerRouter } from "./modules/flowers/router/flower.router.js";
import { categoryRouter } from "./modules/category/router/category.router.js";
import { dbConnected } from './utils/db.connection.js';
function starter() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = express();
            app.use(express.json());
            yield dbConnected();
            yield connect('mongodb://127.0.0.1:27017/test');
            console.log('db connection...');
            app.use(categoryRouter);
            app.use(flowerRouter);
            app.listen(process.env.APP_PORT, () => {
                console.log('Server is running on port: ' + process.env.APP_PORT);
            });
        }
        catch (err) {
            console.error(err);
            process.exit(-1);
        }
    });
}
starter();
