"use server";

import { revalidatePath } from "next/cache";
import Category from "../Models/Category";
import Product from "../Models/Product";
import { deleteFile, uploadFiles } from "../upload";
import { connectToDb } from "../db";
import SubCategory from "../Models/SubCategory";
import WebData from "../Models/WebData";
import { redirect } from "next/navigation";

export const addProduct = async (formData) => {
  const allPhotos = Array.from(formData.entries())
    .filter(([name]) => name === "photos")
    .flatMap(([, files]) => files);

  const { name, category, subcategory, date, description } =
    Object.fromEntries(formData);

  const urls = [];

  for (const photo of allPhotos) {
    const path = await uploadFiles(photo);
    urls.push(path);
  }
  // try {
  const product = await Product.create({
    name,
    category,
    subcategory,
    manufactureDate: date,
    description,
    photos: urls,
  });

  if (product) {
    revalidatePath("/", "layout");
    redirect("/admin/products");
  }
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const addCategory = async (formData) => {
  const { name } = Object.fromEntries(formData);
  // try {
  connectToDb();
  const category = await Category.create({
    name,
  });
  if (category) {
    revalidatePath("/", "layout");
    redirect("/admin/categories");
  }
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const addSubCategory = async (formData) => {
  const { category, name } = Object.fromEntries(formData);
  // try {
  connectToDb();
  await SubCategory.create({
    name,
    category,
  });
  revalidatePath("/", "layout");
  redirect("/admin/subcategories");
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const addAbout = async (formData) => {
  const { photo, title, short_description, full_description } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const path = await uploadFiles(photo);
    const about = await WebData.create({
      about: {
        photo: path,
        title,
        short_description,
        full_description,
      },
    });
    if (about) {
      revalidatePath("/", "layout");
      return true;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const updateAbout = async (id, formData) => {
  const { photo, title, short_description, full_description } =
    Object.fromEntries(formData);

  // try {
  connectToDb();
  const webData = await WebData.findById(id);
  if (!webData) {
    console.log("About not found");
    return false;
  }

  let newPath;
  if (photo && photo.size > 0) {
    newPath = await uploadFiles(photo);

    if (newPath && webData.about.photo && webData.about.photo.public_id) {
      await deleteFile(webData.about.photo.public_id);
    }
  }

  webData.about.photo = newPath || webData.about.photo;
  webData.about.title = title;
  webData.about.short_description = short_description;
  webData.about.full_description = full_description;

  const updatedWebData = await webData.save();

  if (updatedWebData) {
    revalidatePath("/", "layout");
    redirect("/admin/about");
  }
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const updateHome = async (id, formData) => {
  const { photo, title } = Object.fromEntries(formData);

  // try {
  connectToDb();
  const webData = await WebData.findById(id);
  if (!webData) {
    console.log("Home not found");
    return false;
  }

  let newPath;
  if (photo && photo.size > 0) {
    newPath = await uploadFiles(photo);

    if (newPath && webData.homepage.photo && webData.homepage.photo.public_id) {
      await deleteFile(webData.home.photo.public_id);
    }
  }

  webData.homepage.photo = newPath || webData.homepage.photo;
  webData.homepage.overlayText = title;

  const updatedWebData = await webData.save();

  if (updatedWebData) {
    revalidatePath("/", "layout");
    redirect("/admin/dashboard");
  }
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const updateContact = async (id, formData) => {
  const {
    shopname,
    shop_description,
    mobile,
    mobile2,
    whatsapp,
    whatsapp2,
    address,
    email,
    twitter,
    facebook,
    instagram,
    map,
  } = Object.fromEntries(formData);

  // try {
  connectToDb();
  const webData = await WebData.findById(id);
  if (!webData) {
    console.log("Contact not found");
    return false;
  }

  webData.contact.shop_name = shopname;
  webData.contact.shop_description = shop_description;
  webData.contact.phone = [mobile, mobile2];
  webData.contact.whatsapp = [whatsapp, whatsapp2];
  webData.contact.email = email;
  webData.contact.address = address;
  webData.contact.social.facebook = facebook;
  webData.contact.social.instagram = instagram;
  webData.contact.social.twitter = twitter;
  webData.contact.map = map;

  const updatedWebData = await webData.save();

  if (updatedWebData) {
    revalidatePath("/", "layout");
    redirect("/admin/contact");
  }
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const updateSubcategory = async (id, formData) => {
  const { category, name } = Object.fromEntries(formData);

  // try {
  connectToDb();
  const subcategory = await SubCategory.findById(id);

  if (!subcategory) {
    console.log("Subcategory not found");
    return false;
  }
  subcategory.category = category;
  subcategory.name = name;
  const updatedSubcategory = await subcategory.save();
  if (updatedSubcategory) {
    revalidatePath("/", "layout");
    redirect("/admin/subcategories");
  }
  // } catch (error) {
  //   console.log("Error updating subcategory:", error);
  // }
};

export const updateProduct = async (id, formData) => {
  const { photos, name, category, subcategory, date, description } =
    Object.fromEntries(formData);

  // try {
  connectToDb();
  const product = await Product.findById(id);

  if (!product) {
    console.log("product not found");
    return false;
  }

  const urls = [];
  if (photos && photos.size > 0) {
    const allPhotos = Array.from(formData.entries())
      .filter(([name]) => name === "photos")
      .flatMap(([, files]) => files);
    for (const photo of allPhotos) {
      const path = await uploadFiles(photo);
      urls.push(path);
    }
    product.photos.forEach(async (element) => {
      await deleteFile(element.public_id);
    });
  }

  product.name = name;
  product.category = category;
  product.subcategory = subcategory;
  product.manufactureDate = date;
  product.description = description;
  product.photos = urls.length > 0 ? urls : product.photos;
  const updatedProduct = await product.save();
  if (updatedProduct) {
    revalidatePath("/", "layout");
    redirect("/admin/products");
  }
  // } catch (error) {
  //   console.log("Error updating product:", error);
  // }
};

export const updateCategory = async (id, formData) => {
  const { name } = Object.fromEntries(formData);

  // try {
  connectToDb();
  const category = await Category.findById(id);

  if (!category) {
    console.log("category not found");
    return false;
  }
  category.name = name;
  const updatedCategory = await category.save();
  if (updatedCategory) {
    revalidatePath("/", "layout");
    redirect("/admin/categories");
  }
  // } catch (error) {
  //   console.log("Error updating category:", error);
  // }
};
