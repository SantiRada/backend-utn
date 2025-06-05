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
        power: Array,
        universe: {
                type: String,
                required: true,
                lowercase: true,
                enum: [ "marvel", "dc", "vougth" ]
        },
},{
        timestamps: true, // createdAt // updatedAt
        versionKey: false
});

Hero.set('toJSON', {
        transform: (doc, returnedObject) => {
                returnedObject.id = doc._id,
                returnedObject.name = capitalize(doc.name),
                delete returnedObject._id,
                delete returnedObject.__v,
                delete returnedObject.createdAt,
                delete returnedObject.updatedAt
        }
});

export const HeroModel = mongoose.model('characters', Hero);

function capitalize (data) {
        let partes = data.split(' ');

        if(data.length <= 0) { return ''; }

        let finalName = '';

        partes.map(parte => {
                finalName += parte[0].toLocaleUpperCase() + parte.slice(1).toLocaleLowerCase() + ' ';
        });

        finalName = finalName.slice(0, -1);

        return finalName;
}