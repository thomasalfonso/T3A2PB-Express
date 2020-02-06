const ProductModel =  require('./../../database/models/product_model');
const OrderModel = require('./../../database/models/order_model');
const AdminController = require('./../../controllers/admin_controller');

describe('Admin Controller', ()=>{
    describe('ProductCreate()',()=>{
        test('calls res.json and product create', async()=>{
            const res = {
                json: jest.fn()
            }
            const req = {
                body: {}
            }
            ProductModel.create = jest.fn().mockResolvedValue(req.body);
            await AdminController.ProductCreate(req, res);
            expect(res.json).toBeCalled();
            expect(ProductModel.create).toBeCalledTimes(1);
        })
    })
    describe('ProductUpdate()',()=>{
        test('calls res.json and product update', async()=>{
            const res = {
                json: jest.fn()
            }
            const req = {
                body: {}
            }
            ProductModel.findByIdAndUpdate = jest.fn().mockResolvedValue(req.body);
            await AdminController.ProductUpdate(req, res);
            expect(res.json).toBeCalled();
            expect(ProductModel.findByIdAndUpdate).toBeCalledTimes(1);
        })
    })
    describe('ProductDelete()',()=>{
        test('calls res.json and product delete', async()=>{
            const res = {
                json: jest.fn()
            }
            const req = {
                params: {} 
            }           
            const id = []
            ProductModel.findByIdAndDelete = jest.fn().mockResolvedValue(id);
            ProductModel.find = jest.fn().mockResolvedValue();
            await AdminController.ProductDelete(req, res);
            expect(res.json).toBeCalled();
            expect(ProductModel.findByIdAndDelete).toBeCalledTimes(1);
            expect(ProductModel.find).toBeCalledTimes(1);
        })
    })
    describe('OrderGet()',()=>{
        test('calls res.json and order find', async()=>{
            const res = {
                json: jest.fn()
            }      
            OrderModel.find = jest.fn().mockResolvedValue();
            await AdminController.OrderGet(null, res);
            expect(res.json).toBeCalled();
            expect(OrderModel.find).toBeCalledTimes(1);
        })
    })
    describe('OrderPut()',()=>{
        test('calls res.json and order update', async()=>{
            const res = {
                json: jest.fn()
            }   
            const req = {
                body: {}
            }   
            OrderModel.findByIdAndUpdate = jest.fn().mockResolvedValue();
            OrderModel.find = jest.fn().mockResolvedValue();
            await AdminController.OrderPut(req, res);
            expect(res.json).toBeCalled();
            expect(OrderModel.findByIdAndUpdate).toBeCalledTimes(1);
            expect(OrderModel.find).toBeCalledTimes(1);
        })
    })
    describe('ImageUpload()',()=>{
        test('calls res.json and product update', async()=>{
            const res = {
                json: jest.fn()
            }   
            const req = {
                body: {},
                file: {}
            }   
            ProductModel.findByIdAndUpdate = jest.fn().mockResolvedValue();
            await AdminController.ImageUpload(req, res);
            expect(res.json).toBeCalled();
            expect(ProductModel.findByIdAndUpdate).toBeCalledTimes(1);
        })
    })
})