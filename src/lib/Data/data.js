import Product from "../Models/Product";
import { connectToDb } from "../db"

export const getProducts = async () => {
    try {
        connectToDb();
        const products = await Product.find();
        return products;
    } catch (error) {
        console.log(error)
    }
}

