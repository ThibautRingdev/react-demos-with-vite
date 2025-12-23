function ProductInfo() {
    const product = {
        name: "Laptop",
        price: "1200$",
        availability: "in Stock"
    };

    return (
        <h1>Product Name: {product.name}</h1>
    )
} 

export default ProductInfo;