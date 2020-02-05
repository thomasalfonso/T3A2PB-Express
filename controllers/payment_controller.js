const OrderModel = require('../database/models/order_model');
const Stripe = require('stripe')('sk_test_VWeSFEavpdGwJn64EtFWbJL100krkSzPeM')
const UniqueKey = require('uuid/v4');

async function Checkout(req,res){
    let status, error;
    try {
        const {product, token} = req.body;
        const customer = await Stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const charge = await Stripe.charges.create({
            amount: product.price * 100,
            currency: 'aud',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased ${
                product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        }, {idempotencyKey:UniqueKey()});
        if(charge.status!=='succeeded' && charge.paid!==true){throw new Error('Charge did not succeed')};
        OrderModel.create({
            email: charge.receipt_email,
            name: charge.source.name,
            line1: charge.source.address_line1,
            line2: charge.source.address_line2,
            city:charge.source.address_city,
            postcode: charge.source.address_zip,
            state: charge.source.address_state,
            country: charge.source.address_country,
            description: charge.description,
            amount: charge.amount,
            receipt_url: charge.receipt_url,
        });
        status='success';
    } catch (err){
        error = err;
        status='fail';
    }
    res.json({error, status})
}

module.exports = {
    Checkout
}

