var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CategoryModel } from "../category/models/category.model.js";
class CategoryController {
    getCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield CategoryModel.find();
                res.status(200).json({ msg: 'succesfull', data: categories, error: false });
            }
            catch (err) {
                res.status(500).json({ msg: 'error', data: null, error: true });
            }
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield new CategoryModel({
                    name: req.body.name
                }).save();
                res.status(201).json({
                    msg: 'Create !',
                    data: category,
                    error: false
                });
            }
            catch (error) {
                res.status(500).json({ msg: 'error', data: null, error: true });
            }
        });
    }
}
export const categoryController = new CategoryController();
