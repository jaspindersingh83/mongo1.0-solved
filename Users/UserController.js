const User = require("./UserModel");

const createUser = async (req, res) => {
  const userInfo = req.body;
  try {
    const user = await User.create(userInfo);
    res.status(202).json({ user });
  } catch (error) {
    res.status(202).json({
      error,
    });
  }
};

module.exports = {
  createUser,
};
