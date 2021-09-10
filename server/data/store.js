import * as userRepository from './user.js';

let products = [
    {
        id:Date.now().toString(),
        seller_id:'1', 
        name:'경매상품입니다', 
        price:'10000', 
        description:'설명입니다',
    },
    {
        id:Date.now()+'1'.toString(),
        seller_id:'2', 
        name:'박성훈입니다', 
        price:'50000', 
        description:'디스크립션인가요',
    },
];



export async function getAll() {
    return products
}

export async function getById(id) {
    const found = products.filter((product) => product.seller_id === id);
    if(!found){
        return null;
    }
    return {...found}
}


// export async function getById(id){
//     const found = products.find((product) => product.seller_id === id);
//     if(!found) {
//         return null;
//     }
//     const { username } = await userRepository.findById(found.seller_id);
//     return { ...found, username };
// }

export async function create(seller_id, name, price, description){
    const product = {
        id: Date.now().toString(),
        seller_id,
        name,
        price,
        description,
        createdAt: new Date(),
    };
    products = [product, ...products];
    return getById(product.seller_id);
}

export async function update(buyer_id, id){
    const product = products.find((product1) => product1.id === id);
    if(product){
        product.price = (parseInt(product.price)*1.05);
    } 
    return getById(product.seller_id);
}