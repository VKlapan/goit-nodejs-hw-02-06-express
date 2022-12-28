const fs = require("fs/promises");
const path = require("path");

const serviceDB = require("../../services/usersService");
const helpers = require("../../helpers");

const storeAvatarFileFolder = path.resolve("./public/avatars");

// const uploadFile = async (req, res) => {
//   const { description } = req.body;
//   const { path: temporaryName, originalname } = req.file;
//   const fileName = path.join(storeAvatarFileFolder, originalname);
//   try {
//     await fs.rename(temporaryName, fileName);
//   } catch (err) {
//     await fs.unlink(temporaryName);
//     throw helpers.httpError(404, "File uploading failed");
//   }
//   res.json({
//     description,
//     message: "File uploaded successfully",
//     status: 200,
//   });
// };

const avatarUpdateUser = async (req, res) => {
  const { path: temporaryName, originalname } = req.file;
  const fileName = path.join(storeAvatarFileFolder, originalname);

  try {
    await fs.rename(temporaryName, fileName);
  } catch (err) {
    await fs.unlink(temporaryName);
    throw helpers.httpError(404, "File uploading failed");
  }

  const user = req.user;
  user.avatarUrl = fileName;

  const response = await serviceDB.avatarUpdateUser(user);

  res.status(200).json({ status: 200, avatarUrl: response.avatarUrl });
};

module.exports = avatarUpdateUser;
