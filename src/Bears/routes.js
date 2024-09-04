const {
  blahFuction,
  createBear,
  getBears,
  getBearById,
  deleteBearById,
  updateBearById,
} = require("./BearController");

const bearRoutes = (server) => {
  server.get("/", blahFuction);
  server.post("/api/bear", createBear);
  server.get("/api/bear", getBears);
  server.get("/api/bear/:id", getBearById);
  server.delete("/api/bear/:id", deleteBearById);
  server.put("/api/bear/:id", updateBearById);
};

module.exports = bearRoutes;
