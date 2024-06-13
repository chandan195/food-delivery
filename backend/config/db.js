import mongoose from "mongoose";

const db =
  "mongodb+srv://fooddelivery:fooddelivery@cluster0.tjhrwid.mongodb.net/food-del"; 
  //!mongooseDataBase id

export const connectDataBase = async () => {
  await mongoose.connect(db).then(() => console.log("Connect the database"));
};
//? connect to DataBase