import mongoose from "mongoose";

// const db = 'process.env.MONGOOSE_DATABASE_ID'; 
  //!mongooseDataBase id

export const connectDataBase = async () => {
  await mongoose.connect(process.env.MONGOOSE_DATABASE_ID).then(() => console.log("Connect the database"));
};
//? connect to DataBase