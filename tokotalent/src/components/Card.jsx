// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/produk")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <header className="mx-32 mx-w-screen-xl">
        <h1 className="text-2xl font-bold mb-10 mt-16 text-gray-800">
          Menu Makanan
        </h1>
        <div className="flex flex-wrap gap-5 justify-center transition-all duration-300">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-full sm:w-80 md:w-1/3 lg:w-1/4 xl:w-1/5 h-80 rounded-lg bg-[#FFF5E4] shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div
                className="relative w-full h-1/2 bg-cover bg-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${product.image} )`,
                  objectFit: "cover",
                }}
              >
                {!product.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-red-800 text-lg font-bold bg-black bg-opacity-50">
                    <span>Gambar Tidak Tersedia</span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col justify-between gap-1">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p
                  className="text-gray-700 text-sm"
                  style={{ lineHeight: 1.5 }}
                >
                  {product.description}
                </p>
                <p className="mt-2 text-lg font-bold text-red-800">
                  Rp {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </header>

      <Modal
        product={selectedProduct}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Card;
