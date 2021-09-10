import * as storeRepository from '../data/store.js';





export async function getProducts(req, res) {
    const username = req.query.username;
    const data = await (username
    ? storeRepository.getAllByUsername(username)
    : storeRepository.getAll()); 
    res.status(200).json(data);
}

export async function getProduct(req, res) {
    const id = req.params.id;
    const product = await storeRepository.getById(id);
    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json({message: `Id :(${id}) add product  not found`})
    }
}

export async function createProduct(req, res){
    const {seller_id,name, price, description } = req.body;
    const product = await storeRepository.create(seller_id,name, price, description);
    res.status(201).json(product)

}

export async function plusProduct(req, res){
    const {buyer_id, id, price} = req.body;

    const updated = await storeRepository.update(buyer_id, id, price);
    res.status(200).json(updated);
}