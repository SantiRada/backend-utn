import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';

dotenv.config();

export const s3 = new S3Client({
    region: process.env.BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY
    }
});