import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      ,
    },
    password: { type: String, required: true, minlength: 8 },
    photo: { public_id: String, url: String },
    isAdmin: {type: Boolean, default: false},
    about: {
      photo: {
        public_id: String,
        url: String,
      },
      short_description: String,
      full_description: String,
    },
    contact: {
      shop_name: String,
      short_description: String,
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
  },
  { timestamps: true }
);

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;
