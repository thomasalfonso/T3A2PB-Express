const UserController = require('../../controllers/user_controller');
const ProductModel = require('../../database/models/product_model');
const s3 = require('../../config/aws');

describe('User Controller', ()=>{
    describe('ProductIndex()',()=>{
        test('calls res.json and product find', async()=>{
            const res = {
                json: jest.fn()
            }
            ProductModel.find = jest.fn().mockResolvedValue()
            await UserController.ProductIndex(null, res);
            expect(res.json).toBeCalled();
        })
    })
    describe('ImageShow()',()=>{
        test('calls res.json', async()=>{
            const res = {
                json: jest.fn()
            }
            const req = {
                params: {}
            }
            s3.getObject = jest.fn().mockResolvedValue({createReadStream: jest.fn().mockResolvedValue({pipe: jest.fn().mockResolvedValue() })})
            await UserController.ImageShow(req, res)
            expect(res.json).toBeCalled();
        })
    })
})