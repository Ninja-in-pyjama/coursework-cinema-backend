const { Router } = require("express");
const { users } = require("../controllers");

const router = Router();

router.get("/", users.getAll);
router.post("/", users.create);
router.put("/:id", users.update);
router.get("/:id", users.get);
router.delete("/:id", users.delete);
router.post("/login", users.login);

module.exports = router;
