var Jimp = require("jimp");
const httpError = require("./httpError");

const resizeAvatar = async (image) => {
  try {
    const resizedImage = await Jimp.read(image);
    await resizedImage.resize(250, Jimp.AUTO);
    await resizedImage.write(image);
  } catch (error) {
    throw httpError(404, error);
  }
};

module.exports = resizeAvatar;
