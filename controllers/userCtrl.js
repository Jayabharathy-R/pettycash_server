const expressAsyncHandler = require("express-async-handler");
const { Error } = require("mongoose");
const { generateToken } = require("../middleware/generateToken");
const User = require("../model/user");




module.exports.createUser = expressAsyncHandler(async (req, res) => {
  const { email, firstname, lastname, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already Exists")
  try {

    const user = await User.create({ email, firstname, lastname, password });
    res.status(200).json(user);
  }
  catch (err) {
    res.json(err);
  }
})

module.exports.getUser = expressAsyncHandler(async (req, res) => {
  try {

    const user = await User.find({});
    res.status(200).json(user);
  }
  catch (err) {
    res.json(err);
  }
})
module.exports.loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req?.body;


    const userFound = await User.findOne({ email });
    if (await userFound?.isPasswordMatch(password)) {
      res.json({
        _id: userFound._id,
        email: userFound.email,
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound._id)
      });
    }
    else{
    res.status(401);
    throw new Error("invalid user/password")
    }

})