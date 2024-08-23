const { createUser } = require("./UserController");

module.exports = (server) => {
  server.get("/", (req, res) => {
    res.status(200).json({ message: "API running" });
  });

  server.post("/users", createUser);
};
