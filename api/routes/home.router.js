import { Router } from "express";
import {
  getAllItem,
  insertItem,
  getItem,
  updateItem,
} from "../controllers/home.controller.js";
// Create a router instance
const homeRouter = Router();
// Define routes and controller functions
homeRouter.get("/get_item", getAllItem);
homeRouter.get("/get_item_by_id/:id", getItem);
homeRouter.post("/update_item/:id", updateItem);
homeRouter.post("/insert_item", insertItem);
export default homeRouter;
