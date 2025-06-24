import mongoose from "mongoose";

const connectionMongoDB = process.env.MONGODB;

mongoose.connect(connectionMongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })

process.on('SIGINT', async () => {
    await mongoose.disconnect();
    // await mysql.closeConnection()
    console.log('MongoDB connection closed');
    process.exit(0);
});