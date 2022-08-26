const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/user");


module.exports.authMiddleware = expressAsyncHandler(async (req, res,next) => {
    let token;
    if (req.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers?.authorization?.split(" ")[1];
        try {
            if (token) {
                const decodedUser = jwt.verify(token, process.env.JWT_KEY);
                const user = await User.findById(decodedUser?.id);
                req.user = user;
                next();
            }
        }
        catch {
            throw new Error("Not Authorized token/Expired")           
        }
    } else {
      throw new Error("No token attached to the header")
    }
})