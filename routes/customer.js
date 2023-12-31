import express from 'express';
import {getCustomer, createCustomer} from '../controller/customer.js'

const router = express.Router();

router.get("/", getCustomer);
router.post("/", createCustomer);

export default router;