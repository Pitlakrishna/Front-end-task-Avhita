import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    clinic: {
        type: String,
        enum: ["Suvarchala Dara", "Amitra Caines"],
    },
    device: {
        type: String,
        enum: ["202309/C881508", "202345/C9B6357", "202345/C9B6370", "202345/C9B6339", "202311/C882541"],
    },
    type: {
        type: String,
        enum: ['30', '14'],
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true }) // timestamps will add newly created user time is going to add

export default mongoose.model("patients", patientSchema)