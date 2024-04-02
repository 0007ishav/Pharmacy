"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import axios from 'axios';
// import Product from '@/data/productData.json'; // Assuming you have a Product interface defined

interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
  }

const CategoryXPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query; // Get the category parameter from the URL

  const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     if (category) {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get(`/api/products?category=${category}`);
//           setProducts(response.data);
//         } catch (error) {
//           console.error(`Error fetching products for category ${category}:`, error);
//         }
//       };

//       fetchProducts();
//     }
//   }, [category]);

  return (
    <div>
      <h1>{category} Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryXPage;
