import { Request, Response } from "express";
import { CategoryModel } from "../category/models/category.model.js";

class CategoryController {
    async getCategory(req: Request, res: Response): Promise<void>{
        try {
            const categories = await CategoryModel.find();
            res.status(200).json({msg: 'succesfull', data: categories, error: false})
        } catch (err: any) {
            res.status(500).json({msg: 'error', data: null, error: true})
        }
    }
    async createCategory(req: Request, res: Response): Promise<void>{
        try {
            const category = await new CategoryModel({
                name: req.body.name
            }).save();
            res.status(201).json({
                msg: 'Create !',
                data: category,
                error: false
            })
        } catch (error) {
            res.status(500).json({msg: 'error', data: null, error: true})
        }
    }
}

export const categoryController = new CategoryController();