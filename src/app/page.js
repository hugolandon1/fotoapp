'use client'
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

export default function Home() {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "caras"));
        const productData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div className="w-full flex-wrap flex justify-center items-center gap-2 px-2">
        {productos.map((product) => (
          <li key={product.slug}>
            {/* <p>{product.title}</p> */}
            <Image
            src={product.image}
            width={300}
            height={300}
            alt={product.title}
            />
            
          </li>
          
        ))}
        <div className="w-[300px] h-[320px] bg-[#7770] "></div>
        <div className="w-[300px] h-[320px] bg-[#7770] "></div>
      </div>
    </div>
  );
}