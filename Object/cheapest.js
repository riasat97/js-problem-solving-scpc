const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
];


// const findCheapest=(phones)=>{
// let cheapest= phones[0].price;
//     for(const phone of phones){
//         if(phone.price<cheapest)
//         cheapest= phone.price;
//     }
//     return cheapest;
// }
const findCheapest=(phones)=> phones.reduce((prev,curr)=>{
    console.log(prev);
   return prev.price<curr.price?prev:curr;
},{})
console.log(findCheapest(phones)); 