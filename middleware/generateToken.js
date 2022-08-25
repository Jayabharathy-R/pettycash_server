const jwt=require('jsonwebtoken');

module.exports.generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:'30d'});
}