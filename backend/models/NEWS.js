import mongoose from "mongoose";

const newsSchema  = mongoose.Schema(
    {
        author: { type: String, required: true },
        headNews: { type: String, required: true },
        bodyNews: { type: String, required: true },
        date: { type: String, required: true },
        picture: { type: String, required: true },

    }
)


export const News = mongoose.model('News',newsSchema)