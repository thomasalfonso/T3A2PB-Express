const PaymentController = require('../../controllers/payment_controller');

describe('Payment Controller', ()=>{
    describe('Checkout()',()=>{
        test('calls res.json', async()=>{
            const res = {
                json: jest.fn()
            }
            const req = {
                body: {
                    tokenId: '',
                    description: '',
                    total: ''
                }
            }
            await PaymentController.Checkout(req, res);
            expect(res.json).toBeCalled();
        })
    })
})