import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [glutenInfo, setGlutenInfo] = useState('');
    const [warningMessage, setWarningMessage] = useState(''); // Add a state for the warning message

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
            .then(response => {
                if (response.data && response.data.product) {
                    setProduct(response.data.product);
                    // Check for explicit gluten-free labeling first
                    if (response.data.product.labels_tags?.includes('en:gluten-free')) {
                        setGlutenInfo('This product is explicitly labeled as gluten-free.');
                    } else {
                        // If not labeled as gluten-free, analyze ingredients for gluten
                        analyzeIngredientsForGluten(response.data.product);
                    }
                } else {
                    setError("Product not found");
                }
                setIsLoading(false);
            })
            .catch(err => {
                setError("Error fetching product details");
                setIsLoading(false);
            });

        return () => {
            document.body.style.backgroundColor = ''; // Reset background color
        };
    }, [id]);

    const analyzeIngredientsForGluten = (product) => {
        const glutenIngredients = ['wheat', 'barley', 'rye', 'oats', 'malt', 'brewer’s yeast'];
        const foundIngredients = glutenIngredients.filter(ingredient =>
            product.ingredients_text?.toLowerCase().includes(ingredient)
        );

        if (foundIngredients.length > 0) {
            setGlutenInfo(`Contains gluten ingredients: ${foundIngredients.join(', ')}.`);
        } else {
            setGlutenInfo('No gluten ingredients explicitly found.');
            setWarningMessage('Warning: Please double-check ingredients as a precaution.'); // Set warning message
        }
    };

    useEffect(() => {
        // Update background color based on glutenInfo
        updateBackgroundColor();
    }, [glutenInfo]);

    const updateBackgroundColor = () => {
        if (glutenInfo.includes('explicitly labeled as gluten-free')) {
            document.body.style.backgroundColor = '#e0f8e0'; // Light green for gluten-free products
        } else if (glutenInfo.includes('Contains gluten ingredients')) {
            document.body.style.backgroundColor = '#f8e0e0'; // Light red for products containing gluten
        } else {
            document.body.style.backgroundColor = '#f8f0e0'; // Light orange for uncertain cases
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-detail">
            <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>Back to Search</button>
            <h2>{product.product_name}</h2>
            <img src={product.image_url} alt={product.product_name} style={{ maxWidth: '200px', maxHeight: '200px', display: 'block', margin: 'auto' }} />
            <p>Brand: {product.brands}</p>
            {product.ingredients_text && (
                <>
                    <h3>Ingredients:</h3>
                    <p>{product.ingredients_text}</p>
                </>
            )}
            <p><strong>{glutenInfo}</strong></p>
            {warningMessage && <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>{warningMessage}</p>} {/* Display the warning message with a smaller font size */}
        </div>
    );
};

export default ProductDetail;
