import { Request, Response } from "express";
import { Types } from "mongoose";
import { CategoryModel } from "../../category/models/category.model.js";
import { FlowerModel } from "../models/flower.model.js";

class flowerController {
    async getFlower(req: Request, res: Response): Promise<void> {
        try {
            const flowers = await FlowerModel.find()
            res.status(200).json({msg: 'Ok', data: null, error: false});
        } catch (err: any) {
            res.status(500).json({msg: err.message, data: null, error: true});
        }
    }
    async createFlower(req: Request, res: Response): Promise<void> {
        try {
            const {id} = req.params;
            const category = await CategoryModel.findOne({_id: id});
            if(!category){
                res.status(404).json({msg: 'Not found', data: null, error: true});
                return;
            }
            const flower = await new FlowerModel({
                name: req.body.name,
                price: req.body.price,
                image: '4545',
                category: new Types.ObjectId(category._id)
            }).save();

            category.flowers?.push(flower)
            await category.save();

            res.status(201).json({msg: 'Created', data: flower, error: false});

        } catch (err: any) {
            res.status(500).json({msg: err.message, data: null, error: true});
        }
    }
}

export const FlowerController = new flowerController();