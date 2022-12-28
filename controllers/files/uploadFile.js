const fs = require("fs/promises");
const path = require("path");

const helpers = require("../../helpers");

const storeAvatarFileFolder = path.resolve("./public/avatars");

const uploadFile = async (req, res, next) => {
  const { description } = req.body;
  const { path: temporaryName, originalname } = req.file;
  const fileName = path.join(storeAvatarFileFolder, originalname);
  try {
    await fs.rename(temporaryName, fileName);
  } catch (err) {
    await fs.unlink(temporaryName);
    throw helpers.httpError(404, "File uploading failed");
  }
  res.json({
    description,
    message: "File uploaded successfully",
    status: 200,
  });
};

module.exports = uploadFile;
