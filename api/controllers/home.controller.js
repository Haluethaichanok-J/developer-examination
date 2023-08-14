import ItemModel from "../models/Items.js";
// Controller function to get all items
export const getAllItem = async (req, res) => {
  try {
    // Fetch all item data
    const inform = await ItemModel.find();
    if (!inform || inform.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Not found data",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Data fetched successfully",
      data: inform,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message + "Data fetching failed",
    });
  }
};
// Controller function to get an item by ID
export const getItem = async (req, res) => {
  // Extract the id from the route parameter
  const itemId = req.params.id;

  try {
    // Find item by ID
    const item = await ItemModel.findById(itemId);
    if (!item) {
      return res.status(404).json({
        status: 404,
        message: "Item not found ",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Item fetched successfully",
      data: item,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message + "Data fetching failed",
    });
  }
};

// Controller function to insert a new item
export const insertItem = async (req, res) => {
  try {
    // Extract values from req.body
    const {
      name,
      price: inputPrice,
      quantity: inputQuantity,
      description,
    } = req.body;
    //convert price and quantity to number
    const price = Number(inputPrice);
    const quantity = Number(inputQuantity);
    const user = new ItemModel({
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    });
    await user.save();
    res.status(201).send({
      status: 201,
      message: "Insert new item data succesfully",
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
};
// Controller function to update a item's data
export const updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    // Extract values from req.body
    const {
      name,
      price: inputPrice,
      quantity: inputQuantity,
      description,
    } = req.body;
    //convert price and quantity to number
    const price = Number(inputPrice);
    const quantity = Number(inputQuantity);
    const user = await ItemModel.findByIdAndUpdate(itemId, {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    });
    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "User not found",
      });
    }
    res.status(200).send({
      status: 200,
      message: "Update item data succesfully",
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
};
