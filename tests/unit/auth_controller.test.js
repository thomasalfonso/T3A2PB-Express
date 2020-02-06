const AdminModel = require('./../../database/models/admin_model');
const JWTService = require('./../../services/jwt_service');
const AuthController = require('./../../controllers/auth_controller');

describe('Auth Controller', ()=>{
    describe('AdminLogin()',()=>{
        test('calls res.json and login function', async()=>{
            const res = {
                json: jest.fn()
            }
            const req = {
                body: {}
            }
            AdminModel.findOne = jest.fn().mockResolvedValue({verifyPassword: jest.fn().mockResolvedValue(true)});
            JWTService.generateToken = jest.fn().mockResolvedValue(true);
            await AuthController.AdminLogin(req, res);
            expect(res.json).toBeCalled();
            expect(AdminModel.findOne).toBeCalledTimes(1);
            expect(JWTService.generateToken).toBeCalledTimes(1);
        })
    })
})