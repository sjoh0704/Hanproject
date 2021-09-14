let products = [
    {
        id:Date.now().toString(),
        seller_id:'1', 
        name:'경매상품입니다', 
        price:'10000', 
        createdAt: new Date(),
        description:'설명입니다',
        time:'12:00',
    },
    {
        id:Date.now()+'1'.toString(),
        seller_id:'2', 
        name:'박성훈입니다', 
        price:'50000', 
        createdAt: new Date(),
        description:'디스크립션인가요',
        time:'12:00',
    },
];



export async function getAll() {
    return products
    }



export async function getById(id) {
    const found = products.filter((product) => product.id === id);
    if(!found){            
        return null;
    }
    return found
    } 
    // export async function getById(id) {
    //     const found = products.filter((product) => product.id === id);
    //     if(!found){
    //         return null;
    //     }
    //     return {...found}
    // }
    
    
// export async function getById(id) {
//     const found = products.filter((product) => product.seller_id === id);
//     if(!found){
//         return null;
//     }
//     return {...found}
// }


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
        time: '12:00',
        description,
        createdAt: new Date(),
    };
    products = [product, ...products];
    return getById(product.id);
}

export async function update(id, buyer_id){
    console.log('아이디ididid',id);
    const product = products.find((product) => product.id === id);
    
    if(product){
        product.buyer_id = buyer_id;
        product.price = (parseInt(product.price)*1.1);
    } 
    return getById(product.id);
}

export async function remove(id){ 
    console.log('id',id,);
        products = products.filter((product) => product.id !== id);
}
