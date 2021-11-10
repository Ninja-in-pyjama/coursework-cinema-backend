const { Router } = require("express");
const { session } = require("../controllers");

const router = Router();

router.get("/", session.getAll);
router.post("/", session.create);
router.put("/:id", session.update);
router.get("/:id", session.get);
router.delete("/:id", session.delete);

module.exports = router;
