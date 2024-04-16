import { v2 as cloudinary } from "cloudinary";
import { extractPublicId } from "cloudinary-build-url";
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const deleteImgFromCloudinary = async (avatarUrl) => {
  const publicId = extractPublicId(avatarUrl);
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    throw new Error(error.message);
  }
};
