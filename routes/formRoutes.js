import express from 'express'
import { formDataController, getformDataController } from '../controller/formDataController.js'

const router = express.Router()

router.post('/formdata', formDataController)
router.get('/getformdata', getformDataController)

export default router