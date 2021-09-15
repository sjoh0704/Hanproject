import * as storeRepository from '../data/store.js';

export async function getProducts(req, res) {
    const {seller_id} = req.query;
    const data = await (!seller_id
    ? storeRepository.getAll()
    : storeRepository.getAllBysellerid(seller_id));
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
    const {seller_id,name, price, fileurl, description } = req.body;
    const product = await storeRepository.create(seller_id,name, fileurl, price, description);
    res.status(201).json(product)

}

export async function plusProduct(req, res){
    const id = req.params.id;
    const {buyer_id} = req.body;
    const product = await storeRepository.getById(id);
    if(!product){
        return res.status(404).json({ message: `Pr not found: ${id}` });
    }
    const updated = await storeRepository.updateplus(id, buyer_id, product.price);
    res.status(200).json(updated);
}

export async function updateProduct(req, res){
    const id = req.params.id;
    const {fileurl, name, description} = req.body;
    const product = await storeRepository.getById(id);
    if(!product){
        return res.status(404).json({ message: `Pr not found: ${id}` });
    }
    const updated = await storeRepository.update(id, fileurl, name, description);
    res.status(200).json(updated);
}

export async function removeProduct(req, res){
    const id = req.params.id;
    
  const product = await storeRepository.getById(id);
  if (!product) {
    return res.status(404).json({ message: `product not found: ${id}` });
  }
  await storeRepository.remove(id);
  res.sendStatus(204);
}


