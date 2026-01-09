import mongoose from "mongoose";
export const connectDb=async()=>{
    await mongoose.connect('mongodb+srv://aanchalladha2023_db_user:kzK5ulLiB5hd5Ji5@cluster0.aq8bdgv.mongodb.net/food-del').then(()=>{
        console.log("Connected to MongoDB");
    })
}
