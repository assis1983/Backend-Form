"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustormerControler = void 0;
const createdCustomerService_1 = require("../services/createdCustomerService");
class createCustormerControler {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, fone, subject, message } = request.body;
            const customerServie = new createdCustomerService_1.createdCustomerService();
            const customer = yield customerServie.execute({ name, email, fone, subject, message });
            reply.send(customer);
        });
    }
}
exports.createCustormerControler = createCustormerControler;
