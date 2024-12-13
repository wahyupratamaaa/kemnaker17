// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { IoMdBackspace } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";

const Modal = ({ product, isOpen, closeModal }) => {
  if (!isOpen) return null;

  const handleCheckout = () => {
    const storedProduct = JSON.parse(localStorage.getItem("product")) || [];
    const updateProduct = [
      ...storedProduct,
      { name: product.name, price: product.price, image: product.image },
    ];
    localStorage.setItem("product", JSON.stringify(updateProduct));
    Swal.fire({
      icon: "success",
      text: "Menu Berhasil Ditambahkan",
      showConfirmButton: false,
      timer: 1200,
      position: "top-end",
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#FFF5E4] w-11/12 sm:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <div
          className="w-full h-96 bg-cover bg-center rounded-lg mt-4"
          style={{
            backgroundImage: `url(${product.image})`,
            objectFit: "cover",
          }}
        >
          {!product.image && (
            <p className="text-red-800 text-1xl text-center">
              Gambar tidak tersedia
            </p>
          )}
        </div>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-2 text-xl font-bold text-red-800">
          Rp {product.price.toLocaleString()}
        </p>
        <div className="flex gap-4 w-full justify-between mt-5 text-3xl">
          <button onClick={closeModal} className=" text-red-800 rounded ">
            <IoMdBackspace />
          </button>
          <button
            onClick={handleCheckout}
            className=" text-orange-600 rounded "
          >
            <BiFoodMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
