import mongoose from "mongoose";

const db =
  "mongodb+srv://fooddelivery:fooddelivery@cluster0.tjhrwid.mongodb.net/food-del";

export const connectDataBase = async () => {
  await mongoose.connect(db).then(() => console.log("Connect the database"));
};
