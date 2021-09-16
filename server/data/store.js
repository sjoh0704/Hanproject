import Mongoose from 'mongoose';
import { useVirtualId } from '../database/database.js';

const productSchema = new Mongoose.Schema({
    seller_id: {type:Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    buyer_id: Number,
    fileurl: Array,
}, {timestamps: true});

useVirtualId(productSchema);
const Product = Mongoose.model('Product', productSchema);




export async function getAll() {
    return Product.find().sort({createdAt: -1});
    }



export async function getById(id) {
    return Product.findById(id);
    } 

export async function getAllBysellerid(seller_id) {
    return Product.find({seller_id})
    }     


export async function create(seller_id, name, fileurl, price, description){
    new Product({
        seller_id, 
        name, 
        price, 
        description,
        fileurl,
    }).save()
}

export async function updateplus(id, buyer_id, price ){
    return Product.findByIdAndUpdate(id, {price:parseInt(price*1.1),buyer_id},{ returnOriginal : false});
}

export async function update(id, fileurl, name, description){
    return Product.findByIdAndUpdate(id, {fileurl,name,description}, { returnOriginal : false});


}
export async function remove(id){ 
    return Product.findByIdAndDelete(id)    
}
