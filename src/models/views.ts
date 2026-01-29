import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    count: Number
})

const view = mongoose.model('view', schema)
export default view;