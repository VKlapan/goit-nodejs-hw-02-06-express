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

  const user = req.user;
  const newName = user._id + "_" + originalname;
  const fileName = path.join(storeAvatarFileFolder, newName);

  try {
    await helpers.resizeAvatar(temporaryName);

    await fs.rename(temporaryName, fileName);
  } catch (err) {
    await fs.unlink(temporaryName);
    throw helpers.httpError(404, err || "File uploading failed");
  }

  user.avatarUrl = "/avatars/" + newName;
  const response = await serviceDB.avatarUpdateUser(user);

  res.status(200).json({ status: 200, avatarUrl: response.avatarUrl });
};

module.exports = avatarUpdateUser;
