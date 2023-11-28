var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Types } from "mongoose";
import { CategoryModel } from "../../category/models/category.model.js";
import { FlowerModel } from "../models/flower.model.js";
class flowerController {
    getFlower(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const flowers = yield FlowerModel.find();
                res.status(200).json({ msg: 'Ok', data: null, error: false });
            }
            catch (err) {
                res.status(500).json({ msg: err.message, data: null, error: true });
            }
        });
    }
    createFlower(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const category = yield CategoryModel.findOne({ _id: id });
                if (!category) {
                    res.status(404).json({ msg: 'Not found', data: null, error: true });
                    return;
                }
                const flower = yield new FlowerModel({
                    name: req.body.name,
                    price: req.body.price,
                    image: '4545',
                    category: new Types.ObjectId(category._id)
                }).save();
                (_a = category.flowers) === null || _a === void 0 ? void 0 : _a.push(flower);
                yield category.save();
                res.status(201).json({ msg: 'Created', data: flower, error: false });
            }
            catch (err) {
                res.status(500).json({ msg: err.message, data: null, error: true });
            }
        });
    }
}
export const FlowerController = new flowerController();
