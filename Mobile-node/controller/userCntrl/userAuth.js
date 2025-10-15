import USER from '../../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const createBranchAdmin = async (req,res,next)=>{
    try {

        const { email , password } = req.body;

        if(!email){
            return res.status(400).json({ message:'Email is required!'})
        }
           if(!password){
            return res.status(400).json({ message:'password is required!'})
        }

        const existEmail = await USER.findOne({ email : email});
       
        if(existEmail){
            return res.status(400).json({ message:'Email already exist!'})
        }

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

       const user =  await USER.create({ 
            email,
            password : hashedPassword,
            role:"BranchAdmin"
        });

          const token = jwt.sign(
      { id: user._id, email: user.email },
        process.env.SECRET_KEY,
      { expiresIn: '7d' } // token valid for 7 days
    );

        return res.status(200).json({ message:'Branch Admin created succssfully',token})

    } catch (error) {
        next(error)
    }
}




export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({ message: 'Email is required!' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Password is required!' });
    }

    // Find user by email
    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email!' });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password!' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: '7d' } // token valid for 7 days
    );

    // Respond with token and user info
    return res.status(200).json({
      message: 'Login successful!',
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

