const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const { fileSizeFormatter } = require("../utils/fileUpload");
const moment = require("moment");
const { sendEmailWithAttachment } = require("../utils/sendEmail");
const cloudinary = require("cloudinary").v2;

const createUser = asyncHandler(async (req, res) => {
  const { name, category } = req.body;

  if (!name || !category) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  let fileData = {};
  
  if (req.file) {
    const uniqueFilename = `${req.business.id}-${Date.now()}-${
      req.file.originalname
    }`;
    try {
      const uploadedFile = await uploadImageToS3(req.file.path, uniqueFilename);
      fileData = {
        fileName: req.file.originalname,
        filePath: uploadedFile.Location,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2),
      };
    } catch (error) {
      console.error("Image upload failed:", error.message);
      fileData = {};
    }
  }

  try {
    const user = await User.create({
      name,
      category,
      image: fileData,
    });
    
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  createUser,
};
