import Category from "../Models/Category";
import Product from "../Models/Product";
import SubCategory from "../Models/SubCategory";
import WebData from "../Models/WebData";
import { connectToDb } from "../db";
import { getPagination } from "../utils";

export const getProducts = async (query, limit, page) => {
  try {
    connectToDb();

    const filter = {};
    if (query) {
      // You can adjust the fields you want to search on based on your schema
      filter.$or = [
        { name: { $regex: new RegExp(query, "i") } },
        { description: { $regex: new RegExp(query, "i") } },
      ];
    }

    const totalProducts = await Product.countDocuments(filter);

    const { skip, itemsPerPage, currentPage, totalPages } = getPagination(
      limit,
      page,
      totalProducts
    );

    const products = await Product.find(filter)
      .skip(skip)
      .limit(itemsPerPage)
      .populate(["category", "subcategory"]);

    return {
      products,
      pagination: {
        total: totalProducts,
        totalPages,
        currentPage,
      },
    };
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to handle it at a higher level if needed
  }
};

export const getCategories = async (query, limit, page) => {
  try {
    connectToDb();
    const filter = {};
    if (query) {
      filter.$or = [{ name: { $regex: new RegExp(query, "i") } }];
    }
    const totalCategories = await Category.countDocuments(filter);

    const { skip, itemsPerPage, currentPage, totalPages } = getPagination(
      limit,
      page,
      totalCategories
    );

    const categories = await Category.find(filter)
      .skip(skip)
      .limit(itemsPerPage);

    return {
      categories,
      pagination: {
        total: totalCategories,
        totalPages,
        currentPage,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategories = async (query, limit, page) => {
  try {
    connectToDb();
    const filter = {};
    if (query) {
      filter.$or = [{ name: { $regex: new RegExp(query, "i") } }];
    }
    const totalSubcategories = await SubCategory.countDocuments(filter);

    const { skip, itemsPerPage, currentPage, totalPages } = getPagination(
      limit,
      page,
      totalSubcategories
    );

    const subcategories = await SubCategory.find(filter)
      .skip(skip)
      .limit(itemsPerPage)
      .populate(["category"]);

    return {
      subcategories,
      pagination: {
        total: totalSubcategories,
        totalPages,
        currentPage,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export const getWebData = async () => {
  try {
    connectToDb();
    const webData = await WebData.find();
    return webData;
  } catch (error) {
    console.log(error);
  }
};

export const getSubcategoryById = async (id) => {
  try {
    connectToDb();
    const subcategory = await SubCategory.findById(id).populate("category");
    if (subcategory) {
      return subcategory;
    }
    else {
      console.log("Not Found!")
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    connectToDb();
    const category = await Category.findById(id);
    if (category) {
      return category;
    }
    else {
      console.log("Not Found!")
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductyById = async (id) => {
  try {
    connectToDb();
    const product = await Product.findById(id).populate(["category", "subcategory"]);
    if (product) {
      return product;
    }
    else {
      console.log("Not Found!")
    }
  } catch (error) {
    console.log(error);
  }
};
