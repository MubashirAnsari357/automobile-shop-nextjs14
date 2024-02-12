"use server";
import { revalidatePath } from "next/cache";
import Category from "../Models/Category";
import Product from "../Models/Product";
import { deleteFile, uploadFiles } from "../upload";
import { connectToDb } from "../db";
import SubCategory from "../Models/SubCategory";
import WebData from "../Models/WebData";
import { redirect } from "next/navigation";
import User from "../Models/User";
import mongoose from "mongoose";
import { signIn, signOut } from "@/auth";
import bcrypt from "bcrypt";

export const addProduct = async (formData) => {
  const allPhotos = Array.from(formData.entries())
    .filter(([name]) => name === "photos")
    .flatMap(([, files]) => files);

  const { name, category, subcategory, date, description } =
    Object.fromEntries(formData);

  let success = false;
  try {
    const urls = [];

    for (const photo of allPhotos) {
      const path = await uploadFiles(photo);
      urls.push(path);
    }
    connectToDb();
    const product = await Product.create({
      name,
      category,
      subcategory,
      manufactureDate: date,
      description,
      photos: urls,
    });

    if (product) {
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    console.error("Stack trace:", error.stack);
  } finally {
    if (success) {
      redirect("/admin/products");
    }
  }
};

export const addCategory = async (formData) => {
  const { name } = Object.fromEntries(formData);
  let success = false;
  try {
    connectToDb();
    const category = await Category.create({
      name,
    });
    if (category) {
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/admin/categories");
    }
  }
};

export const addSubCategory = async (formData) => {
  const { category, name } = Object.fromEntries(formData);
  let success = false;
  try {
    connectToDb();
    const subcategory = await SubCategory.create({
      name,
      category,
    });
    if (subcategory) {
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/admin/subcategories");
    }
  }
};

export const addAbout = async (formData) => {
  const { photo, title, short_description, full_description } =
    Object.fromEntries(formData);
  let success = false;
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
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/admin/about");
    }
  }
};

export const updateAbout = async (id, formData) => {
  const { photo, title, short_description, full_description } =
    Object.fromEntries(formData);
  let success = false;
  try {
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
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/admin/about");
    }
  }
};

export const updateHome = async (id, products, formData) => {
  const { photo, title } = Object.fromEntries(formData);
  let success = false;
  try {
    connectToDb();
    const webData = await WebData.findById(id);
    if (!webData) {
      console.log("Home not found");
      return false;
    }

    let newPath;
    if (photo && photo.size > 0) {
      newPath = await uploadFiles(photo);

      if (
        newPath &&
        webData.homepage.photo &&
        webData.homepage.photo.public_id
      ) {
        await deleteFile(webData.homepage.photo.public_id);
      }
    }

    webData.homepage.photo = newPath || webData.homepage.photo;
    webData.homepage.overlayText = title;
    webData.homepage.products = products;

    const updatedWebData = await webData.save();

    if (updatedWebData) {
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/admin/dashboard");
    }
  }
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
  let success = false;
  try {
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
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/admin/contact");
    }
  }
};

export const updateSubcategory = async (id, formData) => {
  const { category, name } = Object.fromEntries(formData);

  let success = false;
  try {
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
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("Error updating subcategory:", error);
  } finally {
    if (success) {
      redirect("/admin/subcategories");
    }
  }
};

export const updateProduct = async (id, formData) => {
  const { photos, name, category, subcategory, date, description } =
    Object.fromEntries(formData);

  let success = false;
  try {
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
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("Error updating product:", error);
  } finally {
    if (success) {
      redirect("/admin/products");
    }
  }
};

export const updateCategory = async (id, formData) => {
  const { name } = Object.fromEntries(formData);
  let success = false;
  try {
    connectToDb();
    const category = await Category.findById(id);

    if (!category) {
      console.log("category not found");
      return false;
    }
    category.name = name;
    const updatedCategory = await category.save();
    if (updatedCategory) {
      success = true;
      revalidatePath("/", "layout");
    }
  } catch (error) {
    console.log("Error updating category:", error);
  } finally {
    if (success) {
      redirect("/admin/categories");
    }
  }
};

export const addUser = async (formData) => {
  const { name, email, password, photo } = Object.fromEntries(formData);

  let success = false;
  try {
    connectToDb();
    const path = await uploadFiles(photo);
    if (path) {
      const user = await User.create({
        name,
        email,
        password,
        photo: path,
      });
      if (user) {
        success = true;
        revalidatePath("/", "layout");
      } else {
        console.log("Error");
      }
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (success) {
      redirect("/login");
    }
  }
};

export const updateUser = async (id, formData) => {
  const { name, email, photo } = Object.fromEntries(formData);
  try {
    connectToDb();

    const user = await User.findById(id);

    if(!user){
      return { success: false, message: "Invalid User!" }
    }

    let newPath;
    if (photo && photo.size > 0) {
      newPath = await uploadFiles(photo);

      if (newPath && user.photo && user.photo.public_id) {
        await deleteFile(user.photo.public_id);
      }
    }
    user.name = name;
    user.email = email;
    user.photo = newPath || user.photo;
    const updatedUser = await user.save();
    if (updatedUser) {
      revalidatePath("/", "layout");
      return { success: true, message: "Profile updated successfully!" }
    } else {
      return { success: false, message: "Failed to update profile" };
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteCategory = async (id, formData) => {
  const session = await mongoose.startSession();
  let success = false;
  try {
    connectToDb();
    await session.withTransaction(async () => {
      const category = await Category.findById(id);
      if (!category) {
        console.log("category not found");
        return false;
      }
      await SubCategory.deleteMany({ category: category._id }).session(session);

      const products = await Product.find({ category: category._id }).session(
        session
      );
      for (const product of products) {
        if (product.photos && product.photos.length > 0) {
          for (const photo of product.photos) {
            const publicId = photo.public_id;
            await deleteFile(publicId);
          }
        }
      }
      await Product.deleteMany({ category: category._id }).session(session);

      const deletedCategory = await Category.findByIdAndDelete(id).session(
        session
      );
      if (deletedCategory) {
        success = true;
      }
    });
    if (success) {
      revalidatePath("/", "layout");
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    session.endSession();
  }
};

export const deleteSubCategory = async (id, formData) => {
  const session = await mongoose.startSession();
  let success = false;
  try {
    connectToDb();
    await session.withTransaction(async () => {
      const subcategory = await SubCategory.findById(id);
      if (!subcategory) {
        console.log("subcategory not found");
        return false;
      }

      const products = await Product.find({
        subcategory: subcategory._id,
      }).session(session);
      for (const product of products) {
        if (product.photos && product.photos.length > 0) {
          for (const photo of product.photos) {
            const publicId = photo.public_id;
            await deleteFile(publicId);
          }
        }
      }
      await Product.deleteMany({ subcategory: subcategory._id }).session(
        session
      );
      const deletedSubcategory = await SubCategory.findByIdAndDelete(
        id
      ).session(session);
      if (deletedSubcategory) {
        success = true;
      }
    });
    if (success) {
      revalidatePath("/", "layout");
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    session.endSession();
  }
};

export const deleteProduct = async (id, formData) => {
  const session = await mongoose.startSession();
  let success = false;
  try {
    connectToDb();
    await session.withTransaction(async () => {
      const product = await Product.findById(id).session(session);
      if (!product) {
        console.log("product not found");
        return false;
      }
      if (product.photos && product.photos.length > 0) {
        for (const photo of product.photos) {
          const publicId = photo.public_id;
          await deleteFile(publicId);
        }
      }
      const deletedProduct = await Product.findByIdAndDelete(id).session(
        session
      );
      if (deletedProduct) {
        success = true;
      }
    });
    if (success) {
      revalidatePath("/", "layout");
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    session.endSession();
  }
};

export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "Invalid Credentials!";
    }
    throw error;
  }
};

export const logout = async () => {
  await signOut();
};

export const updatePassword = async (formData) => {
  const { email, oldPassword, newPassword, cnewPassword } =
    Object.fromEntries(formData);
  if (newPassword !== cnewPassword) {
    return { success: false, message: "New passwords do not match!" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ email: email }).select("+password");
    if (user) {
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (isMatch) {
        user.password = newPassword;
        const updatedUser = await user.save();
        if (updatedUser) {
          return {
            success: true,
            message: "Password Updated Successfully! Login with new password",
          };
        }
      } else {
        return { success: false, message: "Old password is incorrect!" };
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (userId) => {
  try {
    connectToDb();
    const user = await User.findById(userId);
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
}