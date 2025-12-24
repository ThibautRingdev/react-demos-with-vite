function ProductList() {
    const products=[
        {id: 1, name: "Phone", price:"800€"},
        {id: 2, name: "Laptop", price:"1200€"},
        {id: 3, name: "Headphones", price:"400€"},
    ]
    return (
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    {product.name} – {product.price}
                </li>
            ))}
        </ul>
    );
}

export default ProductList;