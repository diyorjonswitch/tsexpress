var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connect } from 'mongoose';
function dbConnected() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connect('mongodb://127.0.0.1:27017/test');
            console.log('db is connected');
        }
        catch (err) {
            console.error(err);
            return false;
        }
    });
}
export { dbConnected };
