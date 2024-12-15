const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createUser } = require("../controllers/userController");
const { upload } = require("../utils/fileUpload");

router.post("/", upload.single("image"), createUser);

module.exports = router;
