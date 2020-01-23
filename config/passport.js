const passport = require('passport');
const AdminModel = require('../database/models/admin_model');
const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
    },
    async (jwt_payload, done) => {
        try{
            const admin = await AdminModel.findById(jwt_payload.sub);
            if (!admin) {
                return done(null, false);
            }
            return done(null, admin);           
        } catch (error) {
            return done(error);
        }
    }
))


module.exports = {passport}