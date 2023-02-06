function totalCost (products) {
    let cost = 0;
    for(i=0;i<products.length;i++)
    {
        let eliment = products[i];
        cost = cost+ eliment.price;
    }
	
return cost;
};
console.log(totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300}]))