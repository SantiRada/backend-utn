import mongoose from "mongoose";

const Hero = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                default: 'Unnamed',
                unique: true,    // FUNCION
                minlength: [3, 'que mensaje'],
                maxlength: [20, 'QUE MENSAJE QUIERO QUE ME MUESTRE'],
                lowercase: true, // FUNCION
                trim: true       // "    Santiago    " "Santiago"
        },
        power: String,
        universe: {
                type: String,
                required: true,
                lowercase: true,
                enum: [ "marvel", "dc", "vougth" ]
        },
},{
        timestamps: true,
        versionKey: false
});

Hero.set('toJSON', {
        transform: (doc, returnedObject) => {
                returnedObject.id = doc._id,
                returnedObject.name = (doc.name[0].toLocaleUpperCase() + doc.name.slice(1)),
                delete returnedObject._id,
                delete returnedObject.__v,
                delete returnedObject.createdAt,
                delete returnedObject.updatedAt
        }
});

export const HeroModel = mongoose.model('characters', Hero);