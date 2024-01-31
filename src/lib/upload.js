"use server";
import { v2 as cloudinary } from "cloudinary";

export const uploadFiles = async (photo) => {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const arrayBuffer = await photo.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "automobile",
        },
        function (error, result) {
          if (error) {
            reject(error);
            console.error(error)
            throw new Error(error)
            return;
          }
          resolve({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }
      )
      .end(buffer);
  });
};

export const deleteFile = async (id) => {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  return new Promise((resolve, reject) => {
    cloudinary.uploader
   .destroy(
        id,
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      );
  });
}
