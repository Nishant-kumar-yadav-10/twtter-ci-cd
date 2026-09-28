import mongoose from "mongoose"
export const connect=async()=>{
    await mongoose.connect("mongodb+srv://nishant12ts_db_user:nishant123@cluster0.4icw4kd.mongodb.net/?appName=Cluster0")
}