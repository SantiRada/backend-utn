import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    mail: String,
    name: String,
    password: String,
    type: String
});

export const User = mongoose.model('user', userScheme);