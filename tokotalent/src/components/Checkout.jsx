import { FaTrash, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

function Checkout() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("product")) || [];
    setProduct(storedProduct);
  }, []);

  console.log(product);
  const handleCheckout = () => {
    if (product.length === 0) {
      Swal.fire({
        icon: "error",
        text: "Tidak Ada Menu Yang Dipesan",
        showConfirmButton: false,
        timer: 1200,
        position: "top-end",
      });
      return;
    }

    localStorage.removeItem("product");
    setProduct([]);
    Swal.fire({
      icon: "success",
      text: "Harap Menunggu, Pesanan Sedang Diproses",
      showConfirmButton: false,
      timer: 1200,
      position: "top-end",
    });
  };
  const handleDelete = (index) => {
    const updatedProduct = product.filter((_, i) => i !== index);
    setProduct(updatedProduct);

    localStorage.setItem("product", JSON.stringify(updatedProduct));

    Swal.fire({
      icon: "success",
      text: "Menu Berhasil Dihapus",
      showConfirmButton: false,
      timer: 1200,
      position: "top-end",
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5 mx-32 max-w-screen-xl text-gray-500">
        <h1 className="text-2xl font-bold mb-10 mt-16 text-gray-800">
          Konfirmasi Pesanan
        </h1>
        {product.map((product, index) => (
          <div
            className="bg-red-800 w-full h-32 flex items-center justify-between text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            <div className="flex gap-5 items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg shadow-lg"
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{product.name}</p>
                <span className="text-xl font-bold">
                  Rp {product.price.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                className="bg-white text-red-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center gap-2"
                onClick={() => handleDelete(index)}
              >
                <FaTrash className="text-xl" /> Delete
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            className="bg-white text-red-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center gap-2 w-[150px] mb-16"
            onClick={handleCheckout}
          >
            <FaCheckCircle className="text-xl" /> Pesan
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
