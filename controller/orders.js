import { Users, Orders } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const addOrder = async (req, res) => {
  const { user_id, formal_shirt, shirt, outer, jeans, pants, underwear, pickup_time, service_type } = req.body;

  try {
    const generateRandomDigits = (length) => {
      let result = '';
      for (let i = 0; i < length; i++) {
          result += Math.floor(Math.random() * 10); // Generate random digit from 0 to 9
      }
      return result;
  };

    const orderIdPrefix = generateRandomDigits(3);
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
        pickup_time,
        service_type
      });

    res.status(201).json({ msg: 'Order added successfully', order_id: newOrder.order_id });

  } catch (error) {
    console.error(error);
  }
};
