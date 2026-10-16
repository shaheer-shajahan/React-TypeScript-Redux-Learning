import { useState, useEffect } from "react";

function ProductCatalog() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {

        async function getProducts() {
            setLoading(true);
            setError("");

            try {
                const response = await fetch("https://dummyjson.com/products");
                
                if (!response.ok) {
                    throw new Error("Failed to load");
                }

                const data = await response.json();

                setProducts(data.products);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
        
    },[retryCount]);

    if(loading) {
        return (
            <p>Product Loading...</p>

        )
    }

    if(error) {
        return (
            <div className="border mb-3 d-flex justify-content-center align-items-center gap-3 p-3 flex-column rounded">
                <p>Failed to Loading... </p>
                <button 
                    className="btn btn-primary" 
                    onClick={()=> setRetryCount(retryCount + 1)}>
                    Try Again
                </button>
            
            </div>
        )
    }

    return(
        <div className="conatainer-fluid mb-3">
            <h3>Product List</h3>
            <div className="row">
                {products.length === 0 ? (
                    <p>No products load</p>
                ) : (
                    <div className="row g-3">
                        {products.map((product) => (
                            <div className="col-3" key={product.id}>
                                <div className="border p-3 ">
                                    <img src={product.thumbnail}  className="w-100"/>
                                    <p>{product.title}</p>
                                    <strong className="text-danger">{product.price}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCatalog;