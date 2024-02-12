import mongoose from "mongoose";

const WebDataSchema = new mongoose.Schema({
  about: {
    photo: {
      public_id: String,
      url: String,
    },
    title: String,
    short_description: String,
    full_description: String,
  },
  contact: {
    shop_name: String,
    shop_description: String,
    phone: [{ type: String }],
    whatsapp: [{ type: String }],
    email: String,
    address: String,
    map: String,
    social: {
      facebook: String,
      twitter: String,
      instagram: String,
    },
  },
  homepage: {
    photo: {
      public_id: String,
      url: String,
    },
    overlayText: String,
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
    ]
  }
}, {timestamps: true});

const WebData = mongoose.models.WebData || mongoose.model("WebData", WebDataSchema);

export default WebData;
