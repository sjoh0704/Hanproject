import * as buyerRepository from '../data/buyer.js';


export async function getProducts(req, res) { // seller_Id가 없으면 전체상품 있으면 그 상품들
    const {buyer_id} = req.query;
    const data = await (!buyer_id
    ? buyerRepository.getAll()
    : buyerRepository.getAllBybuyerid(buyer_id));
    res.status(200).json(data);
}

export async function createProduct(req, res){ // 낙찰되어 경매 종료된 상품 생성
    console.log(req.body);
    const {buyer_id,seller_id, price, product_id } = req.body;
    const product = await buyerRepository.create(buyer_id,seller_id, price, product_id);
 
    res.status(201).json(product);
   

}