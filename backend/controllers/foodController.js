import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";
// add food item (image OPTIONAL)
const addFood = async (req, res) => {
    try {
        // image will be undefined if not uploaded
        const image_filename = req.file ? req.file.filename : "";

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename, // "" if no image
        });

        await food.save();

        res.json({
            success: true,
            message: "Food Added",
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error",
        });
    }
};
//list food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data: foods
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error",
        });
    }

}
//remove food item
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    // 1️⃣ find food by id
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    // 2️⃣ delete image ONLY if it exists
    if (food.image) {
      const imagePath = path.join("uploads", food.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // 3️⃣ delete food document
    await foodModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Food item deleted successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting food item",
    });
  }
};
export { addFood, listFood, removeFood }
