import bcrypt from 'bcrypt';

export const HashData = async (data) => {
    return await bcrypt.hash(data, 10);
}

export const CompareData = async (data, hash) => {

    return await bcrypt.compare(data, hash);
};