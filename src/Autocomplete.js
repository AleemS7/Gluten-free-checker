// src/Autocomplete.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Autocomplete = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm.length > 2) {
            axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`)
                .then(response => {
                    setSuggestions(response.data.products);
                })
                .catch(error => console.log(error));
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleSelectProduct = (product) => {
        // Navigate to the ProductDetail page with the selected product's id
        navigate(`/product/${product.id}`);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search for a product..." 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <ul>
                {suggestions.slice(0, 5).map(product => (
                    <li key={product.id} onClick={() => handleSelectProduct(product)}>
                        {product.product_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Autocomplete;
