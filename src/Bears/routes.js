const { blahFuction, createBear, getBears } = require("./BearController");

const bearRoutes = (server) => {
  server.get("/", blahFuction);
  server.post("/api/bear", createBear);
  server.get("/api/bear", getBears);
};

module.exports = bearRoutes;
