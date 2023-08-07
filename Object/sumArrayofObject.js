function getTotalPrice(groceries) {
	const total=  groceries.reduce((total,grocery)=>{
		return total+ (grocery.quantity*grocery.price)
	},0);
	return total.toFixed(1);
}

console.log(getTotalPrice([{ product: "Chocolate", quantity: 1, price: 0.10 },
{ product: "Lollipop", quantity: 1, price: 0.20 }]));