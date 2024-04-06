import {User} from "../model/user.js";

const signupController = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const adminRecord = await User.create({
      username,
      email,
      password,
      role: "admin",
    });

    console.log(adminRecord);
    const responseData = {
      status: "Admin Account successfully created",
      status_code: 200,
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error("Error creating admin user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const loginController = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const passwordMatch = await user.comparePassword(password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
      const token = await user.generateJWT();
      res.json({ status: 'Login successful', status_code: 200, token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export {signupController, loginController};
