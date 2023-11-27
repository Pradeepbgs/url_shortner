import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/url_shortner_revise')
        console.log("connected to db")
    } catch (error) {
        console.log("error in mongo.connect.js")
        throw error
    }
}