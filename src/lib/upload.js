"use server";
import { v2 as cloudinary } from "cloudinary";

export const uploadFiles = async (photo) => {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const arrayBuffer = await photo.arrayBuffer();
  var mime = photo.type;
  var encoding = "base64";
  var base64Data = Buffer.from(arrayBuffer).toString(encoding);
  var fileUri = "data:" + mime + ";" + encoding + "," + base64Data;
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        folder: "automobile",
      })
      .then((result) => {
        console.log(result);
        resolve({
          public_id: result.public_id,
          url: result.secure_url,
        });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const deleteFile = async (id) => {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(id, function (error, result) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
};
