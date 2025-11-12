import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CategoryPage = () => {
    const {categoryName} = useParams()
    console.log(categoryName);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/categories`)
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(item => item.category === categoryName)
            setItems(filtered);
        })
    }, [categoryName])

    console.log(items);

    return (
        <div>
            category page
        </div>
    );
};

export default CategoryPage;