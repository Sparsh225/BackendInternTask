const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    console.log("createUser called with:", req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findbyId(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
