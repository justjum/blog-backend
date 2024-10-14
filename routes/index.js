var express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const cors = require("cors");

function hello(req, res, next) {
  console.log("hello");
  next();
}
/* GET home page. */
router.get("/", indexController.indexGet);

router.get("/test", indexController.test);

router.post("/", indexController.indexSignup);

router.post("/login", hello, indexController.loginPost);

module.exports = router;
