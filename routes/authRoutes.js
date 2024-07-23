import express from 'express'
import { forgotPasswordController, loginController, registerController } from '../controller/formDataController.js'
// import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js"

const router = express.Router()
router.post('/register', registerController)
router.post('/login', loginController);
router.post('/forgotpassword', forgotPasswordController);

export default router