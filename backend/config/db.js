import mongoose from "mongoose";

export const connectDb=async ()=>{
    await mongoose.connect('mongodb+srv://raghavshorya123_db_user:94JXSRrfgnO3Ds5T@cluster0.kw44jyh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}