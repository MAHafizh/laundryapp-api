import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/refreshToken.js";
import { getUser, Register, Login, Logout } from "../controller/Users.js";
import { addOrder } from "../controller/orders.js";

const router = express.Router();

router.get('/users', verifyToken, getUser);
router.post('/signup', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/user/order', addOrder)

export default router;