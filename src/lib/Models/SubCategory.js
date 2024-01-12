import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {type: mongoose.Schema.Types.ObjectId, ref: "Category"}
});

const SubCategory = mongoose.model.Category || mongoose.model('Subcategory', subCategorySchema);

export default SubCategory;