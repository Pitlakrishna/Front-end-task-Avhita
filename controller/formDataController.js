import patientModel from "../model/patientModel.js"
import userModel from "../model/userModel.js"
import { hashPassward, comparePassword } from '../helper/authhelper.js';
import JWT from "jsonwebtoken";


export const formDataController = async (req, res) => {
    try {
        const { firstName, lastName, clinic, device, type } = req.body

        if (!clinic) {
            return res.send({ message: "clinic is Required" })
        }
        if (!device) {
            return res.send({ message: "device is Required" })
        }
        if (!type) {
            return res.send({ message: "type is Required" })
        }
        if (!lastName || !firstName) {
            return res.send({ message: "info is Required" })
        }

        // console.log(firstName, lastName, clinic, device, type)
        const patient = await new patientModel({ firstName, lastName, clinic, device, type }).save()
        res.status(201).send({
            success: true,
            message: "add Successfully",
            patient   // above object variable 
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error formData",
            error
        })
    }
}

//reg

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body

        // validations

        if (!name) {
            return res.send({ message: "Name is Required" })
        }
        if (!email) {
            return res.send({ message: "email is Required" })
        }
        if (!password) {
            return res.send({ message: "password is Required" })
        }
        if (!phone) {
            return res.send({ message: "phone Number is Required" })
        }
        if (!address) {
            return res.send({ message: "address is Required" })
        }
        if (!answer) {
            return res.send({ message: "Answer is Required" })
        }

        //check User

        const existingUser = await userModel.findOne({ email })   // here key: value  are same so You can directly {email} instead of {email : email}
        //check existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User Already Exist So Please Login",
            })
        }

        //register user
        const hashedPasword = await hashPassward(password)
        const user = await new userModel({ name, email, phone, address, password: hashedPasword, answer }).save()
        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user   // above object variable 
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}

//Login 


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //vaalidation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or passward"
            })
        }

        //check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not Found"
            })
        }

        // check password And Match compare
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid passward"
            })
        }

        // token

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, newPassword } = req.body
        if (!email) {
            res.status(400).send({ message: "Email is required" })
        }
        if (!newPassword) {
            res.status(400).send({ message: "New Password is required" })
        }

        // checking Email to change or reset Password
        const user = await userModel.findOne({ email })
        if (!user) {
            res.status(404).send({
                success: false,
                message: "Wrong Email Or Answer",
            });
        }
        const hashed = await hashPassward(newPassword)   // if incase after we are geting user only otherwise above condn is going follow
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Somthing Went Wrong",
            error
        })
    }
}


// get Data
export const getformDataController = async (req, res) => {
    try {
        const patient = await patientModel.find({})
        res.status(200).send({
            success: true,
            message: "Succesfully getting data",
            patient
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting Data",
            error
        })
    }
}