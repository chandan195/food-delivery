import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user does not exist..." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }
    const token =jwt.sign({id: user._id},process.env.JWT_SECRET)
    // const token = createToken(user._id);
    res.json({ success: true, token: token });
    // console.log("token",token);
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Error " });
  }
};

// const createToken = async (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET);
// };

//register user

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking is user already registered
    const exist = await userModel.findOne({ email: email });
    if (exist) {
      return res.json({ success: false, message: "user already registered" });
    }
    //validating email format , strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    // const token = createToken(user._id);
    const token =jwt.sign({id: user._id},process.env.JWT_SECRET)
    res.json({success:true, token:token });
    // console.log("token key", token);
   
  } catch (error) {
    // console.log(error);
    res.json({ success: false, massage: "error" });
  }
};

export { loginUser, registerUser };
