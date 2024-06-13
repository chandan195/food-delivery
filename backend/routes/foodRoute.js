import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//! Image storage Engine

const storage = multer.diskStorage({
  destination: "uploads", 
  //?image stores location of uploaded files
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`); 
    //* image name with current DateTime and original filename
  },
});

const upload =multer({storage: storage})


foodRouter.post("/add", upload.single("image"),addFood); //*add new food list
foodRouter.get("/list",listFood); //? get list of all food
foodRouter.post("/remove",removeFood); //!remove items from the list


export default foodRouter;
