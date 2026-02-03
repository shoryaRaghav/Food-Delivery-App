// import foodModel from "../models/foodModel.js"

// import fs from 'fs'

// const addFood=async (req , res)=>{
//     let image_filename=`${req.file.filename}`;

//     const food=new foodModel({
//         name:req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename
//     })
//     try{
//         await food.save();
//         res.json({success:true,message:"Food Added"})
//     }catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// export {addFood}


import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    // check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required"
      });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
    });

    await food.save();

    res.json({
      success: true,
      message: "Food Added Successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

//all food list
const listFood =async(req,res)=>{
  try {
    const foods=await foodModel.find({});
    res.json({success:true,data:foods})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"});
  }
}


//remove foood item
// const removeFood=async (req,res)=>{
//   try {
//     const food=await foodModel.findById(req.body.id);
//     fs.unlink(`uploads/${food.image}`,()=>{})
//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({successs:true,message:"Food Removed"})
//   } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
//   }
// }

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.json({
        success: false,
        message: "Food not found"
      });
    }

    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.log("Image delete error:", err);
    });

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Food Removed Successfully"
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error removing food"
    });
  }
};

export { addFood ,listFood,removeFood};