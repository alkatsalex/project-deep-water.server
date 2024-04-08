import fs from "fs/promises";

import { v2 as cloudinary } from "cloudinary";

import User from "../../models/userModel.js";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const updateAvatar = async (req, res) => {
  const { id } = res.user;
  const { path } = req.file;
  console.log(path);

  const { url: avatarURL } = await cloudinary.uploader.upload(req.file.path, {
    folder: "avatars",
    width: 200,
    height: 200,
  });
  await fs.unlink(path);

  await User.findByIdAndUpdate(id, { avatarURL });

  res.status(200).send({ avatarURL });
};

export default updateAvatar;
