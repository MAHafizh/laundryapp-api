import { Users, Orders } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const addOrder = async (req, res) => {
  const { user_id, formal_shirt, shirt, outer, jeans, pants, underwear } = req.body;

  try {
    const orderIdPrefix = Math.random().toString(36).substring(2, 5).toUpperCase();
    const ordersCount = await Orders.count();
    const orderNumber = String(ordersCount + 1).padStart(5, "0");
    const order_id = `${orderIdPrefix}${orderNumber}`;

    const newOrder = await Orders.create({
        order_id,
        user_id,
        formal_shirt,
        shirt,
        outer,
        jeans,
        pants,
        underwear,
      });

    res.status(201).json({ msg: 'Order added successfully', order_id: newOrder.order_id });

  } catch (error) {
    console.error(error);
  }
};
