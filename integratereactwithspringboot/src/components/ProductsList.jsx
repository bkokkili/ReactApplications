import React, {useEffect , useState} from "react";
const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/loadProductsJson`)
          .then(response => response.json())
          .then(data => setProducts(data.products))
          .catch(error => console.error('Error while fetching products:', error))
      },  []);

    return( 
     <div>  
        <h2>Products</h2> 
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}

      </ul>
     </div>
    );
}
export default ProductsList